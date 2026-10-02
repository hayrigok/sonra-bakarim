# Sonra Bakarım — Yol Haritası ve Kararlar

Bu dosya projenin hafızasıdır. Her önemli karar ve adım buraya yazılır.

## Alınan kararlar (2026-10-01)

- **Fikir:** Ekran görüntülerini telefonda okuyup işe yarar şeylere çeviren uygulama.
- **Rakipler:** Fikir global olarak var: Google Pixel Screenshots (sadece Pixel telefonlar), SnapActions, Captr, Skreenly, Sorti, ScreenVault, PixelShot. Türkiye'ye odaklı bir rakip bulunamadı.
- **Farkımız:** Türk içeriğini herkesten iyi anlamak:
  - MHRS randevuları
  - Trendyol, Hepsiburada, Getir ve Yemeksepeti kuponları ve son kullanma tarihleri
  - Yurtiçi, Aras, DHL eCommerce (eski MNG), PTT, Trendyol Express, HepsiJET ve Sürat kargo numaraları
  - TR IBAN'lar
  - Türkçe tarihler ve TL tutarlar
- **Gizlilik:** Görüntüler ve okunan metin telefondan çıkmaz. Bu, pazarlamanın da ana mesajı. KVKK'ya uyulacak.
- **Platform:** Android ve iOS aynı anda. React Native + Expo (TypeScript), derlemeler bulutta (EAS).
- **Çıkış stratejisi:** Aceleyle MVP çıkarılmayacak. Önce kapalı beta (TestFlight + Google Play kapalı testi; Play, yeni hesaplardan 12 test kullanıcısıyla 14 gün test istiyor), ardından iki mağazada aynı gün herkese açık çıkış.
- **Rol dağılımı:** Ürün sahibi yönetir, kodu Claude yazar.
- **Kod deposu:** GitHub'da özel (private) depo (https://github.com/hayrigok/sonra-bakarim). Ürün sahibinin topladığı gerçek ekran görüntüleri `ekran-goruntuleri/` klasöründe durur ve GitHub'a yüklenmez. Testlerdeki örnek metinlerde gerçek kişisel bilgi kullanılmaz (isim, IBAN, takip numarası uydurulur).
- **Test telefonları ve hesaplar (2026-10-02):** Ürün sahibinin telefonu iPhone. Apple Developer ve Google Play hesapları sonraya bırakıldı (ürün sahibinin kararı). O zamana kadar test şöyle yapılıyor: tanıma motoru bilgisayarda otomatik testlerle; gerçek içerik `ekran-goruntuleri/` klasörüyle; iPhone'da Expo Go'daki "Tanıma denemesi" ekranıyla (ücretsiz Expo hesabı yeterli); ekran görüntüsünden okuma ve galeri taraması ise ödünç bir Android telefona kurulan deneme sürümüyle. Apple hesabı, iPhone'da gerçek okuma testinden ve TestFlight betasından önce açılacak. Google Play'in cihaz doğrulaması da ödünç Android telefonla yapılacak.
- **Çalışma standardı (2026-10-02):** Ürün sahibinin sevgilify projesinde yerleştirdiği çalışma kuralları bu projeye uyarlandı ve CLAUDE.md'ye yazıldı: kıdemli yazılımcı kalitesi, her işten sonra doğrulama kapısı (test, tip kontrolü, lint, paketleme), motorun nasıl çalıştığının ve bilinen sorunların yazılı tutulması. **GitHub'a yükleme (push) yalnızca ürün sahibinin açık onayıyla yapılır; her yükleme ayrı onay ister.**
- **Geliştirme araçları (2026-10-02):** Ürün sahibinin isteğiyle kalıcı olarak kuruldu: resmi Expo eklentisi, mobile-mcp (kullanım verisi kapalı), android-mcp, everything-claude-code-mobile'dan platformdan bağımsız 3 skill (erişilebilirlik, uygulama yaşam döngüsü, derin bağlantı) ve skills-manager masaüstü uygulaması. Paketin geri kalanı native Kotlin/Swift için yazıldığından ve bir kısmı gizlilik kuralımıza ters düştüğünden kurulmadı. İkinci pakette superpowers, context7, playwright, Claude Code'un geliştirme eklentileri, wshobson koleksiyonundan projelere uyan 10 eklenti ve Anthropic örnek skill'leri kuruldu. Koleksiyonların ilgisiz kısımları ve hesapta zaten bulunanlar çift olmasın diye kurulmadı. Ayrıntılar CLAUDE.md'de.
- **Tüm projelerde ortak kurallar ve skill'ler (2026-10-02):** Ürün sahibinin çalışma standardı bilgisayar düzeyindeki `~/.claude/CLAUDE.md`'ye yazıldı; artık her projede otomatik geçerli. Ortak skill klasörüne (`~/.claude/skills/`) Türkçe arayüz metni, KVKK kontrol listesi ve sahip için belge düzeni skill'leri eklendi. Sonra Bakarım'a özel "Türkçe tanıyıcı ekleme" skill'i proje klasöründe.
- **Ortak skill'ler GitHub'da (2026-10-02):** Ürün sahibinin isteğiyle Claude'un yazdığı üç ortak skill (Türkçe arayüz metni, KVKK kontrol listesi, sahip belgeleri) ayrı bir özel depoya yüklendi: https://github.com/hayrigok/claude-skills. Böylece yedeklenmiş oluyorlar, başka bir bilgisayara tek komutla kuruluyorlar ve istenirse tek bir projeye kopyalanabiliyorlar. Başka kaynaklardan kurulan skill'ler depoya alınmadı. Sonra Bakarım'a özel iki skill bu projenin içinde kalıyor.
- **Skill listesine ayrılan yer (2026-10-02):** Kurulu 138 skill, Claude'un skill listesine ayırdığı yere sığmıyordu. Bu yer konuşma hafızasının %1'iydi; sığmayanlar yalnızca adıyla görünüyordu ve Claude onları kendiliğinden seçemiyordu. Ürün sahibinin onayıyla bu pay %2'ye çıkarıldı ve hepsi açıklamasıyla görünür oldu. Bedeli mesaj başına yaklaşık 2-3 bin token. Ayar bilgisayar düzeyinde, tüm projelerde geçerli.
- **Otomatik tarama önce (2026-10-03):** Ürün sahibinin kararı: kullanıcı hiçbir şeyi elle girmeyecek ya da yapıştırmayacak, çünkü insanlar elle girmeye uğraşmaz. Uygulama galeriyi kendisi tarar, bulduklarını kendisi kaydeder. Bu yüzden yapım sırası değişti. Önce baştan sona çalışan ince bir zincir kurulacak: galeri izni → ekran görüntülerini tarama → yazıyı okuma → kuponları bulma → listede gösterme. Sonra her yeni tür eklendikçe gerçek taramada hemen görünecek. Mesaj yapıştırma ekranı yalnızca geliştirici aracı olarak kalıyor.
- **Bulunanlar kendiliğinden kaydedilir (2026-10-03):** Kupon, kargo, fatura, abonelik, doğum günü ve diğer türler sorulmadan eklenir. Emin olunmayan sonuçlar "Emin değilim" kutusuna gider. **İlaç hatırlatması ve parola kaydı ise tek dokunuşla onay ister** ("Doğru, kaydet"), çünkü yanlış okunan bir doz kullanıcıya zarar verebilir, yanlış okunan bir parola da işe yaramaz.
- **Yeni içerik türleri (2026-10-03):** Ürün sahibinin isteğiyle listeye ilaç takibi, doğum günü ve parola/kullanıcı adı eklendi (aşağıdaki tabloda). Parolalar telefonun şifreli kasasında tutulur ve Face ID ya da parmak iziyle açılır. Kaydedildikten sonra ekran görüntüsünün galeride şifresiz durduğu hatırlatılır ve silinmesi önerilir.
- **iPhone'da deneme yolu (2026-10-03):** Yazıyı okuyan parça (ML Kit) Expo Go'da yok. Uygulamanın kendi sürümünü iPhone'a kurmak da Apple Developer hesabı (yıllık 99$) istiyor (Expo belgesi, SDK 57). Galeriye erişen parça ise Expo Go'da var. Ürün sahibi hesabı ertelediği için otomatik tarama önce Expo Go'da **geçici bir okuyucuyla** (Tesseract, uygulamanın içinde gizli bir web sayfasında çalışır) denenecek. Tarama, tanıma ve ekranlar sonraki sürümde aynen kullanılır, yalnızca okuyucu değişir. Geçici okuyucu kullanıcıya giden sürüme girmez. Ekran görüntüleri ve okunan metin telefondan çıkmaz; yalnızca okuma modeli ilk açılışta bir kez internetten inebilir. Asıl okuyucu ödünç Android'de denenir, Apple hesabı betadan önce açılır. Ücretsiz Apple kimliğiyle yan yükleme yolu reddedildi: uygulama 7 günde bir silinir, Mac gerekir, Apple şifresi üçüncü taraf bir araca girilir.
- **Görsel yön: Duolingo tarzı (2026-10-03):** Ürün sahibi, arayüzün gerçek bir mobil uygulama gibi çalışmasını ve tema ile animasyonlarda Duolingo gibi görünmesini istedi. Tarzın özellikleri: canlı ve doygun renkler, basılınca içine çöken kalın düğmeler, yuvarlak ve dost canlısı yazı tipi, sevimli ve zıplayan animasyonlar, bir şey bulununca kutlama anları. ⚠️ Duolingo'nun kendisi kopyalanmaz (baykuş, logo, özel yazı tipi, birebir renkleri); yalnızca tarzı örnek alınır. Animasyonlar telefonun "hareketi azalt" ayarına uyar. Bu yüzden tarama zincirinin ekranları (karşılama, izin, tarama, sonuç listesi) baştan bu tarzda, gerçek uygulama ekranı olarak yapılır. Logo, isim kontrolünden (karar 3) sonra gelir.
- **Bu projede açık eklentiler (2026-10-03):** Ürün sahibinin isteğiyle token tasarrufu için yalnızca gerekenler açık bırakıldı: context-mode, context7, superpowers, Expo, commit ve kod inceleme, mobil erişilebilirlik skill'i ve sahibin üç Türkçe skill'i. Web odaklı ya da Expo skill'lerinin kopyası olan 6 eklenti, arka planda Claude çağırıp kullanım hakkı harcayan güvenlik eklentisi ve 4 kullanıcı skill'i kapatıldı. Bu, her oturumda yaklaşık 3.300 token tasarruf ediyor. Hassas kodda güvenlik incelemesi elle (`/security-review`) yapılacak. Ayrıntılar `skill-haritasi` proje skill'inde.
- **Yapılacaklar tek sırada (2026-10-03):** Ürün sahibinin isteğiyle bütün işler yapılacağı sırayla tek bir numaralı listeye dizildi: 152 iş, 13 bölüm. Her maddede ne yapılacağı, kimin yapacağı ve ne zaman bitmiş sayılacağı yazıyor. Aynı iş artık tek yerde geçiyor. Claude her oturumda listedeki ilk açık maddeden devam eder; sıra yalnızca ürün sahibinin onayıyla değişir. Sıralarken iki konu netleşti. Hatırlatmalar ve doğruluk ölçümü kupon zincirinin hemen ardından geliyor. Asıl okuyucu (ML Kit) ise kargo, MHRS, IBAN ve paroladan sonra ödünç Android'de deneniyor; telefon erken bulunursa öne alınır. Listenin tamamı YAPILACAKLAR.md'de. CLAUDE.md'de yalnızca bölümlerin sırası ve şu anki bölümün maddeleri duruyor, böylece her mesaja yaklaşık 1-2 bin token ekleniyor (tamamı CLAUDE.md'ye yazılsaydı 12-17 bin olurdu).

