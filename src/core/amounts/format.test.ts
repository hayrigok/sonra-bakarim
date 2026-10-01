import { formatKurus } from './format';

describe('formatKurus', () => {
  it.each([
    [124990, '1.249,90 TL'],
    [8990, '89,90 TL'],
    [25000, '250,00 TL'],
    [5, '0,05 TL'],
    [0, '0,00 TL'],
    [150_000_000, '1.500.000,00 TL'],
    [-1500, '-15,00 TL'],
  ])('%d kuruş is %s', (kurus, expected) => {
    expect(formatKurus(kurus)).toBe(expected);
  });
});
