# ✅ Sonra Bakarım: Yapılacaklar Listesi

> 📌 Projenin ayrıntılı iş listesi. Bir iş bitince kutusunu işaretleyip tarihini yazarım. Alınan kararlar ve gerekçeleri [YOL-HARITASI.md](YOL-HARITASI.md)'de.
>
> 🗓️ Son güncelleme: 3 Ekim 2026

## 🔤 İşaretler

| İşaret | Anlamı |
|---|---|
| 👤 | Senin yapacağın iş |
| 🧭 | Senin vereceğin karar |
| ⚠️ | Dikkat: risk ya da kural |
| 💡 | Öneri: istersen ekleriz |
| 🔒 | Gizlilik sözümüzle ilgili |
| 💰 | Para gerektiriyor |

İşareti olmayan işleri ben (Claude) yaparım.

## 📊 Genel durum

| Aşama | Durum |
|---|---|
| 1️⃣ Proje iskeleti | ✅ Bitti |
| 2️⃣ Türkçe tanıma motoru + otomatik tarama zinciri | 🟡 Sürüyor: 7 adımdan 1'i bitti. Sıradaki: uçtan uca zincir |
| 3️⃣ Telefonda okuma ve galeri tarama | 🟡 İlk parçası 2. aşamaya alındı |
| 4️⃣ Arayüz ve tasarım | 🟡 Görsel yön seçildi (Duolingo tarzı), ilk ekranlar 2. aşamaya alındı |
| 5️⃣ Paylaş menüsü ve otomatik yakalama | ⏳ Bekliyor |
| 6️⃣ Yasal ve mağaza hazırlığı | ⏳ Bekliyor |
| 7️⃣ Kapalı beta | ⏳ Bekliyor |
| 8️⃣ Herkese açık çıkış | ⏳ Bekliyor |

## 🙋 Şu an senden beklenenler

1. 📸 **Ekran görüntüsü biriktir.** iPhone galerinde dursun yeter. Tarama zinciri hazır olunca uygulama onları kendisi tarayacak. Kuponlar, kargo, MHRS, IBAN, fatura, abonelik ve yeni türler: e-Nabız ilaç ekranları, doğum günü davetiyeleri ve bildirimleri, kullanıcı adı ve parola içeren ekranlar. Her türden en az 20 olsun. Bir kısmını `ekran-goruntuleri/` klasörüne de koy, onları otomatik teste çeviririm. Bu klasör GitHub'a gitmez. Klasöre koyduklarında isim, TC kimlik no, telefon numarası ve başkalarının IBAN'ı gibi bilgileri karala. ⚠️ Parola ekranlarında gerçek parolanı karala ya da bir deneme hesabı kullan.
2. 📱 **Ödünç bir Android telefon bul.** Asıl okuyucuyu (ML Kit) onda deneyeceğiz. Android 10 ya da üstü olsun; mümkünse Samsung Galaxy A ya da Xiaomi Redmi.

ℹ️ Mesaj yapıştırma ekranını denemen artık gerekmiyor (3 Ekim 2026). O ekran yalnızca benim test aracım olarak kalıyor.

🍎▶️ **Apple Developer ve Google Play hesapları sonraya kaldı** (senin kararın, 2 Ekim 2026). Apple hesabı yalnızca mağaza için değil: iPhone'da ekran görüntüsünü gerçekten okuyan sürümü denemek ve TestFlight betası için de gerekiyor. O zamana kadar gerçek okuma testlerini ödünç bir Android telefonla ücretsiz yaparız.

## 🧪 Nasıl test ediyoruz

| Ne test ediliyor | Nasıl | Hesap / para |
|---|---|---|
| 🧠 Tanıma motoru | Bilgisayarda otomatik testler, her değişiklikte | Gerekmiyor |
| 📸 Gerçek içerik | `ekran-goruntuleri/` klasörüne attığın görüntüleri ben okuyup "uygulama burada şunu bulurdu" raporu çıkarırım, hataları düzeltirim. Görüntüler kalıcı teste dönüşür. | Gerekmiyor |
| 📱 iPhone'da otomatik tarama | Expo Go'da geçici okuyucuyla: uygulama galerini kendisi tarar, bulduklarını listeler. Geçici okuyucu asıl okuyucudan yavaş ve daha az isabetli olabilir. | Ücretsiz Expo hesabı |
| 🔍 Asıl okuyucuyla (ML Kit) tarama | Ödünç Android telefona kurulan deneme sürümü | Ücretsiz Expo hesabı |
| 🍎 iPhone'da okuma, Paylaş menüsü, TestFlight | iPhone'una kurulan deneme sürümü | Apple Developer (yıllık 99$) |

## 🧭 Bekleyen kararlar

1. **🏢 Şahıs mı şirket mi?**
   - Neyi etkiliyor: Apple ve Google'daki hesap türünü, vergiyi ve mağazada görünen satıcı adını.
   - Önerim: Şahıs olarak başla. Daha hızlı ve ucuz. Gelir vergisinde "mobil uygulama geliştiriciliği istisnası" (GVK 20/B) kullanılabilir. Sonradan şirkete taşınabilir.
   - Bilmen gerekenler: Şahıs hesabında Apple satıcı olarak gerçek adını gösterir. Google'da şirket hesapları 12 kişi ve 14 günlük test şartından muaf, ama biz zaten kapalı beta yapacağız.
   - Ne zamana kadar: Apple hesabını açmadan önce.
2. **🪪 Uygulama kimliği**
   - Mağazaların uygulamayı tanıdığı kalıcı ad. Sonradan değiştirilemez.
   - Önerim: `com.sonrabakarim.app`
   - Ne zamana kadar: Uygulama telefona ilk kez kurulmadan önce (3. aşama).
3. **🏷️ İsim kontrolü**
   - "Sonra Bakarım" adı mağazalarda, marka sicilinde (TÜRKPATENT) ve alan adı olarak müsait mi?
   - Önerim: Tasarıma başlamadan kontrol edelim. İsim değişirse logo emeği boşa gider.
   - Ne zamana kadar: 4. aşamadan önce.
4. **💳 Para kazanma modeli ve fiyat**
   - Seçenekler: ilk sürüm tamamen ücretsiz, ücretsiz + Pro abonelik ya da tek seferlik ödeme.
   - Önerim: Ücretsiz + Pro abonelik. İlk tarama ve "vay be" ekranı herkese açık olsun. Fiyatı betada kullanıcılara sorarak belirleyelim.
   - Ne zamana kadar: 4. aşamada, ödeme ekranından önce.