## Uygulamanın tanıyacağı içerikler (karar 2026-10-01)

Ürün sahibi aşağıdakilerin hepsinin çıkışta olmasına karar verdi.

| Ekran görüntüsünde ne var | Uygulama ne yapar |
|---|---|
| İndirim kodu / kupon (Trendyol, Hepsiburada, Getir, Yemeksepeti) | Kodu kaydeder, süresi bitmeden 1 gün önce hatırlatır |
| Kargo takip numarası (Yurtiçi, Aras, DHL eCommerce (eski MNG), PTT, Trendyol Express, HepsiJET, Sürat...) | Kargo firmasını tanır, dokununca firmanın takip sayfasını açar |
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
| 🆕 İlaç (e-Nabız, e-Reçete, doktor notu; "2x1", "günde 2 kez", "tok karnına") | Kullanıcı onaylayınca her doz saatinde hatırlatır (eklendi 2026-10-03) |
| 🆕 Doğum günü (davetiye, sosyal medya bildirimi, mesaj) | Her yıl bir gün önce ve günün sabahı hatırlatır (eklendi 2026-10-03) |
| 🆕 Parola ve kullanıcı adı | Kullanıcı onaylayınca şifreli kasaya kaydeder, Face ID ile açılır, ekran görüntüsünü silmeyi önerir (eklendi 2026-10-03) |

