import { foldTurkish } from '../text/fold';
import {
  addDays,
  daysBetween,
  isValidDate,
  weekdayOf,
  type CalendarDate,
  type TimeOfDay,
} from './calendar';

export interface DateMatch {
  /** Offset of the match in the original text. */
  index: number;
  length: number;
  /** The matched text exactly as written, e.g. "15 EKİM CUMARTESİ 20.30". */
  text: string;
  date: CalendarDate;
  time?: TimeOfDay;
  /** The year was not written and was guessed from the screenshot's date. */
  yearInferred: boolean;
  /** The date depends on when the screenshot was taken ("yarın", "Cumartesi 21.00"). */
  relative: boolean;
}

// All word lists are in folded form (see foldTurkish).
const MONTHS = [
  'ocak',
  'subat',
  'mart',
  'nisan',
  'mayis',
  'haziran',
  'temmuz',
  'agustos',
  'eylul',
  'ekim',
  'kasim',
  'aralik',
];
const MONTH_ABBREVIATIONS = [
  'oca',
  'sub',
  'mar',
  'nis',
  'may',
  'haz',
  'tem',
  'agu',
  'eyl',
  'eki',
  'kas',
  'ara',
];
// Case endings, with or without an apostrophe: "Ekim'e", "Ekimde", "Martta".
const MONTH_SUFFIX = "'[a-z]+|nda|nde|ta|te|da|de|ya|ye|in|nin|a|e";

// Monday first, matching weekdayOf().
const WEEKDAYS = ['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma', 'cumartesi', 'pazar'];
const WEEKDAY_ABBREVIATIONS: Record<string, number> = {
  pzt: 0,
  sal: 1,
  car: 2,
  crs: 2,
  per: 3,
  prs: 3,
  cum: 4,
  cmt: 5,
  cts: 5,
  paz: 6,
  pzr: 6,
};

const FULL_WEEKDAY = WEEKDAYS.join('|');
const ANY_WEEKDAY = [...WEEKDAYS, ...Object.keys(WEEKDAY_ABBREVIATIONS)].join('|');
// Whitespace that stays on the same line: a time on the next OCR line belongs to something else.
const SP = '[^\\S\\n]';

// "15 Ekim", "Cumartesi, 15 Ekim 2026", "15-20 Ekim", "28 Eyl 2026", "20 Ekim'e"
const NAMED_DATE = new RegExp(
  `(?:(${ANY_WEEKDAY})(?![a-z]),?${SP}+)?` +
    `(?<![\\d.,])(\\d{1,2})(?:(${SP}*-${SP}*)(\\d{1,2}))?\\.?${SP}*` +
    `(?:(${MONTHS.join('|')})(?:${MONTH_SUFFIX})?|(${MONTH_ABBREVIATIONS.join('|')})\\.?)(?![a-z])` +
    // The year must not be an amount: "15 Ekim 2000 TL".
    `(?:,?${SP}+((?:19|20)\\d{2})(?!\\d|[.,]\\d|${SP}*(?:tl|try|₺|lira)))?`,
  'g',
);

// "15.10.2026", "15/10/2026", "5-10-26"
const NUMERIC_DATE = /(?<![\d.,/-])(\d{1,2})([./-])(\d{1,2})\2(\d{4}|\d{2})(?!\d|[.,/-]\d)/g;

// "2026-10-15"
const ISO_DATE = /(?<![\d.,/-])((?:19|20)\d{2})-(\d{1,2})-(\d{1,2})(?!\d|[.,/-]\d)/g;

// Longer phrases come first so "yarından sonra" is not read as "yarın".
const RELATIVE_DATE =
  /(?<![a-z0-9])(yarindan sonra|obur gun(?:e|u)?|bugun(?:e|ku|den|un)?|yarin(?:a|ki|dan|in)?|dun(?:ku|den)?|bu aksam(?:ki)?|bu gece(?:ki|ye)?)(?![a-z])/g;

// A weekday on its own counts as a date only when a time follows: "Cumartesi 21.00".
const STANDALONE_WEEKDAY = new RegExp(`(?<![a-z])(${FULL_WEEKDAY})(?![a-z])`, 'g');

const TRAILING_WEEKDAY = new RegExp(`${SP}*[,|•·-]?${SP}*(${ANY_WEEKDAY})(?![a-z])`, 'y');

// "20:30", "20.30", "saat 09:30", "20:30:00". Rejects "12.50 TL" and "12.10.2026".
const TRAILING_TIME = new RegExp(
  `${SP}*[,|•·/-]?${SP}*(?:saati?${SP}*:?${SP}*)?(\\d{1,2})[:.](\\d{2})(?::\\d{2})?` +
    `(?!\\d|[.,]\\d|${SP}*(?:tl|try|₺|lira))`,
  'y',
);

