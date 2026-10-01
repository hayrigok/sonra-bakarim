# Sonra Bakarım — Yol Haritası ve Kararlar

Bu dosya projenin hafızasıdır. Her önemli karar ve adım buraya yazılır.

## Alınan kararlar (2026-10-01)

- **Fikir:** Ekran görüntülerini telefonda okuyup işe yarar şeylere çeviren uygulama.
- **Rakipler:** Fikir global olarak var: Google Pixel Screenshots (sadece Pixel telefonlar), SnapActions, Captr, Skreenly, Sorti, ScreenVault, PixelShot. Türkiye'ye odaklı bir rakip bulunamadı.
- **Farkımız:** Türk içeriğini herkesten iyi anlamak:
  - MHRS randevuları
  - Trendyol, Hepsiburada, Getir ve Yemeksepeti kuponları ve son kullanma tarihleri
  - Yurtiçi, Aras, MNG ve PTT kargo numaraları
  - TR IBAN'lar
  - Türkçe tarihler ve TL tutarlar
- **Gizlilik:** Görüntüler ve okunan metin telefondan çıkmaz. Bu, pazarlamanın da ana mesajı. KVKK'ya uyulacak.
- **Platform:** Android ve iOS aynı anda. React Native + Expo (TypeScript), derlemeler bulutta (EAS).
- **Çıkış stratejisi:** Aceleyle MVP çıkarılmayacak. Önce kapalı beta (TestFlight + Google Play kapalı testi; Play, yeni hesaplardan 12 test kullanıcısıyla 14 gün test istiyor), ardından iki mağazada aynı gün herkese açık çıkış.
- **Rol dağılımı:** Ürün sahibi yönetir, kodu Claude yazar.
- **Kod deposu:** GitHub'da özel (private) depo (https://github.com/hayrigok/sonra-bakarim). Ürün sahibinin topladığı gerçek ekran görüntüleri `ekran-goruntuleri/` klasöründe durur ve GitHub'a yüklenmez. Testlerdeki örnek metinlerde gerçek kişisel bilgi kullanılmaz (isim, IBAN, takip numarası uydurulur).

## Uygulamanın tanıyacağı içerikler (karar 2026-10-01)

Ürün sahibi aşağıdakilerin hepsinin çıkışta olmasına karar verdi.

| Ekran görüntüsünde ne var | Uygulama ne yapar |
|---|---|
| İndirim kodu / kupon (Trendyol, Hepsiburada, Getir, Yemeksepeti) | Kodu kaydeder, süresi bitmeden 1 gün önce hatırlatır |
| Kargo takip numarası (Yurtiçi, Aras, MNG, PTT) | Kargo firmasını tanır, dokununca firmanın takip sayfasını açar |
| MHRS hastane randevusu | Takvime ekler, bir gün önce hatırlatır |
| Etkinlik veya konser afişi | Takvime ekler |
| Adres veya mekan | Dokununca telefonun Haritalar uygulamasında açar |
| IBAN | Doğrular, isimle kaydeder ("Ahmet - kira"), tek dokunuşla kopyalanır |
| Tarif, kitap, film önerisi | İlgili listeye ekler |
| Fatura (elektrik, doğalgaz, su, telefon, internet) | Son ödeme tarihinden önce hatırlatır |
| Uçak ve otobüs bileti (THY, Pegasus, AJet, obilet; PNR kodu) | Takvime ekler, online check-in açılınca hatırlatır |
| Sipariş (Trendyol, Hepsiburada) | İade süresi bitmeden hatırlatır |
| Abonelik (Netflix, Spotify, YouTube Premium, Disney+, Exxen) | Yenilenmeden önce "iptal edecek miydin?" diye sorar |
| ÖSYM sınav giriş belgesi (YKS, KPSS, ALES) | Sınavı takvime ekler, sınav binasını kaydeder |
| Telefon numarası | Ara, rehbere ekle |
| Wi-Fi ağ adı ve şifresi | Şifreyi tek dokunuşla kopyalar |
| Garanti belgesi | Garanti bitmeden hatırlatır |
| Ürün ekran görüntüsü | İstek listesine ekler |

**Galeri temizliği:** İşi biten ekran görüntülerini (süresi geçmiş kupon, teslim edilmiş kargo, doğrulama kodları) silmeyi önerir ve "1,2 GB yer açılacak" gibi ne kadar yer açılacağını gösterir. İlk tarama ekranı gibi paylaşılabilir bir "vay be" anı.

Türkçe tarihler ("15 Ekim Cumartesi 20.30") ve TL tutarlar bunların hepsinin içinde kullanılan ortak parçalar.

### Kargo ve harita: telefondan veri çıkmayacak (karar 2026-10-01)

Kargonun durumunu otomatik takip etmek takip numarasını kargo firmasına, adresi haritada noktaya çevirmek ise adresi Google'a ya da Apple'a göndermeyi gerektiriyor. Bu yüzden ilk sürümde ikisi de kullanıcı dokununca çalışacak: kargo kartı firmanın takip sayfasını, adres telefonun Haritalar uygulamasını açacak. Otomatik kargo takibi ve uygulama içi harita, ürün sahibinin onayıyla sonraki sürümlere kalır.

### Yapım sırası

Hepsi çıkışta olacak ama tanıma motoru şu sırayla yazılacak; en çok kullanılan ve rakiplerden en çok ayrıştığımız türler önce:

1. Ortak parçalar: Türkçe tarih ve saat, TL tutar
2. Kupon, kargo, MHRS, IBAN
3. Fatura, iade süresi, abonelik
4. Uçak/otobüs bileti, ÖSYM, etkinlik afişi, adres
5. Tarif, kitap, film; telefon, Wi-Fi, garanti, ürün
6. Galeri temizliği (arayüz aşamasında, diğer tanıyıcıların üstüne kurulur)

## Aşamalar

1. [x] Proje iskeleti ve CLAUDE.md
2. [ ] **Türkçe tanıma motoru** (`src/core/`): yukarıdaki içerik türlerinin tanıyıcıları, ortak Türkçe tarih ve TL tutar okuyucuları, gerçek ekran görüntüsü metinleriyle testleri
3. [ ] Telefonda metin okuma (OCR, Google ML Kit) ve galeri tarama
4. [ ] Arayüz: ilk açılıştaki "galerini taradım, şunları buldum" ekranı, kartlar, hatırlatmalar, arama, görsel kimlik
5. [ ] iOS paylaşım menüsü ("Paylaş → Sonra Bakarım") ve Android'de yeni ekran görüntülerini otomatik yakalama
6. [ ] Yasal ve mağaza hazırlığı: KVKK gizlilik politikası, Apple Developer (yıllık 99$) ve Google Play (tek seferlik 25$) hesapları, mağaza görselleri
7. [ ] Kapalı beta (20–50 kişi), geri bildirimlere göre düzeltmeler
8. [ ] Herkese açık çıkış

## Sıradaki adım

Türkçe tanıma motoruna yapım sırasının 1. adımından başlamak. Ürün sahibi test seti için gerçek ekran görüntüleri topluyor ve bunları `ekran-goruntuleri/` klasörüne koyacak: kuponlar, kargo bildirimleri, MHRS randevuları, IBAN mesajları, faturalar, biletler, sipariş ve abonelik ekranları, sınav belgeleri, etkinlik afişleri, adresler, tarifler. Kişisel bilgiler karalanabilir.