5. **📱 iPad desteği**
   - Önerim: İlk sürümde olmasın. Açık kalırsa App Store iPad ekran görüntüleri de istiyor ve ayrı tasarım gerekiyor. Şu an projede açık, kapatırım.
   - Ne zamana kadar: 4. aşama.
6. **🔒 Android'de internet izni tamamen kapalı olsun mu?**
   - Kullanıcı telefon ayarlarında "bu uygulamanın internet izni yok" diye görebilir. Gizlilik sözümüzün kanıtı olur.
   - Bedeli: Mağazaya uğramadan anlık güncelleme gönderemeyiz. Dışarıdan çökme raporu aracı kullanamayız. Aboneliği telefonun içinde doğrulamamız gerekir (araştıracağım).
   - Önerim: Evet, araştırma olumlu çıkarsa.
   - Ne zamana kadar: 3. aşama.
7. **🔒 Telefon yedeklemesi (iCloud / Google)**
   - Önerim: Uygulamanın verileri yedeğe girmesin. Yeni telefonda yeniden tarama her şeyi geri getirir, sadece elle yaptığın düzeltmeler kaybolur.
   - Ne zamana kadar: 3. aşama.
8. **🌍 Hangi ülkelerde yayınlanacak?**
   - Önerim: Sadece Türkiye. Avrupa Birliği'nde yayın için Apple, satıcının adresini ve telefonunu mağazada açıkça göstermeyi şart koşuyor.
   - Ne zamana kadar: 6. aşama.
9. **🩺 Çökme raporları**
   - Önerim: Dışarıdan araç eklemeyelim. Apple ve Google'ın kendi çökme raporları yeterli. Böylece hiçbir veri toplamamış oluruz.
   - Ne zamana kadar: 3. aşama.
10. **🎯 Kalite çıtası** (beta ve çıkış için)
    - Önerim: Kupon kodu en az %95, son kullanma tarihi en az %90, kargo numarası en az %98, MHRS tarihi ve saati en az %98 doğru tanınsın. IBAN'da hata payı olmasın, çünkü IBAN'ın kendi kontrol hanesi var. Yanlış alarm en fazla %3 olsun. Orta seviye bir telefonda 1000 ekran görüntüsü en fazla 5 dakikada taransın, ilk sonuçlar 10 saniyede görünsün.
    - Ne zamana kadar: 2. aşama bitmeden.

## 1️⃣ Proje iskeleti ✅

- [x] Expo + TypeScript proje iskeleti (1 Ekim 2026)
- [x] CLAUDE.md ve yol haritası (1 Ekim 2026)
- [x] GitHub'da özel depo (2 Ekim 2026)
- [x] Test aracı (Jest) ve kod denetimi (ESLint) (2 Ekim 2026)
- [x] Ekran altyapısı (Expo Router) (2 Ekim 2026)
- [x] 📱 "Tanıma denemesi" ekranı: yapıştırılan metinde bulunan tarih ve tutarları gösterir, Expo Go'da çalışır (2 Ekim 2026)
- [x] 👤 Deneme ekranını iPhone'unda Expo Go ile aç (2 Ekim 2026)

## 2️⃣ 🧠 Türkçe tanıma motoru

🎯 **Bitti sayılması için:** Tüm içerik türlerinin tanıyıcısı yazılmış ve test setinde kalite çıtasını geçiyor.

### ✅ Adım 1: Ortak parçalar
- [x] 📅 Tarih ve saat okuyucu (2 Ekim 2026)
- [x] 💸 TL tutar okuyucu (2 Ekim 2026)
- [x] 🔤 Türkçe harf düzeltici: "EKİM", "Ekım" ve "EKIM" aynı kelime sayılıyor (2 Ekim 2026)

### 🧩 Ortak altyapı
- [ ] **Tanıyıcı kalıbı:** Her tanıyıcı aynı biçimde sonuç verir: tür, bilgiler, güven puanı ve metindeki yeri.
- [ ] **Güven puanı:** Emin olunmayan sonuçlar "Emin değilim, bakar mısın?" kutusuna gider.
- [ ] **Okuma hatası düzeltici:** Kodlarda ve numaralarda 0/O, 1/I/l, 5/S, 8/B karışıklıkları.
- [ ] **Süre ifadeleri:** "son 3 gün", "48 saat geçerli", "bu gece yarısına kadar", "3 gün içinde".
- [ ] **Kaynak ipuçları:** Ekrandaki "Trendyol", "Mesajlar", "WhatsApp" gibi yazılardan görüntünün nereden geldiğini anlama.
- [ ] **Tekrarları birleştirme:** Aynı kupon 3 ekran görüntüsünde geçiyorsa tek kart çıkar.
- [ ] **Doğruluk ölçer:** Her türün yüzde kaç doğru tanındığını raporlar ve her değişiklikte çalışır. Bir tanıyıcıyı kötüleştiren değişiklik kabul edilmez.
- [ ] **GitHub'da otomatik test:** Testler her yüklemede kendiliğinden çalışır. Özel depoda ayda 2000 dakika ücretsiz.

### 🔹 Adım 2: Uçtan uca zincir (öne alındı, 3 Ekim 2026)

🎯 **Bitti sayılması için:** Expo Go'da iPhone'unda uygulamayı açıyorsun, galeri izni veriyorsun, uygulama ekran görüntülerini kendisi tarıyor ve bulduğu kuponları Duolingo tarzı bir listede gösteriyor. Hiçbir şey elle girilmiyor.

#### 🧱 Hazırlık
- [ ] ⚠️ npm paket çakışmasını çöz. Galeri, web sayfası ve yazı tipi paketleri bu çözülmeden kurulamıyor.
- [ ] Deneme: geçici okuyucu (Tesseract) Expo Go'da iPhone'da çalışıyor mu? Türkçe bir ekran görüntüsünü ne kadar doğru ve kaç saniyede okuyor? Çalışmazsa sana dönerim (Apple hesabı ya da yan yükleme).
- [ ] 🔒 Okuma modeli mümkünse uygulamanın içinde gelsin. Gelemiyorsa ilk açılışta bir kez iner; ekran görüntüleri ve okunan metin hiçbir yere gitmez.
- [ ] Okuyucu değiştirilebilir yapıda olacak: Expo Go'da geçici okuyucu, deneme sürümünde ML Kit. Tarama, tanıma ve ekranlar aynı kalır.