// Words that join the two ends of a range: "15 Aralık - 5 Ocak 2027", "1 Ekim ile 31 Ekim 2026".
const RANGE_JOINER = /^\s*(?:-|ile|ila|ve)\s*$/;

type Candidate = { index: number; end: number; time?: TimeOfDay } & (
  | {
      kind: 'calendar';
      day: number;
      month: number;
      year?: number;
      weekday?: number;
    }
  | { kind: 'relative'; offsetDays: number }
  | { kind: 'weekday'; weekday: number }
);

function weekdayIndex(word: string): number {
  const full = WEEKDAYS.indexOf(word);
  return full >= 0 ? full : WEEKDAY_ABBREVIATIONS[word];
}

function expandYear(year: string): number {
  return year.length === 2 ? 2000 + Number(year) : Number(year);
}

/** Picks up a weekday and/or time written right after a date on the same line. */
function readTrailing(
  folded: string,
  end: number,
): { end: number; weekday?: number; time?: TimeOfDay } {
  let weekday: number | undefined;
  let time: TimeOfDay | undefined;

  TRAILING_WEEKDAY.lastIndex = end;
  const weekdayMatch = TRAILING_WEEKDAY.exec(folded);
  if (weekdayMatch) {
    weekday = weekdayIndex(weekdayMatch[1]);
    end += weekdayMatch[0].length;
  }

  TRAILING_TIME.lastIndex = end;
  const timeMatch = TRAILING_TIME.exec(folded);
  if (timeMatch) {
    const hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2]);
    if (hour < 24 && minute < 60) {
      time = { hour, minute };
      end += timeMatch[0].length;
    }
  }

  return { end, weekday, time };
}

function namedDates(folded: string): Candidate[] {
  const found: Candidate[] = [];
  for (const m of folded.matchAll(NAMED_DATE)) {
    const [whole, leadingWeekday, startDay, rangeSeparator, rangeEndDay, fullMonth, abbreviatedMonth] =
      m;
    const year = m[7] ? Number(m[7]) : undefined;
    const month = fullMonth
      ? MONTHS.indexOf(fullMonth) + 1
      : MONTH_ABBREVIATIONS.indexOf(abbreviatedMonth) + 1;
    const trailing = readTrailing(folded, m.index + whole.length);

    // "Ara", "May", "Kas" are also ordinary words, so a short month name needs a year or time.
    if (abbreviatedMonth && year === undefined && !trailing.time) continue;

    const dayIndex = m.index + whole.search(/\d/);
    if (rangeEndDay === undefined) {
      found.push({
        kind: 'calendar',
        index: m.index,
        end: trailing.end,
        day: Number(startDay),
        month,
        year,
        weekday: trailing.weekday ?? (leadingWeekday ? weekdayIndex(leadingWeekday) : undefined),
        time: trailing.time,
      });
      continue;
    }

    // "15-20 Ekim" is two dates sharing a month.
    if (Number(startDay) < Number(rangeEndDay)) {
      found.push({
        kind: 'calendar',
        index: dayIndex,
        end: dayIndex + startDay.length,
        day: Number(startDay),
        month,
        year,
      });
    }
    found.push({
      kind: 'calendar',
      index: dayIndex + startDay.length + rangeSeparator.length,
      end: trailing.end,
      day: Number(rangeEndDay),
      month,
      year,
      weekday: trailing.weekday,
      time: trailing.time,
    });
  }
  return found;
}

function numericDates(folded: string): Candidate[] {
  const found: Candidate[] = [];
  const add = (index: number, length: number, year: number, month: number, day: number) => {
    if (!isValidDate(year, month, day)) return;
    const trailing = readTrailing(folded, index + length);
    found.push({
      kind: 'calendar',
      index,
      end: trailing.end,
      day,
      month,
      year,
      weekday: trailing.weekday,
      time: trailing.time,
    });
  };
  for (const m of folded.matchAll(NUMERIC_DATE)) {
    add(m.index, m[0].length, expandYear(m[4]), Number(m[3]), Number(m[1]));
  }
  for (const m of folded.matchAll(ISO_DATE)) {
    add(m.index, m[0].length, Number(m[1]), Number(m[2]), Number(m[3]));
  }
  return found;
}

function relativeOffset(word: string): number {
  if (word.startsWith('yarindan') || word.startsWith('obur')) return 2;
  if (word.startsWith('yarin')) return 1;
  if (word.startsWith('dun')) return -1;
  return 0; // bugün, bu akşam, bu gece
}

