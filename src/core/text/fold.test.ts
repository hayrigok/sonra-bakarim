import { foldTurkish } from './fold';

describe('foldTurkish', () => {
  it('lowercases Turkish capitals correctly', () => {
    expect(foldTurkish('İSTANBUL')).toBe('istanbul');
    expect(foldTurkish('ŞUBAT ÇARŞAMBA')).toBe('subat carsamba');
    expect(foldTurkish('EKİM')).toBe('ekim');
  });

  it('treats OCR mix-ups of ı and i as the same letter', () => {
    expect(foldTurkish('Ekım')).toBe('ekim');
    expect(foldTurkish('EKIM')).toBe('ekim');
  });

  it('normalizes apostrophes, dashes and non-breaking spaces', () => {
    expect(foldTurkish('Ekim’e')).toBe("ekim'e");
    expect(foldTurkish('15 Aralık – 5 Ocak')).toBe('15 aralik - 5 ocak');
    expect(foldTurkish('89,90 ₺')).toBe('89,90 ₺');
  });

  it('keeps the text length so offsets map back to the original', () => {
    const text = 'Kupon 🎉 İNDİRİM ŞÖLENİ’nde';
    expect(foldTurkish(text)).toHaveLength(text.length);
  });
});
