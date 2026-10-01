/** Writes an amount the Turkish way: 124990 kuruş is "1.249,90 TL". */
export function formatKurus(kurus: number): string {
  const sign = kurus < 0 ? '-' : '';
  const absolute = Math.abs(kurus);
  const lira = String(Math.floor(absolute / 100)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const fraction = String(absolute % 100).padStart(2, '0');
  return `${sign}${lira},${fraction} TL`;
}