function relativeDates(folded: string): Candidate[] {
  const found: Candidate[] = [];
  for (const m of folded.matchAll(RELATIVE_DATE)) {
    const trailing = readTrailing(folded, m.index + m[0].length);
    found.push({
      kind: 'relative',
      index: m.index,
      end: trailing.end,
      offsetDays: relativeOffset(m[1]),
      time: trailing.time,
    });
  }
  return found;
}

function weekdayTimes(folded: string): Candidate[] {
  const found: Candidate[] = [];
  for (const m of folded.matchAll(STANDALONE_WEEKDAY)) {
    const trailing = readTrailing(folded, m.index + m[0].length);
    if (!trailing.time) continue;
    found.push({
      kind: 'weekday',
      index: m.index,
      end: trailing.end,
      weekday: weekdayIndex(m[1]),
      time: trailing.time,
    });
  }
  return found;
}

/** Keeps the earliest match at each spot, preferring the longer one on a tie. */
function removeOverlaps(candidates: Candidate[]): Candidate[] {
  const sorted = [...candidates].sort(
    (a, b) => a.index - b.index || b.end - b.index - (a.end - a.index),
  );
  const kept: Candidate[] = [];
  let lastEnd = -1;
  for (const candidate of sorted) {
    if (candidate.index >= lastEnd) {
      kept.push(candidate);
      lastEnd = candidate.end;
    }
  }
  return kept;
}

/** In "15 Aralık - 5 Ocak 2027" the first date takes its year from the second. */
function shareRangeYears(candidates: Candidate[], folded: string): void {
  for (let i = 0; i + 1 < candidates.length; i++) {
    const start = candidates[i];
    const end = candidates[i + 1];
    if (start.kind !== 'calendar' || end.kind !== 'calendar') continue;
    if (start.year !== undefined || end.year === undefined) continue;
    if (!RANGE_JOINER.test(folded.slice(start.end, end.index))) continue;
    const startsBeforeEnd = start.month * 100 + start.day <= end.month * 100 + end.day;
    start.year = startsBeforeEnd ? end.year : end.year - 1;
  }
}

/**
 * Chooses the year closest to the screenshot's date. A written weekday wins over
 * closeness: "5 Ocak Salı" seen in June 2026 is January 2027, since 5 January 2026
 * was a Monday.
 */
function inferYear(
  month: number,
  day: number,
  reference: CalendarDate,
  weekday?: number,
): number | undefined {
  const years = [reference.year - 1, reference.year, reference.year + 1].filter((year) =>
    isValidDate(year, month, day),
  );
  const weekdayMatches =
    weekday === undefined
      ? []
      : years.filter((year) => weekdayOf({ year, month, day }) === weekday);
  const pool = weekdayMatches.length > 0 ? weekdayMatches : years;

  let best: number | undefined;
  let bestDistance = Infinity;
  for (const year of pool) {
    const distance = Math.abs(daysBetween(reference, { year, month, day }));
    if (distance < bestDistance) {
      best = year;
      bestDistance = distance;
    }
  }
  return best;
}

function resolve(
  candidate: Candidate,
  reference: CalendarDate,
): Pick<DateMatch, 'date' | 'yearInferred' | 'relative'> | undefined {
  switch (candidate.kind) {
    case 'relative':
      return {
        date: addDays(reference, candidate.offsetDays),
        yearInferred: false,
        relative: true,
      };
    case 'weekday':
      return {
        date: addDays(reference, (candidate.weekday - weekdayOf(reference) + 7) % 7),
        yearInferred: false,
        relative: true,
      };
    case 'calendar': {
      const { day, month } = candidate;
      if (candidate.year !== undefined) {
        if (!isValidDate(candidate.year, month, day)) return undefined;
        return { date: { year: candidate.year, month, day }, yearInferred: false, relative: false };
      }
      const year = inferYear(month, day, reference, candidate.weekday);
      if (year === undefined) return undefined;
      return { date: { year, month, day }, yearInferred: true, relative: false };
    }
  }
}

/**
 * Finds every date written in Turkish screenshot text.
 *
 * `reference` is the day the screenshot was taken. It fills in missing years and
 * anchors words like "yarın".
 */
export function findDates(text: string, reference: CalendarDate): DateMatch[] {
  const folded = foldTurkish(text);
  const candidates = removeOverlaps([
    ...namedDates(folded),
    ...numericDates(folded),
    ...relativeDates(folded),
    ...weekdayTimes(folded),
  ]);
  shareRangeYears(candidates, folded);

  const matches: DateMatch[] = [];
  for (const candidate of candidates) {
    const resolved = resolve(candidate, reference);
    if (!resolved) continue;
    matches.push({
      index: candidate.index,
      length: candidate.end - candidate.index,
      text: text.slice(candidate.index, candidate.end),
      ...resolved,
      ...(candidate.time && { time: candidate.time }),
    });
  }
  return matches;
}