**Galeri temizliği:** İşi biten ekran görüntülerini (süresi geçmiş kupon, teslim edilmiş kargo, doğrulama kodları) silmeyi önerir ve "1,2 GB yer açılacak" gibi ne kadar yer açılacağını gösterir. İlk tarama ekranı gibi paylaşılabilir bir "vay be" anı.

Türkçe tarihler ("15 Ekim Cumartesi 20.30") ve TL tutarlar bunların hepsinin içinde kullanılan ortak parçalar.

### Kargo ve harita: telefondan veri çıkmayacak (karar 2026-10-01)

Kargonun durumunu otomatik takip etmek takip numarasını kargo firmasına, adresi haritada noktaya çevirmek ise adresi Google'a ya da Apple'a göndermeyi gerektiriyor. Bu yüzden ilk sürümde ikisi de kullanıcı dokununca çalışacak: kargo kartı firmanın takip sayfasını, adres telefonun Haritalar uygulamasını açacak. Otomatik kargo takibi ve uygulama içi harita, ürün sahibinin onayıyla sonraki sürümlere kalır.

### Yapım sırası

Hepsi çıkışta olacak ama şu sırayla yapılacak. Önce otomatik tarama zinciri, sonra en çok kullanılan ve rakiplerden en çok ayrıştığımız türler (sıra 2026-10-03'te güncellendi):

1. [x] Ortak parçalar: Türkçe tarih ve saat, TL tutar (2026-10-02)
2. **Uçtan uca zincir:** galeri tarama, yazı okuma (Expo Go'da geçici okuyucu), kupon tanıyıcı ve Duolingo tarzı ilk ekranlar (karşılama, izin, tarama, sonuç listesi)
3. Kargo, MHRS, IBAN, parola
4. Fatura, abonelik, ilaç, doğum günü, iade süresi
5. Uçak/otobüs bileti, ÖSYM, etkinlik afişi, adres
6. Tarif, kitap, film; telefon, Wi-Fi, garanti, ürün
7. Galeri temizliği (diğer tanıyıcıların üstüne kurulur)

## Bölümler

Bütün işler yapılacağı sırayla ve numaralı olarak [YAPILACAKLAR.md](YAPILACAKLAR.md)'de; bekleyen kararlar ve ürün sahibinin işleri de orada. 2026-10-03'e kadar 8 aşamalık bir plan vardı. Tek sıraya geçerken 13 bölüme ayrıldı.

✅ Bitenler: proje iskeleti ve CLAUDE.md (2026-10-01), Türkçe tarih ve TL tutar okuyucuları (2026-10-02).

1. [ ] 🚀 Otomatik tarama zinciri, iPhone'da Expo Go ile: geçici okuyucu, kupon tanıyıcı, Duolingo tarzı ilk ekranlar
2. [ ] 🔔 Hatırlatmalar ve kalite ölçümü
3. [ ] 📦 Kargo, MHRS, IBAN, parola
4. [ ] 📱 Asıl okuyucu: ödünç Android'de ML Kit (ücretsiz Expo hesabı yeterli)
5. [ ] 🧾 Fatura, abonelik, ilaç, doğum günü, iade süresi
6. [ ] ✈️ Bilet, ÖSYM, etkinlik, adres
7. [ ] 🍲 Tarif, kitap, film; telefon, Wi-Fi, garanti, ürün
8. [ ] 🎨 Görsel kimlik ve arayüzün tamamı: "Şunları buldum" ekranı, detay, arama, ayarlar, galeri temizliği
9. [ ] 🍎 Apple Developer hesabı (yıllık 99$) ve iPhone'da asıl okuyuculu sürüm
10. [ ] 📤 iOS paylaşım menüsü ("Paylaş → Sonra Bakarım") ve Android'de yeni ekran görüntülerini otomatik yakalama
11. [ ] ⚖️ Yasal ve mağaza hazırlığı: KVKK gizlilik politikası, Google Play hesabı (tek seferlik 25$), mağaza sayfaları ve görselleri
12. [ ] 🧪 Kapalı beta (20–50 kişi), geri bildirimlere göre düzeltmeler
13. [ ] 🚀 Herkese açık çıkış

### Tarih ve tutar okuyucuları neleri anlıyor (2026-10-02)

- **Tarihler:** "31.10.2026 23:59", "31/12/26", "14 Ekim 2026 Çarşamba 10:40", "17 EKİM CUMARTESİ 20.30", "28 Eyl 2026", "20 Ekim'e kadar", "20 ekimde", "1-31 Ekim 2026", "15 Aralık - 5 Ocak 2027", "yarın 14:00", "bugün", "dün", "öbür gün", "bu akşam 21.00", "Cumartesi 21.00". Türkçe harfleri kaybolmuş OCR metnini de okuyor ("15 SUBAT 2027", "Ekım").
- **Yılı yazılmamış tarihler:** Ekran görüntüsünün çekildiği güne en yakın yıl seçiliyor. Gün adı yazılıysa ona uyan yıl seçiliyor ("5 Ocak Salı" → 2027).
- **Tutarlar:** "1.250,00 TL", "₺245,50", "89,90₺", "TL 75,50", "250 TL'ye", "100 liralık", "50 bin TL", "1,5 milyon TL"; yabancı sitelerin "1,250.00 TL" yazımı da.
- **Karıştırmadıkları:** telefon ve takip numaraları, IBAN, sürüm numaraları, "%20 indirim", fiyatı saat ya da yıl sanmak ("15 Ekim 12.50 TL"), alt satırdaki saati üst satırdaki tarihe bağlamak.
- 62 test. Testler `npm test` ile çalışıyor.

## Sıradaki adım

[YAPILACAKLAR.md](YAPILACAKLAR.md)'deki **#1**: npm paket çakışmasını çözmek. Galeri, web sayfası ve yazı tipi paketleri bu çözülmeden kurulamıyor. Ardından #2 ve #3'te geçici okuyucunun iPhone'da Türkçe ekran görüntüsünü okuyup okuyamadığı küçük bir denemeyle sınanır. Okuyamazsa ürün sahibiyle Apple hesabı ya da ücretsiz yan yükleme yolu yeniden konuşulur. Bölüm 1'in tamamı (#1–#25) uçtan uca tarama zincirini kuruyor.

Ürün sahibi ekran görüntülerini kendi iPhone galerisinde biriktiriyor. Zincir hazır olunca uygulama onları kendisi tarayacak. Bir kısmı otomatik testlere dönüştürülmek üzere `ekran-goruntuleri/` klasörüne de konacak.

Ürün sahibinin şu anki işleri (ekran görüntüleri, hesaplar, kararlar) [YAPILACAKLAR.md](YAPILACAKLAR.md)'nin "Şu an senden beklenenler" bölümünde.
