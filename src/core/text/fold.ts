const FOLD_MAP: Record<string, string> = {
  İ: 'i',
  I: 'i',
  ı: 'i',
  Ş: 's',
  ş: 's',
  Ğ: 'g',
  ğ: 'g',
  Ü: 'u',
  ü: 'u',
  Ö: 'o',
  ö: 'o',
  Ç: 'c',
  ç: 'c',
  Â: 'a',
  â: 'a',
  Î: 'i',
  î: 'i',
  Û: 'u',
  û: 'u',
  '’': "'",
  '‘': "'",
  '–': '-',
  '—': '-',
  ' ': ' ',
  ' ': ' ',
};

/**
 * Lowercases text and strips Turkish diacritics so "EKİM", "Ekim" and an OCR'd
 * "Ekım" all become "ekim". Curly apostrophes, long dashes and non-breaking
 * spaces are normalized too. Every character maps to exactly one character, so
 * a match offset in the folded text is the same offset in the original.
 */
export function foldTurkish(text: string): string {
  let folded = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const mapped = FOLD_MAP[char];
    if (mapped !== undefined) {
      folded += mapped;
      continue;
    }
    const lower = char.toLowerCase();
    folded += lower.length === 1 ? lower : char;
  }
  return folded;
}