#### 🎨 Duolingo tarzı tema
- [x] 🧭 Görsel yön: Duolingo tarzı. Canlı renkler, basılınca çöken kalın düğmeler, yuvarlak yazı tipi, sevimli animasyonlar (3 Ekim 2026)
- [ ] Renk paleti, açık ve koyu mod. ⚠️ Duolingo'nun birebir renkleri, baykuşu ve yazı tipi kopyalanmaz, yalnızca tarzı örnek alınır.
- [ ] ⚠️ Yuvarlak, ücretsiz ve Türkçe harfleri (ğ, ş, ı, İ) düzgün çizen bir yazı tipi
- [ ] Ortak bileşenler: kalın düğme, kart, ilerleme çubuğu, rozet
- [ ] Animasyonlar: düğmeye basınca çökme, kart gelirken zıplama, bir şey bulununca kutlama, dokunma titreşimi. "Hareketi azalt" açıksa sade geçişler.

#### 📱 İlk ekranlar (gerçek uygulama ekranları)
- [ ] Karşılama: tek cümlelik değer önerisi ve gizlilik sözü
- [ ] Galeri izni: önce neden istediğimizi anlatan ekran, sonra telefonun izin penceresi. İzin verilmezse ne olacağı.
- [ ] Tarama ekranı: ilerleme çubuğu ve canlı sayaç ("312 ekran görüntüsünden 40'ı tarandı, 3 kupon bulundu")
- [ ] Sonuç listesi: kupon kartları, kodu tek dokunuşla kopyalama, son kullanma tarihi
- [ ] Her ekranın yükleniyor, boş ve hata hali. Büyük yazı ayarı, küçük ve büyük ekran, VoiceOver için Türkçe etiketler.

