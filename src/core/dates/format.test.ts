import { toCalendarDate } from './calendar';
import { formatDate } from './format';

describe('formatDate', () => {
  it('writes the date with its Turkish month and weekday', () => {
    expect(formatDate({ year: 2026, month: 10, day: 14 })).toBe('14 Ekim 2026 Çarşamba');
  });

  it('adds the time with two-digit hours and minutes', () => {
    expect(formatDate({ year: 2026, month: 10, day: 31 }, { hour: 23, minute: 59 })).toBe(
      '31 Ekim 2026 Cumartesi, 23:59',
    );
    expect(formatDate({ year: 2027, month: 2, day: 15 }, { hour: 9, minute: 5 })).toBe(
      '15 Şubat 2027 Pazartesi, 09:05',
    );
  });
});

describe('toCalendarDate', () => {
  it('takes the local day, even late in the evening', () => {
    expect(toCalendarDate(new Date(2026, 9, 2, 23, 30))).toEqual({ year: 2026, month: 10, day: 2 });
  });
});
