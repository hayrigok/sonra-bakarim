import { findAmounts, parseAmountNumber } from './findAmounts';

function kurus(text: string): number[] {
  return findAmounts(text).map((m) => m.kurus);
}

describe('findAmounts', () => {
  it('reads Turkish-formatted amounts', () => {
    expect(kurus('Toplam: 1.250,00 TL')).toEqual([125000]);
    expect(kurus('₺1.299,99')).toEqual([129999]);
    expect(kurus('12,5 TL')).toEqual([1250]);
  });

  it('reads the lira sign before or after the number', () => {
    const [m] = findAmounts('Sepet Tutarı ₺245,50');
    expect(m.kurus).toBe(24550);
    expect(m.text).toBe('₺245,50');
    expect(kurus('89,90 ₺')).toEqual([8990]);
    expect(kurus('89,90₺')).toEqual([8990]);
    expect(kurus('TL 75,50')).toEqual([7550]);
  });

  it('reads TL with case endings and without a space', () => {
    const [m] = findAmounts("250 TL'ye varan indirim");
    expect(m.kurus).toBe(25000);
    expect(m.text).toBe('250 TL');
    expect(kurus('150TL')).toEqual([15000]);
  });

  it('reads lira written as a word or code', () => {
    expect(kurus('250 lira')).toEqual([25000]);
    expect(kurus('100 liralık hediye çeki')).toEqual([10000]);
    expect(kurus('100 Türk Lirası')).toEqual([10000]);
    expect(kurus('500 TRY')).toEqual([50000]);
  });

  it('reads English-formatted amounts from foreign sites', () => {
    expect(kurus('89.90 TL')).toEqual([8990]);
    expect(kurus('1,250.00 TL')).toEqual([125000]);
    expect(kurus('12.500 TL')).toEqual([1250000]);
  });

  it('reads "bin" and "milyon"', () => {
    expect(kurus("50 bin TL'ye kadar")).toEqual([5_000_000]);
    expect(kurus('1,5 milyon TL')).toEqual([150_000_000]);
  });

  it('reads a discount line without its minus sign', () => {
    const [m] = findAmounts('Kupon indirimi -₺15,00');
    expect(m.kurus).toBe(1500);
    expect(m.text).toBe('₺15,00');
  });

  it('reads every amount in a coupon condition', () => {
    expect(kurus('Min. sepet tutarı 200 TL, indirim 50 TL')).toEqual([20000, 5000]);
    expect(kurus('100 TL 250 TL')).toEqual([10000, 25000]);
  });

  it.each([
    ['discount rate', '%20 indirim'],
    ['date', 'Son gün 15.10.2026'],
    ['date before TL', '31.10.2026 TL'],
    ['order number', 'Sipariş no: 1234567'],
    ['malformed number', '1.25.000 TL'],
    ['TL with no number', 'TL hesabınıza aktarıldı'],
  ])('ignores a %s', (_label, text) => {
    expect(findAmounts(text)).toEqual([]);
  });
});

describe('parseAmountNumber', () => {
  it.each([
    ['250', 25000],
    ['1.250', 125000],
    ['1.250,00', 125000],
    ['1,250.00', 125000],
    ['89,9', 8990],
    ['0,99', 99],
    ['1.234.567,89', 123456789],
  ])('%s', (raw, expected) => {
    expect(parseAmountNumber(raw)).toBe(expected);
  });

  it.each(['1.25.000', '1,2,3', '12,345,67', '1.250,999'])('rejects %s', (raw) => {
    expect(parseAmountNumber(raw)).toBeUndefined();
  });
});