#### ⚙️ Tarama
- [ ] Yalnızca ekran görüntülerini listeleme (iPhone'un kendi "ekran görüntüsü" etiketiyle)
- [ ] En yeniden eskiye tarama: ilk sonuçlar ilk saniyelerde gelsin
- [ ] Bulunanları telefonda saklama: uygulama kapanınca kaybolmasın, açılınca yalnızca yeni ekran görüntüleri taransın
- [ ] Bulunanlar kendiliğinden kaydedilir, emin olunmayanlar "Emin değilim" kutusuna gider (karar 3 Ekim 2026)
- [ ] 👤 Expo Go'da kendi galerinde dene: ne buldu, neyi kaçırdı, ne kadar sürdü

#### 🎟️ Kupon (zincirdeki ilk tür)
- [ ] Kod kalıpları: "Kupon Kodu:", "İndirim Kodu", "Promosyon Kodu", "...koduyla", "kodunu kullan"
- [ ] İndirim: "%20", "100 TL indirim", "1 alana 1 bedava"
- [ ] Koşullar: "Min. sepet tutarı 300 TL", "ilk siparişe özel", "yeni üyelere", "Getir Yemek'te geçerli"
- [ ] Son kullanma tarihi ve saati. Saat yazmıyorsa gün sonu (23:59) sayılır.
- [ ] Markalar: Trendyol, Hepsiburada, Getir, Yemeksepeti, Amazon, n11, Çiçeksepeti, Migros ve gerçek örneklerden çıkan diğerleri
- [ ] ⚠️ Kupon olmayan kodları ayırma: SMS doğrulama kodları, sipariş numaraları, PNR'ler, Wi-Fi şifreleri
- [ ] 🔔 Hatırlatma: son günden 1 gün önce ve son gün sabahı

### 🔹 Adım 3: Kargo, MHRS, IBAN, parola

#### 📦 Kargo
- [ ] Firmalar: Yurtiçi, Aras, DHL eCommerce (eski adı MNG, Mayıs 2025'te değişti), PTT Kargo, Sürat, Trendyol Express, HepsiJET, Kolay Gelsin, Sendeo, UPS
  - 💡 Yol haritasında 4 firma vardı. Trendyol Express ve HepsiJET pazaryeri siparişlerinin büyük kısmını taşıyor, onları da ekledim.
- [ ] Her firmanın takip numarası biçimi (gerçek SMS'lerden çıkarılacak)
- [ ] 🔒 Her firmanın takip sayfası bağlantısı: karta dokununca sayfa numarayla birlikte açılır
- [ ] Ekrandaki son durum: "kargoya verildi", "yola çıktı", "dağıtıma çıktı", "teslim edildi". İnternete bağlanmadan, görüntünün kendisinden okunur.
- [ ] "Teslim edildi" görülünce kart arşive kalkar

#### 🏥 MHRS
- [ ] Bilgiler: hastane, klinik, hekim, tarih, saat, muayene yeri
- [ ] Farklı satırlardaki tarih ve saati birleştirme ("Randevu Tarihi" ve "Randevu Saati")
- [ ] SMS, MHRS uygulaması, e-Nabız ve web ekranları
- [ ] 🔔 Randevudan önceki gün akşamüstü hatırlatma: "Gidemeyeceksen saat 20:00'ye kadar iptal et, yoksa 15 gün bu branştan randevu alamazsın."
  - ⚠️ Bakanlığın kuralı: iptal en geç önceki gün saat 20:00'ye kadar yapılmalı.
- [ ] 🔔 Randevu sabahı hatırlatma
- [ ] 🔒 Sağlık bilgisi KVKK'da "özel nitelikli veri" sayılıyor. Kilit ekranındaki bildirimde branş adı varsayılan olarak gizli olacak.

#### 🏦 IBAN
- [ ] TR + 24 hane: boşluklu, boşluksuz ya da iki satıra bölünmüş
- [ ] IBAN'ın kendi kontrol hanesiyle doğrulama: yanlış okunmuş haneyi yakalama, tek haneli hatayı düzeltmeyi deneme
- [ ] Banka adını IBAN'dan bulma (Ziraat, İş Bankası, Garanti BBVA...)
- [ ] Alıcı adı ve açıklama ("kira", "aidat") yakındaki satırlardan
- [ ] Tek dokunuşla kopyalama

#### 🔑 Parola ve kullanıcı adı (yeni, 3 Ekim 2026)
- [ ] Kalıplar: "Kullanıcı adı", "E-posta", "Şifre", "Parola", "Şifreniz:", "Geçici şifre" ve hangi site ya da uygulamaya ait olduğu (ekrandaki ad)
- [ ] ⚠️ SMS ile gelen tek kullanımlık doğrulama kodlarını parola sanmama, kaydetmeme
- [ ] Tek dokunuşla onay: kullanıcı "Doğru, kaydet" demeden kaydedilmez (karar 3 Ekim 2026)
- [ ] 🔒 Telefonun şifreli kasasında saklama (iPhone Anahtar Zinciri, Android Keystore). Görmek için Face ID ya da parmak izi.
- [ ] 🔒 Parola listede, aramada ve bildirimlerde gizli görünür (••••)
- [ ] 🔒 Kaydettikten sonra: "Bu parola galeride şifresiz duruyor. Ekran görüntüsünü silelim mi?"
- [ ] 🔒 Parola kasası bitince güvenlik incelemesi (`/security-review`)

### 🔹 Adım 4: Fatura, abonelik, ilaç, doğum günü, iade süresi

#### 🧾 Fatura
- [ ] Kurumlar: elektrik (Enerjisa, CK Enerji...), doğalgaz (İGDAŞ, Başkentgaz...), su (İSKİ, ASKİ, İZSU...), GSM (Turkcell, Vodafone, Türk Telekom), internet (Türk Telekom, Superonline, TurkNet...)
- [ ] Bilgiler: "Son Ödeme Tarihi", "Ödenecek Tutar", "Tesisat No / Abone No", "Dönem"
- [ ] 🔔 Hatırlatma: 2 gün önce ve son gün sabahı. Kartta "Ödendi" işareti.

#### ↩️ İade süresi
- [ ] Sipariş ekranları: "Sipariş No", "Teslim Edildi", teslim tarihi, satıcı
- [ ] Son iade günü, teslim tarihine platformun iade süresi eklenerek bulunur. Yasal cayma hakkı en az 14 gün. Her platformun süresi ayrıca doğrulanacak.
- [ ] Sadece sipariş ekranı varsa kart beklemede kalır. Teslim ekranı gelince sipariş numarasıyla eşleştirilir.
- [ ] 🔔 Hatırlatma: son günden 2 gün önce

#### 🔁 Abonelik
- [ ] Servisler: Netflix, Spotify, YouTube Premium, Disney+, Amazon Prime, Exxen, TOD, HBO Max, iCloud, Google One
- [ ] "Yenilenecek", "sonraki ödeme" ve en değerlisi "ücretsiz deneme ... bitiyor"
- [ ] 🔔 3 gün önce "İptal edecek miydin?" hatırlatması ve App Store / Google Play abonelik sayfasına kısayol
- [ ] 💡 Yıllık toplam: "Aboneliklerine yılda 4.320 TL ödüyorsun"

#### 💊 İlaç (yeni, 3 Ekim 2026)
- [ ] Kaynaklar: e-Nabız "İlaçlarım" ve "Reçetelerim" ekranları, e-Reçete SMS'i, doktor ve eczane notları (gerçek örneklerden doğrulanacak)
- [ ] Bilgiler: ilaç adı, kullanım ("2x1", "günde 2 kez", "8 saatte bir", "sabah-akşam", "tok karnına", "aç karnına"), süre ("7 gün")
- [ ] Tek dokunuşla onay: kullanıcı "Doğru, kur" demeden hatırlatma kurulmaz, saatleri düzeltebilir (karar 3 Ekim 2026)
- [ ] 🔔 Her doz saatinde hatırlatma, "İçtim" düğmesi, süre bitince durur
- [ ] ⚠️ iPhone'un 64 bekleyen bildirim sınırı: tekrar eden ilaç hatırlatmaları sırayı doldurmasın
- [ ] 🔒 Sağlık bilgisi KVKK'da özel nitelikli veri. Kilit ekranında ilaç adı varsayılan olarak gizli ("İlaç saatin geldi").
- [ ] ⚠️ Uygulama tıbbi tavsiye vermez: doz ekran görüntüsünden okunur, kullanıcı onaylar. Uygulamada ve mağaza açıklamasında bu yazacak.

#### 🎂 Doğum günü (yeni, 3 Ekim 2026)
- [ ] Kaynaklar: davetiyeler ("doğum günü partisi", "davetlisiniz"), Instagram ve Facebook doğum günü bildirimleri, mesajlar ("yarın Ayşe'nin doğum günü")
- [ ] Kişinin adı ve tarih. Yıl yazıyorsa yaşı: "30 yaşına giriyor".
- [ ] Davetiyedeki parti tarihi ayrıca etkinlik olarak kaydedilir
- [ ] 🔔 Her yıl bir gün önce ve günün sabahı hatırlatma
- [ ] 🔒 Kimlik kartı ekran görüntüsünden doğum tarihi alınmaz (TC kimlik bilgisi)

### 🔹 Adım 5: Bilet, ÖSYM, etkinlik, adres

#### ✈️ Uçak, otobüs, tren
- [ ] Uçak: THY, Pegasus, AJet, SunExpress. PNR, uçuş numarası, havalimanı kodları (IST, SAW, ESB, ADB, AYT...), kapı, koltuk.
- [ ] Otobüs: obilet, Kamil Koç, Metro Turizm, Pamukkale... Peron, koltuk.
- [ ] 💡 Tren: TCDD ve YHT e-biletleri
- [ ] 🔔 Online check-in açılınca ve yola çıkma vakti geldiğinde hatırlatma. Check-in'in kaç saat önce açıldığı havayoluna göre değişiyor, doğrulanacak.

#### 🎓 ÖSYM
- [ ] "Sınava Giriş Belgesi": sınav adı (YKS, KPSS, ALES, YDS, DGS...), tarih, oturum saati, bina, salon, sıra
- [ ] 🔔 Önceki akşam "Kimliğini ve belgeni hazırla", sınav sabahı bina adresi ve yol tarifi

#### 🎤 Etkinlik
- [ ] Afişler ve bilet uygulamaları: Biletix, Passo (maçlar), Bubilet, Biletinial, Mobilet
- [ ] Etkinlik adı (ekrandaki en büyük yazı), mekan, tarih ve saat, kapı açılışı
- [ ] Takvime eklemeden önce başlığı düzeltebilme

#### 📍 Adres
- [ ] Türk adres düzeni: Mah., Cad., Sk., Bulvarı, No:, Kat:, D:, posta kodu
- [ ] 81 il ve ilçe listesi, uygulamanın içinde ve internetsiz
- [ ] 🔒 Haritada açma: Apple Haritalar, Google Haritalar ya da Yandex Haritalar (kullanıcı seçer)

### 🔹 Adım 6: Tarif, kitap, film ve küçükler
- [ ] 🍲 Tarif: "Malzemeler", "Yapılışı", "Hazırlanışı", "su bardağı", "yemek kaşığı", "fırında ... derece"
- [ ] 📚 Kitap: yazar, yayınevi, ISBN. Kitapyurdu, D&R, 1000Kitap ve Goodreads ekranları.
- [ ] 🎬 Film ve dizi: IMDb, Letterboxd ve Netflix ekranları. "sezon", "bölüm", "yönetmen".
- [ ] Başlık bulma: ekrandaki en büyük yazı
- [ ] 📞 Telefon: 05xx, +90, sabit hat, 444 ve 0850 numaraları → ara, WhatsApp'tan yaz, rehbere ekle
- [ ] 📶 Wi-Fi: "Ağ adı", "SSID", "Şifre", "Parola" → şifreyi kopyala
- [ ] 🛡️ Garanti: alış tarihine garanti süresi eklenir (yasal en az 2 yıl), bitmeden 1 ay önce hatırlatılır
- [ ] 🛍️ Ürün: Trendyol, Hepsiburada ve Amazon ürün sayfaları → adı ve fiyatıyla istek listesi
- [ ] 💡 QR kod ve barkod okuma: Wi-Fi QR kodları, biletlerdeki kare kodlar ("kapıda göster")

### 🔹 Adım 7: Galeri temizliği için işaretleme (arayüzle birlikte)
- [ ] "İşi bitti" sayılanlar: süresi geçmiş kupon, teslim edilmiş kargo, geçmiş randevu ve etkinlik, doğrulama kodu ekranları, birebir aynı ekran görüntüleri

## 3️⃣ 📷 Telefonda okuma ve galeri tarama

🎯 **Bitti sayılması için:** Galerinin tamamı telefonda taranıyor ve bulunanlar telefonda kayıtlı. Önce ödünç Android'de, Apple hesabı açılınca senin iPhone'unda.

⚡ Taramanın ilk sürümü (Expo Go'da geçici okuyucuyla) 2. aşamanın "Uçtan uca zincir" adımına alındı (3 Ekim 2026). Bu aşama asıl okuyucuyu (ML Kit) ve taramanın eksiksiz halini kapsar.

### 🔑 Hazırlık
- [x] 👤 🔷 Expo hesabı (2 Ekim 2026)
- [x] Projeyi expo.dev'e bağlama (`eas init`, proje sahibi enesgoks-team) (2 Ekim 2026)
- [ ] 🧭 Uygulama kimliği kararı
- [ ] ⚠️ npm paket çakışmasını çöz: metin okuyucu kütüphanesi kurulamadan önce şart (bkz. "Bakım ve teknik borç")
- [ ] Bulutta derleme ayarları: geliştirme, test ve mağaza profilleri
- [ ] 👤 Ödünç bir Android telefon bul (Android 10 ve üstü; mümkünse Samsung Galaxy A ya da Xiaomi Redmi)
- [ ] Android'in ADB aracını kur ve telefonda USB hata ayıklamayı aç. Böylece telefonu bilgisayardan yönetebilirim: ekran görüntüsü alma, dokunma, uygulama kurma (mobile-mcp ve android-mcp kurulu, telefonu bekliyor).
- [ ] 👤 Expo ve context7'nin Claude bağlantılarına bir kerelik giriş: Claude'da `/mcp` yaz, önce "expo"yu sonra "context7"yi seç, tarayıcıda giriş yap
- [ ] İlk deneme sürümü ödünç Android'de. Kurulum dosyası bağlantıyla yüklenir, hesap ve ücret gerekmez.
- [ ] ⚠️💰 Bulutta derlemenin ücretsiz planında aylık sınır ve sıra bekleme var. Yetmezse senin onayınla ücretli plana geçeriz.

#### 🍎 iPhone'da gerçek okuma (Apple hesabı açılınca)
- [ ] 👤 🍎💰 Apple Developer üyeliği (yıllık 99$)
- [ ] 👤 iPhone'unu kaydet: gönderdiğim bağlantıyı iPhone'da açıp profili yükle
- [ ] 👤 iPhone'da Geliştirici Modu'nu aç: Ayarlar → Gizlilik ve Güvenlik → Geliştirici Modu (ilk kurulumdan sonra istenir)
- [ ] İlk deneme sürümü iPhone'unda. Bilgisayardaki değişiklikler telefona anında yansır. Telefon ve bilgisayar aynı Wi-Fi'da olmalı.

### 🔍 Metin okuyucu (OCR)
- [ ] Google ML Kit, iki telefonda da aynı okuma kalitesini sağlıyor. Expo'ya uyumlu iki aday kütüphaneyi deneyip birini seçeceğim.
- [ ] Okuma modeli uygulamanın içinde gelsin: ilk açılışta indirme beklenmesin, Google hizmetleri olmayan Huawei telefonlarda da çalışsın (denenecek)
- [ ] 💡 iPhone'da Apple'ın kendi metin okuyucusu Türkçede daha mı iyi? 50 görüntüyle karşılaştıracağım.
- [ ] Satır ve kelime konumlarını saklama. Kartta "burada buldum" işareti ve başlık bulma için gerekiyor.
- [ ] Hız ölçümü: yeni iPhone, eski iPhone ve ucuz Android

### 🖼️ Galeriye erişim
- [ ] İzin akışı: önce neden istediğimizi anlatan ekran, sonra telefonun izin penceresi
- [ ] 🔒 İzin açıklaması Türkçe olacak: "Ekran görüntülerindeki kupon ve randevuları bulmak için. Görüntülerin telefonundan çıkmaz."
- [ ] "Yalnızca seçili fotoğraflar" izni verilirse de çalışma (iPhone ve Android 14+)
- [ ] İzin verilmezse: Ayarlar'a yönlendirme ve Paylaş menüsüyle kullanma yolu
- [ ] iPhone: sadece ekran görüntülerini listeleme (telefonun kendi "ekran görüntüsü" etiketiyle)
- [ ] Android: ekran görüntüsü klasörünü bulma (Samsung, Xiaomi, Huawei ve Oppo'da farklı)
- [ ] "312 ekran görüntün var" sayısı, taramadan önce saniyeler içinde gösterilecek

### ⚙️ Tarama motoru
- [ ] En yeniden eskiye tarama: ilk sonuçlar ilk saniyelerde gelsin
- [ ] Kaldığı yerden devam: uygulama kapanırsa tarama baştan başlamasın
- [ ] Her açılışta sadece yeni ekran görüntüleri taransın
- [ ] Okunan metni saklama: tanıyıcılar geliştikçe görüntüleri yeniden okumadan sonuçlar yenilenir
- [ ] Telefonu ısıtmadan ve pili sömürmeden: aynı anda az görüntü, gerekirse mola
- [ ] Galeriden silinen görüntünün kartı kalır, kartta "görüntü silinmiş" yazar

### 💾 Telefondaki veritabanı
- [ ] Görüntüler, bulunanlar ve hatırlatmalar için telefonda veritabanı (SQLite). Güncellemelerde veri kaybolmayacak yapıda.
- [ ] Türkçe harften bağımsız arama: "kasim" yazınca "Kasım" da bulunur
- [ ] 🔒 Yedekleme kararını uygulama
- [ ] 🔒 Android internet izni kararını uygulama

### 🧪 Gerçek verilerle test seti
- [ ] 👤 📸 Ekran görüntüsü toplamaya devam (her türden en az 20)
- [ ] Klasördeki görüntüleri okuyup test metnine çevirme. Kişisel bilgiler uydurma bilgilerle değiştirilir.
- [ ] 🔒 Geliştirici ekranı: telefonun okuduğu ham metni dışa aktarma. Sadece test sürümünde olacak, kullanıcıya giden sürümde olmayacak. Testler gerçek okuma hatalarıyla güçlenir.
- [ ] İlk gerçek ölçüm: senin galerinde doğruluk raporu

## 4️⃣ 🎨 Arayüz ve tasarım

🎯 **Bitti sayılması için:** İlk açılıştan hatırlatmaya kadar her ekran bitmiş ve iki telefonda da akıcı çalışıyor.

### 🖌️ Görsel kimlik
- [ ] 🧭 İsim kontrolü (tasarımdan önce)
- [x] 🧭 Görsel yön: Duolingo tarzı, senin seçimin. Tema ve ilk ekranlar 2. aşamadaki zincirle birlikte yapılıyor (3 Ekim 2026)
- [ ] Logo ve uygulama ikonu: iPhone'un açık, koyu ve renkli ikon çeşitleri, Android'in uyarlanabilir ve tema ikonları
- [ ] ⚠️ Yazı tipi: Türkçe harfleri (ğ, ş, ı, İ) düzgün çizen bir yazı tipi. Birçok yazı tipinde "İ" ve "ş" bozuk görünüyor.
- [ ] Renk paleti, açık ve koyu mod
- [ ] Açılış ekranı
- [ ] Her içerik türü için simge
- [ ] Boş ekran çizimleri ("Henüz kupon yok")

### 👋 İlk açılış: "vay be" anı
- [ ] Karşılama: tek cümlelik değer önerisi ve gizlilik sözü
- [ ] Galeri izni ekranı
- [ ] Tarama ekranı: canlı sayaçlar ("14 kupon, 9 adres..."), animasyon
- [ ] "Şunları buldum" ekranı: "312 ekran görüntün var. İçlerinde 14 indirim kodu (6'sının süresi dolmuş 😬)..."
- [ ] 🔒 Paylaşılabilir özet kartı: sadece sayılar olacak, hiçbir kişisel bilgi olmayacak
- [ ] Bildirim izni baştan değil, ilk hatırlatma kurulurken istenecek

### 🏠 Ana ekranlar
- [ ] "Yaklaşanlar": bugün, yarın, bu hafta
- [ ] Türlere göre bölümler: Kuponlar, Kargolar, Randevular, Faturalar...
- [ ] Her türe özel kart ve ana düğme: Kopyala, Takip et, Takvime ekle, Haritada aç, Ara
- [ ] Detay ekranı: orijinal ekran görüntüsü, bulunan yer işaretli, bilgileri düzeltebilme
- [ ] "Emin değilim" kutusu: düşük güvenli sonuçları onayla ya da sil
- [ ] Tamamlandı, arşiv, geri al
- [ ] 🔍 Arama ve filtreler
- [ ] 🧹 Galeri temizliği ekranı: işi bitenler ve açılacak yer ("1,2 GB"). Silme telefonun onay penceresiyle yapılır, silinenlerin bir süre çöp kutusunda kaldığını anlatan bir not olur.

### 🔔 Hatırlatmalar
- [ ] Bildirimler telefonda kurulur, internet gerekmez
- [ ] ⚠️ iPhone aynı anda en fazla 64 bekleyen bildirim tutuyor. En yakın tarihlileri kurup uygulama açıldıkça sırayı yenileyeceğim.
- [ ] Bildirime dokununca ilgili kart açılır
- [ ] Bildirim düğmeleri: "Kopyala", "Ertele", "Tamam"
- [ ] Sessiz saatler: gece bildirim gelmez, varsayılan saat 09:00
- [ ] 🔒 Kilit ekranında hassas içeriği gizleme seçeneği
- [ ] 📅 Takvime ekleme: mümkünse izin istemeden, telefonun "etkinlik ekle" ekranıyla

### ⚙️ Ayarlar
- [ ] Bildirim zamanları, türleri aç/kapat, harita uygulaması seçimi, yeniden tarama, tüm verileri silme, "Verilerim nerede?" açıklaması, hakkında, iletişim
- [ ] 💡🔒 Face ID ya da parmak iziyle uygulama kilidi (IBAN ve sağlık bilgileri için)

### 💳 Abonelik (karar verilirse)
- [ ] 🧭 Model ve fiyat
- [ ] Ödeme ekranı, deneme süresi ve "Satın alımları geri yükle" düğmesi (Apple şartı)
- [ ] 🔒 Sunucusuz abonelik doğrulaması araştırması

### ♿ Kalite ve erişilebilirlik
- [ ] Büyük yazı desteği, VoiceOver ve TalkBack için Türkçe etiketler, yeterli renk kontrastı
- [ ] Titreşimli geri bildirimler, akıcı geçişler
- [ ] Her ekranın hata, yükleniyor ve boş halleri
- [ ] Tüm metinlerin Türkçe okuması: doğal dil, çeviri kokmayan cümleler

## 5️⃣ 📤 Paylaş menüsü ve otomatik yakalama

🎯 **Bitti sayılması için:** iPhone'da "Paylaş → Sonra Bakarım" çalışıyor, Android'de yeni ekran görüntüleri kendiliğinden yakalanıyor.

### 🍎 iPhone
- [ ] "Paylaş → Sonra Bakarım": Fotoğraflar'dan ya da ekran görüntüsü önizlemesinden gönderme
- [ ] Altyapı seçimi: Expo'nun kendi paylaşım modülü ya da expo-share-intent. Expo'nun modülü SDK 55'te deneysel olarak geldi, 57'deki durumu kontrol edilecek.
- [ ] ⚠️ Paylaş penceresinin bellek sınırı düşük. Okuma işini ana uygulama yapacak.
- [ ] Birden fazla görüntüyü aynı anda paylaşma
- [ ] Uygulama açılınca yeni ekran görüntülerini kendiliğinden tarama (iPhone arka planda galeri taramaya izin vermiyor)
- [ ] 💡 Şarjdayken arka planda tarama imkânını araştırma. iOS bazen izin veriyor ama garantisi yok.

### 🟢 Android
- [ ] Paylaş menüsünde görünme
- [ ] Yeni ekran görüntüsünü arka planda yakalama (belirli aralıklarla kontrol) ve isteğe bağlı bildirim: "Yeni kupon kaydedildi 🎟️"
- [ ] ⚠️ Xiaomi, Huawei ve Oppo'nun pil tasarrufu arka plan işini durduruyor. Kullanıcıya pil ayarı rehberi göstereceğiz.
- [ ] Ödünç Android'de birkaç günlük gerçek kullanım testi

## 6️⃣ ⚖️ Yasal ve mağaza hazırlığı

🎯 **Bitti sayılması için:** İki mağazada da sayfa hazır, bütün formlar dolu, yasal metinler yayında.

### 🏢 Hesaplar ve resmi işler
- [ ] 👤 ▶️💰 Google Play Console (25$): kimlik doğrulaması ve ödünç Android telefonla cihaz doğrulaması
- [ ] 👤 Apple'da "Ücretli Uygulamalar Sözleşmesi", banka bilgisi ve ABD vergi formu (W-8BEN). Abonelik satacaksak gerekli.
- [ ] 👤 Google ödeme profili, banka ve vergi bilgileri
- [ ] 👤💰 Mali müşavir görüşmesi: GVK 20/B istisnası mı, şirket mi? İstisnanın 2026 sınırı 5,3 milyon TL. Vergi dairesinden istisna belgesi ve özel banka hesabı gerekiyor.
- [ ] 👤💰 Alan adı (ör. sonrabakarim.com) ve destek e-postası
- [ ] 👤 Sosyal medya hesap adları (Instagram, X, TikTok)
- [ ] 👤💰 Marka tescili (TÜRKPATENT)
- [ ] Mağazalarda isim müsaitliği kontrolü

### 📜 KVKK ve yasal metinler
- [ ] Gizlilik politikası (Türkçe, sade): her şey telefonda işleniyor, sunucumuz yok, hangi izin neden isteniyor
- [ ] KVKK aydınlatma metni
- [ ] Kullanım koşulları
- [ ] 👤💰 Avukat ya da KVKK uzmanıyla tek görüşme: metinlerin kontrolü ve VERBİS kaydının gerekip gerekmediği
- [ ] Metinlerin web sitesinde yayınlanması (mağazalar bağlantı istiyor)

### 🛠️ Mağaza teknik şartları
- [ ] iOS gizlilik manifesti (Apple şartı)
- [ ] 🔒 App Store gizlilik etiketi: "Veri Toplanmıyor"
- [ ] 🔒 Google Play "Veri güvenliği" formu: veri toplanmıyor, paylaşılmıyor
- [ ] ⚠️ Google Play "Fotoğraf ve video izinleri" beyanı: tüm galeriye erişimin neden şart olduğunu anlatan açıklama ve video. Google bu izni sadece galeri erişimi ana işi olan uygulamalara veriyor. Reddedilirse B planı: kullanıcının seçtiği görüntüler ve Paylaş menüsü.
- [ ] ⚠️ Google Play'in hedef Android sürümü şartı ve 16 KB bellek sayfası uyumluluğu (metin okuyucu kütüphanesi dahil)
- [ ] Yaş derecelendirmesi anketleri (Apple ve Google)
- [ ] ⚠️ İnceleme ekibi için demo: Apple çalışanının telefonunda Türkçe ekran görüntüsü olmayacak. Örnek görsellerle "demo tarama" ve İngilizce inceleme notu hazırlamazsak "uygulama boş" denip reddedilebiliriz.

### 🖼️ Mağaza sayfası
- [ ] Ad (30 karakter), alt başlık (30) ve anahtar kelimeler (100: "kupon, kargo takip, iban, mhrs, fatura hatırlatma...")
- [ ] Google Play kısa açıklama (80 karakter) ve uzun açıklama (4000)
- [ ] Mağaza ekran görüntüleri (iPhone ve Android boyutları), Google Play öne çıkan görseli (1024×500)
- [ ] 💡 Tanıtım videosu (15-30 sn): galeri taranıyor → "14 kupon buldum"
- [ ] Kategori: Verimlilik

## 7️⃣ 🧪 Kapalı beta

🎯 **Bitti sayılması için:** Kalite çıtası tuttu, bilinen kritik hata yok ve Google Play'in 14 gün şartı tamamlandı.

### 🛫 Hazırlık
- [ ] TestFlight: önce iç test (Apple onayı gerekmiyor), sonra dış test (Apple'ın beta incelemesinden geçip herkese açık davet bağlantısıyla)
- [ ] Google Play: önce iç test, sonra kapalı test
- [ ] Test kullanıcıları için kurulum rehberi: iPhone ve Android için, Türkçe, ekran görüntülü
- [ ] Geri bildirim kanalı: WhatsApp grubu ve kısa anket
- [ ] 🔒 Yanlış tanınan görüntüyü kişisel bilgileri karalanmış halde, kendi isteğiyle gönderme rehberi. Uygulama kendiliğinden hiçbir şey göndermez.

### 👥 Test kullanıcıları
- [ ] 👤 20-50 kişi: farklı yaşlardan (MHRS kullanan anne babalar dahil) ve farklı telefonlarla
- [ ] ⚠️ Google Play kuralı: en az 12 kişi 14 gün boyunca kesintisiz kayıtlı kalmalı. Sonra "üretime erişim" başvurusu yapılır, inceleme genelde 7 gün sürüyor.

### 📱 Denenecek telefonlar
- [ ] Senin iPhone'un ve eski bir iPhone
- [ ] Samsung Galaxy A serisi (Türkiye'de en yaygın)
- [ ] Xiaomi / Redmi (pil kısıtlamaları en sert olan)
- [ ] Düşük donanımlı ucuz bir Android (hız testi için)

### 🔁 Düzeltme döngüsü
- [ ] Her hafta yeni test sürümü
- [ ] Her hafta doğruluk raporu ve çökme kontrolü (Apple ve Google'ın kendi raporlarıyla)
- [ ] Pil tüketimi ve tarama süresi ölçümü
- [ ] Son sürüm adayı: bilinen kritik hata yok

## 8️⃣ 🚀 Herkese açık çıkış

🎯 **Bitti sayılması için:** Uygulama iki mağazada aynı gün yayında.

### 📣 Çıkıştan önce
- [ ] Tanıtım web sitesi: tek sayfa, gizlilik politikası ve destek
- [ ] Basın kiti: logo, ekran görüntüleri, kısa tanıtım metni
- [ ] 👤 Sosyal medya içerikleri: Reels ve TikTok videoları, "galerimi taradı, 14 kupon buldu"
- [ ] 👤 Teknoloji basını: Webrazzi, Webtekno, ShiftDelete.Net, DonanımHaber
- [ ] 👤 Apple ve Google'a öne çıkarma başvurusu

### 📅 Aynı gün yayın
- [ ] App Store: onaydan sonra "elle yayınla" seçeneğiyle bekletme
- [ ] Google Play: "yönetilen yayın" ile onaylanan sürümü bekletme
- [ ] 👤 Çıkış günü ikisini aynı anda yayına alma

### 🗓️ İlk hafta
- [ ] 👤 Yorumlara Türkçe yanıt (taslakları ben hazırlarım)
- [ ] Hızlı düzeltme güncellemesi hazırda bekler
- [ ] Çökmeleri ve mağaza puanını takip

## 🛠️ Bakım ve teknik borç

Ayrıntılar ve teknik açıklamalar CLAUDE.md'nin "Bilinen Sorunlar ve Teknik Borç" bölümünde.

- [x] CLAUDE.md'yi sevgilify'daki çalışma standardıyla yeniden yazma: doğrulama kapısı, Windows tuzakları, motorun nasıl çalıştığı, test tablosu, bilinen sorunlar (2 Ekim 2026)
- [x] Telefona internet üzerinden bağlanma (tünel): Windows'un "Ortak ağ" engelini aşıyor (2 Ekim 2026)
- [x] Geliştirme araçları kalıcı olarak kuruldu: resmi Expo eklentisi (24 skill), mobile-mcp, android-mcp, erişilebilirlik / yaşam döngüsü / derin bağlantı skill'leri, skills-manager uygulaması (2 Ekim 2026)
- [x] Tüm projelerde geçerli kişisel çalışma standardı (`~/.claude/CLAUDE.md`) ve ortak skill klasörüne 3 skill: Türkçe arayüz metni, KVKK kontrol listesi, sahip için belge düzeni. Sonra Bakarım'a özel "Türkçe tanıyıcı ekleme" skill'i (2 Ekim 2026)
- [x] İkinci araç paketi kalıcı olarak kuruldu: superpowers, context7, playwright, Claude Code'un geliştirme eklentileri (kod inceleme, PR inceleme, özellik geliştirme, güvenlik, commit), wshobson koleksiyonundan 10 uzman eklenti, Anthropic örnek skill'leri (2 Ekim 2026)
- [x] Skill listesine ayrılan yer iki katına çıkarıldı. Kurulu 138 skill'in hepsi artık açıklamasıyla görünüyor, böylece Claude doğru skill'i kendiliğinden seçebiliyor. Bedeli mesaj başına yaklaşık 2-3 bin token (2 Ekim 2026)
- [x] Skill haritası: kurulu 98 skill'den hangisinin bu projede hangi işte kullanılacağı, hangilerinin kullanılmayacağı (web, sunucu ya da veriyi telefondan çıkaranlar) proje skill'i olarak yazıldı (2 Ekim 2026)
- [x] Bu projede yalnızca gereken eklenti ve skill'ler açık. 7 eklenti ve 4 skill kapatıldı, her oturumda yaklaşık 3.300 token tasarruf. Hangi işte hangisinin kullanıldığı `skill-haritasi` proje skill'inde (3 Ekim 2026)
- [ ] ⚠️ npm paket çakışması: yeni paket eklerken npm hata veriyor. Uygulama sağlıklı (Expo kontrolü 21/21 temiz) ama metin okuyucu kurulmadan önce çözülmeli.
- [ ] Tünel adresini bulup QR sayfasını tek komutla açan küçük bir yardımcı
- [ ] Gerçek ana ekran gelince deneme ekranını geliştirici menüsüne taşıma, kullanıcıya giden sürümden çıkarma

## 🔭 Çıkıştan sonra: fikir havuzu
- 💡🔒 Otomatik kargo takibi (senin onayınla)
- 💡🔒 Uygulama içi harita (senin onayınla)
- 💡🔒 "Ürünün fiyatı düştü" bildirimi (internet gerektiriyor, senin onayınla)
- 💡 Ana ekran widget'ı: "Yaklaşanlar"
- 💡 Siri ve Google Asistan kısayolları
- 💡 Telefonların kendi yapay zekâsıyla daha akıllı sınıflandırma (Apple'ın ve Google'ın cihaz içi modelleri)
- 💡 Huawei AppGallery
- 💡 Almanya ve Avrupa'daki Türkler (AB satıcı bilgisi şartıyla)
- 💡 İngilizce sürüm
