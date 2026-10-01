import { foldTurkish } from '../text/fold';

export interface AmountMatch {
  /** Offset of the match in the original text. */
  index: number;
  length: number;
  /** The matched text exactly as written, e.g. "₺1.299,99". */
  text: string;
  /** The amount in kuruş, so 89,90 TL is 8990. Integers avoid rounding errors. */
  kurus: number;
}

const SP = '[^\\S\\n]';
const NUMBER = '\\d[\\d.,]*\\d|\\d';
const SCALE = `(?:${SP}+(bin|milyon))?`;
const SCALE_FACTOR: Record<string, number> = { bin: 1_000, milyon: 1_000_000 };

// Folded currency words: "TL", "TL'ye", "₺", "TRY", "lira", "liralık", "Türk Lirası".
const CURRENCY_AFTER = "(?:tl|try|₺|turk lirasi|lira[a-z]*)(?![a-z])";
const CURRENCY_BEFORE = '(?:₺|(?<![a-z])(?:tl|try))';

// "1.250,00 TL", "89,90₺", "50 bin TL'ye". A percent sign means a discount rate, not money.
const AMOUNT_WITH_SUFFIX = new RegExp(
  `(?<![\\d.,%])(${NUMBER})${SCALE}${SP}*${CURRENCY_AFTER}`,
  'g',
);

// "₺89,90", "TL 250"
const AMOUNT_WITH_PREFIX = new RegExp(
  `${CURRENCY_BEFORE}${SP}*(${NUMBER})${SCALE}(?!\\d|[.,]\\d)`,
  'g',
);

function isGrouped(digits: string, separator: string): boolean {
  const escaped = separator === '.' ? '\\.' : separator;
  return new RegExp(`^\\d{1,3}(?:${escaped}\\d{3})+$`).test(digits);
}

/**
 * Reads a number written the Turkish way ("1.250,00") or the English way
 * ("1,250.00", "89.90") and returns it in kuruş, or undefined if it is not a
 * well-formed amount.
 */
export function parseAmountNumber(raw: string): number | undefined {
  const lastDot = raw.lastIndexOf('.');
  const lastComma = raw.lastIndexOf(',');
  let whole: string;
  let fraction = '';

  if (lastDot >= 0 && lastComma >= 0) {
    // Both separators: whichever comes last marks the decimals.
    const decimal = lastDot > lastComma ? '.' : ',';
    const thousands = decimal === '.' ? ',' : '.';
    const parts = raw.split(decimal);
    if (parts.length !== 2 || parts[1].length > 2) return undefined;
    if (!isGrouped(parts[0], thousands)) return undefined;
    whole = parts[0].split(thousands).join('');
    fraction = parts[1];
  } else if (lastDot >= 0 || lastComma >= 0) {
    // One kind of separator: one or two digits after it are decimals, groups of three are thousands.
    const separator = lastDot >= 0 ? '.' : ',';
    const parts = raw.split(separator);
    if (parts.length === 2 && parts[1].length <= 2) {
      whole = parts[0];
      fraction = parts[1];
    } else if (isGrouped(raw, separator)) {
      whole = parts.join('');
    } else {
      return undefined;
    }
  } else {
    whole = raw;
  }

  const kurus = Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  return Number.isSafeInteger(kurus) ? kurus : undefined;
}

/** Finds every Turkish lira amount in screenshot text. */
export function findAmounts(text: string): AmountMatch[] {
  const folded = foldTurkish(text);
  const matches: AmountMatch[] = [];

  const add = (index: number, length: number, number: string, scale: string | undefined) => {
    if (matches.some((m) => index < m.index + m.length && m.index < index + length)) return;
    const kurus = parseAmountNumber(number);
    if (kurus === undefined) return;
    matches.push({
      index,
      length,
      text: text.slice(index, index + length),
      kurus: scale ? kurus * SCALE_FACTOR[scale] : kurus,
    });
  };

  // Suffix forms first: in "100 TL 250 TL" the "TL 250" reading must not win.
  for (const m of folded.matchAll(AMOUNT_WITH_SUFFIX)) add(m.index, m[0].length, m[1], m[2]);
  for (const m of folded.matchAll(AMOUNT_WITH_PREFIX)) add(m.index, m[0].length, m[1], m[2]);

  return matches.sort((a, b) => a.index - b.index);
}
