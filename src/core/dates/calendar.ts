/** A day on the calendar, independent of time zone. `month` is 1–12. */
export interface CalendarDate {
  year: number;
  month: number;
  day: number;
}

export interface TimeOfDay {
  hour: number;
  minute: number;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function toUtcMs(date: CalendarDate): number {
  return Date.UTC(date.year, date.month - 1, date.day);
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function isValidDate(year: number, month: number, day: number): boolean {
  return (
    Number.isInteger(year) &&
    month >= 1 &&
    month <= 12 &&
    day >= 1 &&
    day <= daysInMonth(year, month)
  );
}

/** Day of the week with Monday as 0 and Sunday as 6, as in Turkey. */
export function weekdayOf(date: CalendarDate): number {
  return (new Date(toUtcMs(date)).getUTCDay() + 6) % 7;
}

export function addDays(date: CalendarDate, days: number): CalendarDate {
  const shifted = new Date(toUtcMs(date) + days * MS_PER_DAY);
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
  };
}

/** Whole days from `from` to `to`; negative when `to` is earlier. */
export function daysBetween(from: CalendarDate, to: CalendarDate): number {
  return Math.round((toUtcMs(to) - toUtcMs(from)) / MS_PER_DAY);
}
