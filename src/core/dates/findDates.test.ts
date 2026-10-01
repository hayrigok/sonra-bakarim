import type { CalendarDate } from './calendar';
import { findDates } from './findDates';

// Screenshot taken on Thursday, 1 October 2026.
const REF: CalendarDate = { year: 2026, month: 10, day: 1 };

function date(year: number, month: number, day: number): CalendarDate {
  return { year, month, day };
}

function only(text: string, reference: CalendarDate = REF) {
  const matches = findDates(text, reference);
  expect(matches).toHaveLength(1);
  return matches[0];
}

describe('findDates', () => {
  describe('numeric dates', () => {
    it('reads a coupon expiry with its time', () => {
      const m = only('Kupon kodu: TRND50\nSon kullanma tarihi: 31.10.2026 23:59');
      expect(m.date).toEqual(date(2026, 10, 31));
      expect(m.time).toEqual({ hour: 23, minute: 59 });
      expect(m.text).toBe('31.10.2026 23:59');
      expect(m.yearInferred).toBe(false);
      expect(m.relative).toBe(false);
    });

    it('accepts slashes, dashes, two-digit years and ISO dates', () => {
      expect(only('Son kullanma: 31/12/26').date).toEqual(date(2026, 12, 31));
      expect(only('Tarih: 15-10-2026').date).toEqual(date(2026, 10, 15));
      expect(only('Oluşturulma: 2026-10-15').date).toEqual(date(2026, 10, 15));
    });

    it('drops seconds from the time', () => {
      const m = only('İşlem zamanı 15/10/2026 20:30:00');
      expect(m.time).toEqual({ hour: 20, minute: 30 });
      expect(m.text).toBe('15/10/2026 20:30:00');
    });

    it('reads both ends of a numeric range without taking the second as a time', () => {
      const matches = findDates('Geçerlilik: 01.10.2026 - 31.10.2026', REF);
      expect(matches.map((m) => m.date)).toEqual([date(2026, 10, 1), date(2026, 10, 31)]);
      expect(matches[0].time).toBeUndefined();
    });
  });

  describe('dates with month names', () => {
    it('reads an MHRS appointment with weekday and time', () => {
      const m = only('Randevu Tarihi: 14 Ekim 2026 Çarşamba 10:40');
      expect(m.date).toEqual(date(2026, 10, 14));
      expect(m.time).toEqual({ hour: 10, minute: 40 });
      expect(m.text).toBe('14 Ekim 2026 Çarşamba 10:40');
    });

    it('reads an all-caps concert poster and keeps the original spelling', () => {
      const text = 'KONSER\n17 EKİM CUMARTESİ 20.30\nAÇIKHAVA SAHNESİ';
      const m = only(text);
      expect(m.date).toEqual(date(2026, 10, 17));
      expect(m.time).toEqual({ hour: 20, minute: 30 });
      expect(m.yearInferred).toBe(true);
      expect(m.text).toBe('17 EKİM CUMARTESİ 20.30');
      expect(m.index).toBe(text.indexOf('17'));
    });

    it('includes a weekday written before the date', () => {
      const m = only('Etkinlik: Cumartesi, 17 Ekim 2026');
      expect(m.date).toEqual(date(2026, 10, 17));
      expect(m.text).toBe('Cumartesi, 17 Ekim 2026');
    });

    it('reads month names with case endings', () => {
      expect(only("20 Ekim'e kadar geçerli").date).toEqual(date(2026, 10, 20));
      expect(only('20 Ekim’e kadar geçerli').date).toEqual(date(2026, 10, 20));
      expect(only('20 ekimde görüşürüz').date).toEqual(date(2026, 10, 20));
      expect(only('Kampanya 31 Aralıkta bitiyor').date).toEqual(date(2026, 12, 31));
    });

    it('reads month names that OCR wrote without Turkish letters', () => {
      expect(only('15 SUBAT 2027').date).toEqual(date(2027, 2, 15));
      expect(only('3 Agustos 2026').date).toEqual(date(2026, 8, 3));
      expect(only('15 EKIM 2026').date).toEqual(date(2026, 10, 15));
    });

    it('reads short month names only with a year or time', () => {
      expect(only('Sipariş Tarihi: 28 Eyl 2026').date).toEqual(date(2026, 9, 28));
      expect(only('Teslimat 5 Ara 20:00').date).toEqual(date(2026, 12, 5));
      expect(findDates('Teslimat: 5 Ara', REF)).toEqual([]);
    });

    it('reads a day range that shares one month', () => {
      const matches = findDates('Kampanya 1-31 Ekim 2026 tarihleri arasında geçerlidir.', REF);
      expect(matches.map((m) => m.date)).toEqual([date(2026, 10, 1), date(2026, 10, 31)]);
      expect(matches.map((m) => m.text)).toEqual(['1', '31 Ekim 2026']);
    });

    it('gives the start of a range the year written at its end', () => {
      const matches = findDates('Kayıtlar 15 Aralık - 5 Ocak 2027 arasında', REF);
      expect(matches.map((m) => m.date)).toEqual([date(2026, 12, 15), date(2027, 1, 5)]);
      expect(matches[0].yearInferred).toBe(false);
    });

    it('reads several dates on an order screen', () => {
      const matches = findDates(
        'Sipariş tarihi: 28.09.2026\nTahmini teslimat: 2 Ekim Cuma',
        REF,
      );
      expect(matches.map((m) => m.date)).toEqual([date(2026, 9, 28), date(2026, 10, 2)]);
      expect(matches[1].text).toBe('2 Ekim Cuma');
    });
  });

  describe('missing years', () => {
    it('picks the year closest to the screenshot date', () => {
      expect(only('3 Ocak', date(2026, 12, 20)).date).toEqual(date(2027, 1, 3));
      expect(only('28 Aralık', date(2027, 1, 5)).date).toEqual(date(2026, 12, 28));
    });

    it('lets a written weekday decide the year', () => {
      // 5 January 2026 is a Monday, 5 January 2027 a Tuesday.
      const m = only('Seminer: 5 Ocak Salı 14.00', date(2026, 6, 20));
      expect(m.date).toEqual(date(2027, 1, 5));
    });

    it('finds the next 29 February', () => {
      expect(only('29 Şubat', date(2027, 6, 1)).date).toEqual(date(2028, 2, 29));
    });
  });

  describe('dates relative to the screenshot', () => {
    it('reads today, tomorrow, the day after and yesterday', () => {
      expect(only('Son gün bugün!').date).toEqual(date(2026, 10, 1));
      expect(only('Yarından sonra teslim').date).toEqual(date(2026, 10, 3));
      expect(only('Öbür gün görüşelim').date).toEqual(date(2026, 10, 3));
      expect(only('Dün teslim edildi').date).toEqual(date(2026, 9, 30));
    });

    it('reads a time after a relative word', () => {
      const m = only("Yarın 14:00'e kadar geçerli!");
      expect(m.date).toEqual(date(2026, 10, 2));
      expect(m.time).toEqual({ hour: 14, minute: 0 });
      expect(m.relative).toBe(true);
      expect(only("Bu akşam 21.00'de").time).toEqual({ hour: 21, minute: 0 });
    });

    it('reads a weekday with a time as its next occurrence', () => {
      const m = only("Cumartesi 21.00'de Kadıköy'de buluşuyoruz");
      expect(m.date).toEqual(date(2026, 10, 3));
      expect(m.time).toEqual({ hour: 21, minute: 0 });
      expect(m.relative).toBe(true);
      // The screenshot was taken on a Thursday.
      expect(only('Perşembe 19:00').date).toEqual(date(2026, 10, 1));
    });

    it('ignores a weekday with no time', () => {
      expect(findDates('Cuma günü görüşürüz', REF)).toEqual([]);
    });
  });

  describe('times', () => {
    it('does not take a time from the next line', () => {
      const m = only('Randevu Tarihi: 14.10.2026\nRandevu Saati: 10:40');
      expect(m.time).toBeUndefined();
    });

    it('does not take a price for a time', () => {
      expect(only('15 Ekim 2026 12.50 TL').time).toBeUndefined();
    });

    it('does not take a price for a year', () => {
      const m = only('15 Ekim 2000 TL indirim');
      expect(m.date).toEqual(date(2026, 10, 15));
      expect(m.text).toBe('15 Ekim');
    });
  });

  describe('things that are not dates', () => {
    it.each([
      ['phone number', 'Bize ulaşın: 0532 123 45 67'],
      ['IBAN', 'TR33 0006 1005 1978 6457 8413 26'],
      ['amount', 'Toplam: 1.250,00 TL'],
      ['impossible date', 'Tarih: 31.02.2026'],
      ['tracking number', 'Takip No: 1234567890123'],
      ['version number', 'Sürüm 1.2.3'],
      ['time alone', 'Saat 20.30'],
      ['discount rate', '%20 indirim'],
      ['word containing dün', 'Dünyanın en iyi kahvesi'],
      ['word containing pazar', "Bit pazarı 10:00'da açılıyor"],
    ])('%s', (_label, text) => {
      expect(findDates(text, REF)).toEqual([]);
    });
  });
});
