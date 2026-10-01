import { weekdayOf, type CalendarDate, type TimeOfDay } from './calendar';

const MONTH_NAMES = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

// Monday first, matching weekdayOf().
const WEEKDAY_NAMES = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

function twoDigits(value: number): string {
  return String(value).padStart(2, '0');
}

/** "31 Ekim 2026 Cumartesi", or with a time "31 Ekim 2026 Cumartesi, 23:59". */
export function formatDate(date: CalendarDate, time?: TimeOfDay): string {
  const day = `${date.day} ${MONTH_NAMES[date.month - 1]} ${date.year} ${WEEKDAY_NAMES[weekdayOf(date)]}`;
  return time ? `${day}, ${twoDigits(time.hour)}:${twoDigits(time.minute)}` : day;
}
