---
name: turkce-taniyici-ekle
description: Step-by-step workflow for adding or changing a Turkish content recognizer in Sonra Bakarım's src/core engine (coupon, cargo tracking, MHRS appointment, IBAN, bill, return deadline, subscription, ticket, ÖSYM, event, address, recipe, phone, Wi-Fi, warranty, product). Use whenever a recognizer is created, extended, or fixed, or when a screenshot text is recognized wrongly.
---

# Türkçe Tanıyıcı Ekleme / Düzeltme

Sonra Bakarım'ın farkı Türk içeriğini herkesten iyi tanımak. Her tanıyıcı aynı kalitede çıkmalı. Kurallar ve mevcut mimari için önce projenin `CLAUDE.md`'sindeki "Mimari" ve "Kritik Kırılma Noktaları" bölümlerini oku.

## 1. Hazırlık
- `docs/YAPILACAKLAR.md`'de bu türün maddelerini oku: neleri tanıması bekleniyor, hangi hatırlatma kuralları var.
- **Gerçek örnekleri topla.** `ekran-goruntuleri/` klasöründeki görüntüleri oku ve metne çevir. Kişisel bilgileri uydurma değerlerle değiştir. Örnek yoksa farklı kaynaklardan gerçekçi metinler yaz: SMS, uygulama ekranı, e-posta, web sayfası, iOS ve Android görünümleri.
- **Önce olumsuz örnekleri listele:** Neler bu türle karışabilir? Örnek: kupon kodu ↔ SMS doğrulama kodu, sipariş numarası, PNR, Wi-Fi şifresi; kargo numarası ↔ telefon, IBAN, sipariş numarası.

## 2. Tasarım kuralları
- Kod `src/core/<tür>/find<Tür>.ts` altında saf TypeScript'tir: React Native import yok, ağ yok, kullanıcı içeriğini loglamak yok.
- Eşleşme her zaman **katlanmış metinde** (`foldTurkish`) aranır, sonuç orijinal metinden kesilir. Katlama karakter sayısını korur; bu değişmez kuralı bozma.
- Tarih ve tutar için `findDates` ve `findAmounts`'u yeniden kullan, kendi tarih ya da tutar okuyucunu yazma.
- **Etiket bazlı alanlar** ("Randevu Saati:", "Son Ödeme Tarihi:", "Takip No:") satır satır okunur. Genel tarih okuyucu alt satırdaki saati bağlamaz, bu birleştirme tanıyıcının işidir.
- OCR hatalarını hesaba kat: Türkçe harfsiz yazım ("Subat", "Ekım"), tamamı büyük harf, satır kırılmış değerler, kodlarda 0/O, 1/I/l, 5/S, 8/B karışıklığı.
- Emin olunmayan sonucu güven puanıyla işaretle. Yanlış alarm, kaçırılan bulgudan daha kötüdür: kullanıcıya yanlış hatırlatma kurar.
- Bilinçli sınırlar (tanınmayacak durumlar) kodda yorum olarak ve CLAUDE.md'de yazılır.

## 3. Önce test (TDD)
- Testi kaynak dosyanın yanına yaz: `find<Tür>.test.ts`.
- Testler şunları kapsar: gerçekçi olumlu örnekler (her kaynak türünden), OCR bozuk sürümleri, **olumsuz örnekler** (`it.each` tablosu: telefon, IBAN, tutar, tarih, sürüm numarası, doğrulama kodu…), referans tarihine bağlı davranış, eşleşmenin metindeki konumu ve metni (`index`, `text`).
- Önce testlerin kırmızı olduğunu gör, sonra kodu yaz.

## 4. Testlerde olmayan metinlerle deneme
`src/core/zz-probe.test.ts` adlı geçici bir dosya yaz. Uzun ve gerçekçi ekran metinlerini (kargo SMS'i, MHRS ekranı, sipariş özeti, fatura, bilet, sohbet) tanıyıcıdan geçir, sonuçları `console.log` ile incele. Bulunan her hatayı kalıcı teste çevir. **Geçici dosyayı sil.**

## 5. Deneme ekranına ekle
- `src/dev/RecognitionPlayground.tsx`'e yeni türün bölümünü ekle. Metindeki işaretleme için yeni bir renk kullan, mevcut renklerle karışmasın.
- `src/dev/samples.ts`'e bu türün uydurma örneğini ekle (gerçek kişisel veri yok).
- Ekran Expo Go'da çalışmaya devam etmeli: native modül import etme.

## 6. Doğrulama kapısı
```bash
npm test                              # tüm testler; sayıyı not et
npx tsc --noEmit
npx expo lint
npx expo export --platform ios        # ekran değiştiyse: paketleme ve Hermes derlemesi
```
Hepsi temiz geçmeden bitti deme.

## 7. Belgeler (aynı oturumda)
- `CLAUDE.md` → "Mimari" bölümüne bu tanıyıcının alt başlığını ekle: ne tanır, akış, bilinçli kurallar ve sınırlar. "Test Altyapısı" tablosuna test dosyasını ekle, toplam test sayısını güncelle. "Proje Yapısı" ağacını güncelle.
- `docs/YAPILACAKLAR.md` → biten maddeleri `[x]` + tarihle işaretle; "Genel durum" tablosunu ve en üstteki "▶️ Sıradaki iş" satırını güncelle. Bölüm bitince CLAUDE.md'deki "Şu anki bölüm" kısmını bir sonraki bölümün maddeleriyle değiştir.
- Bir karar alındıysa `docs/YOL-HARITASI.md`'ye tarihli yaz.

## 8. Sahibe rapor
Türkçe, ürün diliyle kısa bir rapor yaz:
- ✅ Neleri tanıyor (gerçek örneklerle)
- 🚫 Neleri bilerek karıştırmıyor
- ⚠️ Bilinen sınırlar
- 🧪 Test sayısı
- 📱 Deneme ekranında nasıl deneyeceği

Push etmeden önce sor.
