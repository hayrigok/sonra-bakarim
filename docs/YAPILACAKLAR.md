# ✅ Sonra Bakarım: Yapılacaklar Listesi

> 📌 Bütün işler **yapılacağı sırayla**, tek bir numaralı listede. Her iş yalnızca bir kez, yapılacağı yerde geçer. Bir iş bitince kutusunu işaretleyip tarihini yazarım. Kararlar ve gerekçeleri [YOL-HARITASI.md](YOL-HARITASI.md)'de.
>
> 🗓️ Son güncelleme: 3 Ekim 2026

### ▶️ Sıradaki iş: #1 npm paket çakışmasını çöz (Bölüm 1)

## 🔤 İşaretler

| İşaret | Anlamı |
|---|---|
| #12 | Sıra numarası. İşler bu sırayla yapılır. |
| 👤 | Senin yapacağın iş |
| 🧭 | Senin vereceğin karar |
| ⚠️ | Dikkat: risk ya da kural |
| 💡 | Öneri: istersen ekleriz |
| 🔒 | Gizlilik sözümüzle ilgili |
| 💰 | Para gerektiriyor |

İşareti olmayan işleri ben (Claude) yaparım. Bir iş senin işini ya da kararını bekliyorsa sana haber veririm ve beklerken ondan bağımsız bir sonraki işe geçerim. Sıra ancak senin onayınla değişir.

## 📊 Genel durum

| Bölüm | İşler | Durum |
|---|---|---|
| 1. 🚀 Otomatik tarama zinciri, iPhone'da Expo Go ile | #1–#25 | 🟡 Sıradaki iş burada |
| 2. 🔔 Hatırlatmalar ve kalite ölçümü | #26–#32 | ⏳ Bekliyor |
| 3. 📦 Kargo, MHRS, IBAN, parola | #33–#43 | ⏳ Bekliyor |
| 4. 📱 Asıl okuyucu: ödünç Android'de ML Kit | #44–#56 | ⏳ Bekliyor |
| 5. 🧾 Fatura, abonelik, ilaç, doğum günü, iade süresi | #57–#63 | ⏳ Bekliyor |
| 6. ✈️ Bilet, ÖSYM, etkinlik, adres | #64–#70 | ⏳ Bekliyor |
| 7. 🍲 Tarif, kitap, film ve küçükler | #71–#78 | ⏳ Bekliyor |
| 8. 🎨 Görsel kimlik ve arayüzün tamamı | #79–#95 | ⏳ Bekliyor |
| 9. 🍎 Apple hesabı ve iPhone'da gerçek sürüm | #96–#103 | ⏳ Bekliyor |
| 10. 📤 Paylaş menüsü ve Android'de otomatik yakalama | #104–#112 | ⏳ Bekliyor |
| 11. ⚖️ Yasal ve mağaza hazırlığı | #113–#131 | ⏳ Bekliyor |
| 12. 🧪 Kapalı beta | #132–#141 | ⏳ Bekliyor |
| 13. 🚀 Herkese açık çıkış | #142–#152 | ⏳ Bekliyor |

Biten işler (proje iskeleti, Türkçe tarih ve tutar okuyucuları, görsel yön seçimi, geliştirme araçları) en alttaki "✅ Bitenler" bölümünde.

## 🙋 Şu an senden beklenenler

1. 📸 **Ekran görüntüsü biriktir.** iPhone galerinde dursun yeter. Tarama zinciri hazır olunca uygulama onları kendisi tarayacak. Kuponlar, kargo, MHRS, IBAN, fatura, abonelik ve yeni türler: e-Nabız ilaç ekranları, doğum günü davetiyeleri ve bildirimleri, kullanıcı adı ve parola içeren ekranlar. Her türden en az 20 olsun, toplamda 300'den fazla. Bir kısmını `ekran-goruntuleri/` klasörüne de koy, onları otomatik teste çeviririm. Bu klasör GitHub'a gitmez. Klasöre koyduklarında isim, TC kimlik no, telefon numarası ve başkalarının IBAN'ı gibi bilgileri karala. ⚠️ Parola ekranlarında gerçek parolanı karala ya da bir deneme hesabı kullan.
2. 📱 **Ödünç bir Android telefon bul.** Asıl okuyucuyu (ML Kit) onda deneyeceğiz (Bölüm 4). Android 10 ya da üstü olsun; mümkünse Samsung Galaxy A ya da Xiaomi Redmi. Telefonu erken bulursan Bölüm 4'ü öne alırız.
3. ⏭️ **Yakında: #3.** Geçici okuyucu hazır olunca onu iPhone'unda denemen gerekecek. Adım adım rehberini o zaman yazarım.

ℹ️ Mesaj yapıştırma ekranını denemen artık gerekmiyor (3 Ekim 2026). O ekran yalnızca benim test aracım olarak kalıyor.

🍎▶️ **Apple Developer ve Google Play hesapları sonraya kaldı** (senin kararın, 2 Ekim 2026). Apple hesabı yalnızca mağaza için değil: iPhone'da asıl okuyucuyu denemek ve TestFlight betası için de gerekiyor (Bölüm 9). O zamana kadar iPhone'da geçici okuyucuyla, asıl okuyucuyla da ödünç Android'de ücretsiz deneriz.

## 🧪 Nasıl test ediyoruz

| Ne test ediliyor | Nasıl | Hesap / para |
|---|---|---|
| 🧠 Tanıma motoru | Bilgisayarda otomatik testler, her değişiklikte | Gerekmiyor |
| 📸 Gerçek içerik | `ekran-goruntuleri/` klasörüne attığın görüntüleri ben okuyup "uygulama burada şunu bulurdu" raporu çıkarırım, hataları düzeltirim. Görüntüler kalıcı teste dönüşür. | Gerekmiyor |
| 📱 iPhone'da otomatik tarama | Expo Go'da geçici okuyucuyla: uygulama galerini kendisi tarar, bulduklarını listeler. Geçici okuyucu asıl okuyucudan yavaş ve daha az isabetli olabilir. | Ücretsiz Expo hesabı |
| 🔍 Asıl okuyucuyla (ML Kit) tarama | Ödünç Android telefona kurulan deneme sürümü | Ücretsiz Expo hesabı |
| 🍎 iPhone'da asıl okuyucu, Paylaş menüsü, TestFlight | iPhone'una kurulan deneme sürümü | Apple Developer (yıllık 99$) |

## 🧭 Bekleyen kararlar

1. **🏢 Şahıs mı şirket mi?**
   - Neyi etkiliyor: Apple ve Google'daki hesap türünü, vergiyi ve mağazada görünen satıcı adını.
   - Önerim: Şahıs olarak başla. Daha hızlı ve ucuz. Gelir vergisinde "mobil uygulama geliştiriciliği istisnası" (GVK 20/B) kullanılabilir. Sonradan şirkete taşınabilir.
   - Bilmen gerekenler: Şahıs hesabında Apple satıcı olarak gerçek adını gösterir. Google'da şirket hesapları 12 kişi ve 14 günlük test şartından muaf, ama biz zaten kapalı beta yapacağız.
   - Ne zamana kadar: #97, Apple hesabını açmadan önce (Bölüm 9).
2. **🪪 Uygulama kimliği**
   - Mağazaların uygulamayı tanıdığı kalıcı ad. Sonradan değiştirilemez.
   - Önerim: `com.sonrabakarim.app`
   - Ne zamana kadar: #45, uygulama telefona ilk kez kurulmadan önce (Bölüm 4).
3. **🏷️ İsim kontrolü**
   - "Sonra Bakarım" adı mağazalarda, marka sicilinde (TÜRKPATENT) ve alan adı olarak müsait mi?
   - Önerim: Logodan önce kontrol edelim. İsim değişirse logo emeği boşa gider. Duolingo tarzı tema isimden bağımsız, onu beklemeye gerek yok.
   - Ne zamana kadar: #79, logodan önce (Bölüm 8).
4. **💳 Para kazanma modeli ve fiyat**
   - Seçenekler: ilk sürüm tamamen ücretsiz, ücretsiz + Pro abonelik ya da tek seferlik ödeme.
   - Önerim: Ücretsiz + Pro abonelik. İlk tarama ve "vay be" ekranı herkese açık olsun. Fiyatı betada kullanıcılara sorarak belirleyelim.
   - Ne zamana kadar: #93, ödeme ekranından önce (Bölüm 8).
5. **📱 iPad desteği**
   - Önerim: İlk sürümde olmasın. Açık kalırsa App Store iPad ekran görüntüleri de istiyor ve ayrı tasarım gerekiyor. Şu an projede açık, kapatırım.
   - Ne zamana kadar: #90 (Bölüm 8).
6. **🔒 Android'de internet izni tamamen kapalı olsun mu?**
   - Kullanıcı telefon ayarlarında "bu uygulamanın internet izni yok" diye görebilir. Gizlilik sözümüzün kanıtı olur.
   - Bedeli: Mağazaya uğramadan anlık güncelleme gönderemeyiz. Dışarıdan çökme raporu aracı kullanamayız. Aboneliği telefonun içinde doğrulamamız gerekir (#46'da araştıracağım).
   - Önerim: Evet, araştırma olumlu çıkarsa.
   - Ne zamana kadar: #47 (Bölüm 4).
7. **🔒 Telefon yedeklemesi (iCloud / Google)**
   - Önerim: Uygulamanın verileri yedeğe girmesin. Yeni telefonda yeniden tarama her şeyi geri getirir, sadece elle yaptığın düzeltmeler kaybolur.
   - Ne zamana kadar: #47 (Bölüm 4).
8. **🌍 Hangi ülkelerde yayınlanacak?**
   - Önerim: Sadece Türkiye. Avrupa Birliği'nde yayın için Apple, satıcının adresini ve telefonunu mağazada açıkça göstermeyi şart koşuyor.
   - Ne zamana kadar: #113 (Bölüm 11).
9. **🩺 Çökme raporları**
   - Önerim: Dışarıdan araç eklemeyelim. Apple ve Google'ın kendi çökme raporları yeterli. Böylece hiçbir veri toplamamış oluruz.
   - Ne zamana kadar: #47 (Bölüm 4).
10. **🎯 Kalite çıtası** (beta ve çıkış için)
    - Önerim: Kupon kodu en az %95, son kullanma tarihi en az %90, kargo numarası en az %98, MHRS tarihi ve saati en az %98 doğru tanınsın. IBAN'da hata payı olmasın, çünkü IBAN'ın kendi kontrol hanesi var. Yanlış alarm en fazla %3 olsun. Orta seviye bir telefonda 1000 ekran görüntüsü en fazla 5 dakikada taransın, ilk sonuçlar 10 saniyede görünsün.
    - Ne zamana kadar: #26, doğruluk ölçerden önce (Bölüm 2).

## Bölüm 1: 🚀 Otomatik tarama zinciri, iPhone'da Expo Go ile (#1–#25)

🎯 **Bitti sayılması için:** Expo Go'da iPhone'unda uygulamayı açıyorsun, galeri izni veriyorsun, uygulama ekran görüntülerini kendisi tarıyor ve bulduğu kuponları Duolingo tarzı bir listede gösteriyor. Hiçbir şey elle girilmiyor.

1. [ ] **⚠️ npm paket çakışmasını çöz**
   - **Ne:** Projeye yeni paket eklenemiyor, npm hata veriyor. Galeri, gizli web sayfası ve yazı tipi paketleri bunu bekliyor. Paketler Expo'nun SDK 57 için önerdiği sürümlere sabitlenir.
   - **Bitti sayılması için:** Yeni paket hatasız kuruluyor, Expo'nun kontrolü (`expo-doctor`) temiz, bütün testler geçiyor.
2. [ ] **Geçici okuyucu denemesi**
   - **Ne:** Ücretsiz okuyucu Tesseract, uygulamanın içinde gizli bir web sayfasında çalışır. Geliştirici ekranında galeriden seçilen bir ekran görüntüsünü okur; okunan metni ve kaç saniye sürdüğünü gösterir.
   - 🔒 Okuma modeli mümkünse uygulamanın içinde gelir. Gelemiyorsa ilk açılışta bir kez iner. Ekran görüntüleri ve okunan metin hiçbir yere gitmez.
   - **Bitti sayılması için:** Bilgisayardaki kontroller temiz, senin için deneme rehberi hazır.
3. [ ] **👤 Denemeyi iPhone'unda çalıştır**
   - **Senden:** Expo Go'da uygulamayı açıp 5 farklı ekran görüntüsü seçmen: bir kupon, bir kargo SMS'i, koyu temalı bir ekran, uzun bir sayfa ve bir fatura. Sonucu bana yaz ya da ekran görüntüsünü at.
   - **Bitti sayılması için:** Türkçe metnin ne kadar doğru okunduğu ve görüntü başına kaç saniye sürdüğü belli.
   - 🧭 **Karar:** Okuyucu Türkçe metni okuyamazsa iPhone yolunu yeniden konuşuruz: Apple hesabı (yıllık 99$) ya da ücretsiz yan yükleme.
4. [ ] **Okuyucuyu değiştirilebilir yap**
   - **Ne:** Expo Go'da geçici okuyucu, deneme sürümünde asıl okuyucu (ML Kit) çalışır. Tarama, tanıma ve ekranlar ikisinde de aynı kalır; okuyucu değişince başka hiçbir şey değişmez.
   - **Bitti sayılması için:** Okuyucuya bağlı olmayan her parça testlerle doğrulanıyor.
5. [ ] **Tanıyıcı kalıbı ve güven puanı**
   - **Ne:** Her tanıyıcı aynı biçimde sonuç verir: tür, bilgiler, güven puanı ve metindeki yeri. Emin olunmayan sonuçlar "Emin değilim, bakar mısın?" kutusuna gider.
   - **Bitti sayılması için:** Kalıp testlerle doğrulandı, kupon tanıyıcı bunun üstüne kurulabiliyor.
6. [ ] **Okuma hatası düzeltici**
   - **Ne:** Kodlarda ve numaralarda okuyucunun karıştırdığı karakterleri düzeltir: 0/O, 1/I/l, 5/S, 8/B. Kupon kodları ve takip numaraları için şart.
   - **Bitti sayılması için:** Okuma hatası içeren gerçekçi örneklerle testler geçiyor.
7. [ ] **Süre ifadeleri**
   - **Ne:** "son 3 gün", "48 saat geçerli", "bu gece yarısına kadar", "3 gün içinde" gibi ifadeleri okur. Kuponun son kullanma tarihi çoğu zaman böyle yazılır.
   - **Bitti sayılması için:** Testler geçiyor. Sürenin neye göre hesaplanacağına (ekran görüntüsünün tarihi mi, sipariş tarihi mi) her tanıyıcı kendisi karar veriyor.
8. [ ] **🎟️ Kupon tanıyıcı**
   - **Kod:** "Kupon Kodu:", "İndirim Kodu", "Promosyon Kodu", "...koduyla", "kodunu kullan"
   - **İndirim:** "%20", "100 TL indirim", "1 alana 1 bedava"
   - **Koşullar:** "Min. sepet tutarı 300 TL", "ilk siparişe özel", "yeni üyelere", "Getir Yemek'te geçerli"
   - **Son kullanma tarihi ve saati:** Saat yazmıyorsa gün sonu (23:59) sayılır.
   - **Markalar:** Trendyol, Hepsiburada, Getir, Yemeksepeti, Amazon, n11, Çiçeksepeti, Migros ve gerçek örneklerden çıkan diğerleri
   - **Bitti sayılması için:** Önce gerçekçi Türkçe kupon metinleriyle testler yazılır, sonra tanıyıcı. Testlerde olmayan metinlerle de denenir.
9. [ ] **⚠️ Kupon olmayan kodları ayır**
   - **Ne:** SMS doğrulama kodları, sipariş numaraları, PNR'ler ve Wi-Fi şifreleri kupon sanılmaz.
   - **Bitti sayılması için:** Bu tür metinlerle yanlış alarm testleri geçiyor.
10. [ ] **🎨 Duolingo tarzı renkler ve yazı tipi**
    - **Ne:** Canlı renk paleti, açık ve koyu tema. Yuvarlak, ücretsiz ve Türkçe harfleri (ğ, ş, ı, İ) düzgün çizen bir yazı tipi. Birçok yazı tipinde "İ" ve "ş" bozuk görünüyor, bu yüzden önce denenir. Bütün renk, boşluk ve köşe değerleri tek bir tema dosyasından gelir.
    - ⚠️ Duolingo'nun birebir renkleri, baykuşu ve yazı tipi kopyalanmaz, yalnızca tarzı örnek alınır.
    - **Bitti sayılması için:** Metinler iki temada da rahat okunuyor (yeterli kontrast). Türkçe harfler büyük ve küçük boyutta düzgün görünüyor.
11. [ ] **Ortak bileşenler**
    - **Ne:** Basılınca içine çöken kalın düğme, kart, ilerleme çubuğu, rozet. Hepsinin dokunma alanı en az 44 pt ve hepsinde ekran okuyucu etiketi var.
    - **Bitti sayılması için:** Bileşenler açık ve koyu temada, büyük yazı ayarında bozulmadan çalışıyor.
12. [ ] **Animasyonlar**
    - **Ne:** Düğmeye basınca çökme, kart gelirken zıplama, bir şey bulununca kutlama, dokunma titreşimi.
    - **Bitti sayılması için:** Animasyonlar akıcı. Telefonda "hareketi azalt" açıksa sade geçişlere dönüyor.
13. [ ] **Karşılama ekranı**
    - **Ne:** Tek cümlelik değer önerisi ve gizlilik sözü: ekran görüntülerin telefonundan çıkmaz.
    - **Bitti sayılması için:** Küçük ve büyük ekranda, büyük yazı ayarında düzgün görünüyor.
14. [ ] **Galeri izni ekranı**
    - **Ne:** Önce neden izin istediğimizi anlatan ekran, sonra telefonun izin penceresi. "Yalnızca seçili fotoğraflar" izni verilirse de çalışır (iPhone ve Android 14 ve üstü). İzin verilmezse Ayarlar'a nasıl gidileceği gösterilir; Paylaş menüsü gelince (Bölüm 10) o yol da anlatılır.
    - 🔒 İzin açıklaması Türkçe: "Ekran görüntülerindeki kupon ve randevuları bulmak için. Görüntülerin telefonundan çıkmaz."
    - ⚠️ Expo Go'da izin penceresinde Expo Go'nun kendi açıklaması çıkabilir. Bizim Türkçe açıklamamız deneme sürümünde görünür (doğrulanacak).
    - **Bitti sayılması için:** Üç durum da çalışıyor: izin verildi, bir kısmına izin verildi, izin verilmedi.
15. [ ] **Ekran görüntülerini bulma ve sayma**
    - **Ne:** Galerideki fotoğrafların arasından yalnızca ekran görüntüleri seçilir (iPhone'un kendi "ekran görüntüsü" etiketiyle). Taramadan önce sayı saniyeler içinde gösterilir: "312 ekran görüntün var".
    - **Bitti sayılması için:** Sayı, Fotoğraflar uygulamasındaki "Ekran Görüntüleri" albümüyle aynı.
16. [ ] **Tarama**
    - **Ne:** En yeniden eskiye tarar, ilk sonuçlar ilk saniyelerde gelir. Telefonu ısıtmamak ve pili sömürmemek için aynı anda az görüntü okunur, gerekirse mola verilir.
    - **Bitti sayılması için:** Tarama donmadan ilerliyor, uygulama tarama sırasında akıcı kalıyor.
17. [ ] **Tarama ekranı**
    - **Ne:** İlerleme çubuğu ve canlı sayaç: "312 ekran görüntüsünden 40'ı tarandı, 3 kupon bulundu". Bir şey bulununca küçük bir kutlama.
    - **Bitti sayılması için:** Sayaç gerçek ilerlemeyle uyumlu, ekran okuyucu ilerlemeyi okuyor.
18. [ ] **Telefonda saklama**
    - **Ne:** Bulunanlar ve okunan metin telefondaki veritabanında (SQLite) saklanır, güncellemelerde kaybolmaz. Uygulama kapanınca tarama baştan başlamaz, kaldığı yerden devam eder. Her açılışta yalnızca yeni ekran görüntüleri taranır (iPhone arka planda taramaya izin vermiyor, tarama uygulama açılınca olur). Tanıyıcılar geliştikçe görüntüler yeniden okunmadan sonuçlar yenilenir. Galeriden silinen görüntünün kartı kalır, kartta "görüntü silinmiş" yazar.
    - 🔒 Hepsi telefonda kalır.
    - **Bitti sayılması için:** Uygulamayı kapatıp açınca sonuçlar yerinde. Yeni çekilen ekran görüntüsü bir sonraki açılışta taranıyor.
19. [ ] **Tekrarları birleştirme**
    - **Ne:** Aynı kupon birden fazla ekran görüntüsünde geçiyorsa tek kart çıkar.
    - **Bitti sayılması için:** Aynı kuponun 3 ekran görüntüsü tek kart olarak görünüyor.
20. [ ] **Sonuç listesi**
    - **Ne:** Kupon kartları: kod, indirim, son kullanma tarihi. Kod tek dokunuşla kopyalanır. Bulunanlar kendiliğinden kaydedilir (karar 3 Ekim 2026). Emin olunmayanlar ayrı bir "Emin değilim" kutusunda durur, kullanıcı onaylar ya da siler.
    - **Bitti sayılması için:** Kartlar Duolingo tarzında. Kopyalayınca kısa bir onay görünüyor.
21. [ ] **Yükleniyor, boş ve hata halleri; erişilebilirlik**
    - **Ne:** Her ekranın yükleniyor, boş ("Henüz kupon bulamadık") ve hata hali. Büyük yazı ayarı, küçük ve büyük ekranlar, açık ve koyu tema. VoiceOver için Türkçe etiketler. Bütün metinler doğal Türkçe, ham İngilizce hata mesajı yok.
    - **Bitti sayılması için:** Her ekran bu durumların hepsinde kontrol edildi.
22. [ ] **Açılış ekranı ve geliştirici menüsü**
    - **Ne:** Uygulama artık mesaj deneme ekranıyla değil, karşılama ya da sonuç ekranıyla açılır. Mesaj deneme ekranı geliştirici menüsüne taşınır. Menüye okunan ham metni kopyalama da eklenir; gerçek okuma hataları böylece teste dönüşür.
    - 🔒 Geliştirici menüsü kullanıcıya giden sürümde olmaz.
    - **Bitti sayılması için:** Menü yalnızca geliştirici sürümünde görünüyor.
23. [ ] **Doğrulama kapısı ve deneme rehberi**
    - **Ne:** Testler, tip kontrolü, kod denetimi ve paketleme temiz geçer. Sana iPhone'da adım adım neyi deneyeceğini yazarım.
    - **Bitti sayılması için:** Komutlar temiz, sonuçlar sayılarıyla raporlandı.
24. [ ] **👤 Kendi galerinde dene**
    - **Senden:** Expo Go'da uygulamayı aç, galerini taratıp şunları bana yaz: ne buldu, neyi kaçırdı, yanlış bir şey buldu mu, tarama ne kadar sürdü. Kaçırdığı ya da yanlış bulduğu ekran görüntülerini kişisel bilgileri karalayıp `ekran-goruntuleri/` klasörüne koy.
    - **Bitti sayılması için:** Bu bölümün hedefi (yukarıdaki 🎯) senin telefonunda sağlanıyor.
25. [ ] **Bulunan hataları düzelt**
    - **Ne:** Senin denemende çıkan hatalar düzeltilir. `ekran-goruntuleri/` klasöründeki görüntüler test metnine çevrilir; kişisel bilgiler uydurma bilgilerle değiştirilir. Gerçek okuma hataları kalıcı testlere dönüşür.
    - **Bitti sayılması için:** Bildirdiğin hataların hepsi düzeldi, testler geçiyor.

## Bölüm 2: 🔔 Hatırlatmalar ve kalite ölçümü (#26–#32)

🎯 **Bitti sayılması için:** Kuponun süresi bitmeden telefonuna hatırlatma geliyor, ana ekranda "Yaklaşanlar" görünüyor ve her değişiklikte tanıma doğruluğu ölçülüyor.

26. [ ] **🧭 Kalite çıtası kararı (karar 10)**
    - **Karar:** Her türün en az yüzde kaç doğru tanınması gerektiği. Önerim yukarıda, "Bekleyen kararlar"da.
    - **Bitti sayılması için:** Çıta YOL-HARITASI'na yazıldı.
27. [ ] **Doğruluk ölçer**
    - **Ne:** Test setindeki ekran görüntüsü metinlerinde her türün yüzde kaç doğru tanındığını ve yanlış alarm oranını raporlar. Her değişiklikte çalışır. Bir tanıyıcıyı kötüleştiren değişiklik kabul edilmez.
    - **Bitti sayılması için:** Tek komutla rapor çıkıyor, çıtanın altında kalan tür kırmızı görünüyor.
28. [ ] **GitHub'da otomatik test**
    - **Ne:** Testler her yüklemede GitHub'da kendiliğinden çalışır. Özel depoda ayda 2000 dakika ücretsiz.
    - **Bitti sayılması için:** GitHub'da her yüklemenin yanında yeşil ya da kırmızı işaret görünüyor.
29. [ ] **Bildirim altyapısı**
    - **Ne:** Hatırlatmalar telefonun kendisinde kurulur, internet gerekmez. Bildirim izni baştan değil, ilk hatırlatma kurulurken istenir. Gece bildirim gelmez (sessiz saatler, varsayılan saat 09:00). Bildirime dokununca ilgili kart açılır.
    - ⚠️ iPhone aynı anda en fazla 64 bekleyen bildirim tutuyor. En yakın tarihliler kurulur, uygulama açıldıkça sıra yenilenir.
    - Expo Go'da telefon içi bildirimlerin çalıştığı doğrulanacak.
    - **Bitti sayılması için:** Deneme hatırlatması iPhone'unda doğru saatte geliyor.
30. [ ] **🔔 Kupon hatırlatması**
    - **Ne:** Son günden 1 gün önce ve son gün sabahı.
    - **Bitti sayılması için:** Hatırlatma saatleri testlerde doğru hesaplanıyor ve telefona geliyor.
31. [ ] **Ana ekran iskeleti**
    - **Ne:** "Yaklaşanlar" (bugün, yarın, bu hafta) ve türlere göre bölümler: Kuponlar, Kargolar, Randevular, Faturalar... İkinci tür gelmeden önce kurulur. Bundan sonra her tür kendi kartı ve ana düğmesiyle gelir: Kopyala, Takip et, Takvime ekle, Haritada aç, Ara.
    - **Bitti sayılması için:** Kuponlar hem "Yaklaşanlar"da hem kendi bölümünde görünüyor.
32. [ ] **Kaynak ipuçları**
    - **Ne:** Ekrandaki "Trendyol", "Mesajlar", "WhatsApp" gibi yazılardan görüntünün nereden geldiği anlaşılır. Marka ve kargo firmasını bulmayı kolaylaştırır.
    - **Bitti sayılması için:** Testler geçiyor, kupon kartında marka doğru çıkıyor.

## Bölüm 3: 📦 Kargo, MHRS, IBAN, parola (#33–#43)

🎯 **Bitti sayılması için:** Bu dört tür taramada bulunuyor, kartları ve hatırlatmaları çalışıyor, parolalar şifreli kasada duruyor.

33. [ ] **📦 Kargo tanıyıcı**
    - Firmalar: Yurtiçi, Aras, DHL eCommerce (eski adı MNG, Mayıs 2025'te değişti), PTT Kargo, Sürat, Trendyol Express, HepsiJET, Kolay Gelsin, Sendeo, UPS. 💡 Trendyol Express ve HepsiJET pazaryeri siparişlerinin büyük kısmını taşıdığı için eklendi.
    - Her firmanın takip numarası biçimi (gerçek SMS'lerden çıkarılacak).
    - Ekrandaki son durum: "kargoya verildi", "yola çıktı", "dağıtıma çıktı", "teslim edildi". İnternete bağlanmadan, görüntünün kendisinden okunur.
34. [ ] **Kargo kartı**
    - 🔒 Karta dokununca firmanın takip sayfası numarayla birlikte açılır. Uygulama kendiliğinden hiçbir yere bağlanmaz.
    - "Teslim edildi" görülünce kart arşive kalkar.
35. [ ] **🏥 MHRS tanıyıcı**
    - Bilgiler: hastane, klinik, hekim, tarih, saat, muayene yeri.
    - Farklı satırlardaki tarih ve saati birleştirme ("Randevu Tarihi" ve "Randevu Saati").
    - SMS, MHRS uygulaması, e-Nabız ve web ekranları.
36. [ ] **📅 Takvime ekleme**
    - Mümkünse izin istemeden, telefonun kendi "etkinlik ekle" ekranıyla. MHRS, bilet, ÖSYM ve etkinlik kartları bunu kullanır.
37. [ ] **MHRS kartı ve hatırlatmaları**
    - 🔔 Randevudan önceki gün akşamüstü: "Gidemeyeceksen saat 20:00'ye kadar iptal et, yoksa 15 gün bu branştan randevu alamazsın." ⚠️ Bakanlığın kuralı: iptal en geç önceki gün saat 20:00'ye kadar yapılmalı.
    - 🔔 Randevu sabahı hatırlatma.
    - 🔒 Sağlık bilgisi KVKK'da "özel nitelikli veri" sayılıyor. Kilit ekranındaki bildirimde branş adı varsayılan olarak gizli.
38. [ ] **🏦 IBAN tanıyıcı**
    - TR + 24 hane: boşluklu, boşluksuz ya da iki satıra bölünmüş.
    - IBAN'ın kendi kontrol hanesiyle doğrulama: yanlış okunmuş haneyi yakalama, tek haneli hatayı düzeltmeyi deneme.
    - Banka adını IBAN'dan bulma (Ziraat, İş Bankası, Garanti BBVA...). Alıcı adı ve açıklama ("kira", "aidat") yakındaki satırlardan.
39. [ ] **IBAN kartı**
    - İsimle kaydetme ("Ahmet - kira"), tek dokunuşla kopyalama.
40. [ ] **🔑 Parola tanıyıcı**
    - Kalıplar: "Kullanıcı adı", "E-posta", "Şifre", "Parola", "Şifreniz:", "Geçici şifre" ve hangi site ya da uygulamaya ait olduğu (ekrandaki ad).
    - ⚠️ SMS ile gelen tek kullanımlık doğrulama kodları parola sanılmaz, kaydedilmez.
41. [ ] **Parola onayı ve şifreli kasa**
    - Tek dokunuşla onay: kullanıcı "Doğru, kaydet" demeden kaydedilmez (karar 3 Ekim 2026).
    - 🔒 Telefonun şifreli kasası (iPhone Anahtar Zinciri, Android Keystore). Görmek için Face ID ya da parmak izi; Expo Go'da çalıştığı doğrulanacak.
    - 🔒 Parola listede, aramada ve bildirimlerde gizli görünür (••••).
42. [ ] **🔒 "Ekran görüntüsünü silelim mi?" önerisi**
    - Kaydettikten sonra: "Bu parola galeride şifresiz duruyor. Ekran görüntüsünü silelim mi?" Silme telefonun kendi onay penceresiyle yapılır.
43. [ ] **🔒 Parola kasasının güvenlik incelemesi**
    - Kasa bitince `/security-review` ile incelenir, bulgular düzeltilir.

## Bölüm 4: 📱 Asıl okuyucu: ödünç Android'de ML Kit (#44–#56)

🎯 **Bitti sayılması için:** Uygulamanın kendi deneme sürümü ödünç Android'de asıl okuyucuyla (ML Kit) galeriyi tarıyor ve ilk gerçek doğruluk raporu çıktı.

⏩ Telefonu daha erken bulursan bu bölüm öne alınır.

44. [ ] **👤 Ödünç Android telefon bul.** Android 10 ve üstü; mümkünse Samsung Galaxy A ya da Xiaomi Redmi.
45. [ ] **🧭 Uygulama kimliği kararı (karar 2).** Mağazaların uygulamayı tanıdığı kalıcı ad; telefona ilk kurulumdan önce verilmesi gerekiyor.
46. [ ] **İnternetsiz çalışma araştırması.** Android'de internet izni tamamen kapalı olursa ne kaybederiz: anlık güncelleme, dışarıdan çökme raporu ve aboneliğin telefonun içinde, sunucusuz doğrulanması.
47. [ ] **🧭 Üç karar: internet izni (karar 6), telefon yedeklemesi (karar 7), çökme raporları (karar 9).**
48. [ ] **Bulutta derleme ayarları.** Geliştirme, test ve mağaza profilleri.
    - ⚠️💰 Bulutta derlemenin ücretsiz planında aylık sınır ve sıra bekleme var. Yetmezse senin onayınla ücretli plana geçeriz.
49. [ ] **👤 Expo ve context7'nin Claude bağlantılarına bir kerelik giriş.** Claude'da `/mcp` yaz, önce "expo"yu sonra "context7"yi seç, tarayıcıda giriş yap.
50. [ ] **ADB ve USB hata ayıklama.** Android'in ADB aracını kur ve telefonda USB hata ayıklamayı aç. Böylece telefonu bilgisayardan yönetebilirim: ekran görüntüsü alma, dokunma, uygulama kurma (mobile-mcp ve android-mcp kurulu, telefonu bekliyor).
51. [ ] **ML Kit kütüphanesi seçimi.** Google ML Kit iki telefonda da aynı okuma kalitesini sağlıyor. Expo'ya uyumlu iki aday kütüphane denenir, biri seçilir.
    - Okuma modeli uygulamanın içinde gelir: ilk açılışta indirme beklenmez, Google hizmetleri olmayan Huawei telefonlarda da çalışır (denenecek).
    - ⚠️ Kurmadan önce dışarıya veri gönderip göndermediği kontrol edilir.
52. [ ] **Satır ve kelime konumlarını saklama.** Kartta "burada buldum" işareti ve başlık bulma için gerekiyor.
53. [ ] **Android'de ekran görüntüsü klasörünü bulma.** Samsung, Xiaomi, Huawei ve Oppo'da farklı.
54. [ ] **İlk deneme sürümü ödünç Android'de.** Kurulum dosyası bağlantıyla yüklenir, hesap ve ücret gerekmez.
55. [ ] **🔒 Kararları uygulama.** Yedekleme ve internet izni kararları uygulamaya işlenir.
56. [ ] **Hız ölçümü ve ilk gerçek doğruluk raporu.**
    - Ucuz bir Android'de hız ölçümü.
    - Geçici okuyucu ile ML Kit'in Türkçe okuma karşılaştırması.
    - Senin topladığın ekran görüntüleri telefona yüklenerek ilk gerçek doğruluk raporu.

## Bölüm 5: 🧾 Fatura, abonelik, ilaç, doğum günü, iade süresi (#57–#63)

🎯 **Bitti sayılması için:** Beş tür taramada bulunuyor ve hatırlatmaları kuruluyor. İlaç hatırlatması yalnızca kullanıcı onaylayınca kuruluyor.

57. [ ] **🧾 Fatura tanıyıcı ve kartı**
    - Kurumlar: elektrik (Enerjisa, CK Enerji...), doğalgaz (İGDAŞ, Başkentgaz...), su (İSKİ, ASKİ, İZSU...), GSM (Turkcell, Vodafone, Türk Telekom), internet (Türk Telekom, Superonline, TurkNet...).
    - Bilgiler: "Son Ödeme Tarihi", "Ödenecek Tutar", "Tesisat No / Abone No", "Dönem".
58. [ ] **🔔 Fatura hatırlatması.** 2 gün önce ve son gün sabahı. Kartta "Ödendi" işareti.
59. [ ] **🔁 Abonelik tanıyıcı ve hatırlatması**
    - Servisler: Netflix, Spotify, YouTube Premium, Disney+, Amazon Prime, Exxen, TOD, HBO Max, iCloud, Google One.
    - "Yenilenecek", "sonraki ödeme" ve en değerlisi "ücretsiz deneme ... bitiyor".
    - 🔔 3 gün önce "İptal edecek miydin?" hatırlatması ve App Store / Google Play abonelik sayfasına kısayol. 💡 Yıllık toplam: "Aboneliklerine yılda 4.320 TL ödüyorsun".
60. [ ] **💊 İlaç tanıyıcı**
    - Kaynaklar: e-Nabız "İlaçlarım" ve "Reçetelerim" ekranları, e-Reçete SMS'i, doktor ve eczane notları (gerçek örneklerden doğrulanacak).
    - Bilgiler: ilaç adı, kullanım ("2x1", "günde 2 kez", "8 saatte bir", "sabah-akşam", "tok karnına", "aç karnına"), süre ("7 gün").
61. [ ] **İlaç onayı ve hatırlatmaları**
    - Tek dokunuşla onay: kullanıcı "Doğru, kur" demeden hatırlatma kurulmaz, saatleri düzeltebilir (karar 3 Ekim 2026).
    - 🔔 Her doz saatinde hatırlatma, "İçtim" düğmesi, süre bitince durur. ⚠️ iPhone'un 64 bekleyen bildirim sınırı: tekrar eden ilaç hatırlatmaları sırayı doldurmasın.
    - 🔒 Sağlık bilgisi KVKK'da özel nitelikli veri. Kilit ekranında ilaç adı varsayılan olarak gizli ("İlaç saatin geldi").
    - ⚠️ Uygulama tıbbi tavsiye vermez: doz ekran görüntüsünden okunur, kullanıcı onaylar. Uygulamada ve mağaza açıklamasında bu yazar.
62. [ ] **🎂 Doğum günü tanıyıcı ve hatırlatması**
    - Kaynaklar: davetiyeler ("doğum günü partisi", "davetlisiniz"), Instagram ve Facebook doğum günü bildirimleri, mesajlar ("yarın Ayşe'nin doğum günü").
    - Kişinin adı ve tarih. Yıl yazıyorsa yaşı: "30 yaşına giriyor". Davetiyedeki parti tarihi ayrıca etkinlik olarak kaydedilir.
    - 🔔 Her yıl bir gün önce ve günün sabahı. 🔒 Kimlik kartı ekran görüntüsünden doğum tarihi alınmaz (TC kimlik bilgisi).
63. [ ] **↩️ İade süresi**
    - Sipariş ekranları: "Sipariş No", "Teslim Edildi", teslim tarihi, satıcı.
    - Son iade günü, teslim tarihine platformun iade süresi eklenerek bulunur. Yasal cayma hakkı en az 14 gün; her platformun süresi ayrıca doğrulanacak. Sadece sipariş ekranı varsa kart beklemede kalır, teslim ekranı gelince sipariş numarasıyla eşleştirilir.
    - 🔔 Son günden 2 gün önce hatırlatma.

## Bölüm 6: ✈️ Bilet, ÖSYM, etkinlik, adres (#64–#70)

🎯 **Bitti sayılması için:** Biletler, sınav belgeleri ve etkinlikler takvime ekleniyor, adresler Haritalar'da açılıyor.

64. [ ] **✈️ Uçak bileti**
    - THY, Pegasus, AJet, SunExpress. PNR, uçuş numarası, havalimanı kodları (IST, SAW, ESB, ADB, AYT...), kapı, koltuk.
    - 🔔 Online check-in açılınca ve yola çıkma vakti geldiğinde hatırlatma. Check-in'in kaç saat önce açıldığı havayoluna göre değişiyor, doğrulanacak.
65. [ ] **🚌 Otobüs bileti.** obilet, Kamil Koç, Metro Turizm, Pamukkale... Peron, koltuk. 💡 Tren: TCDD ve YHT e-biletleri.
66. [ ] **🎓 ÖSYM sınava giriş belgesi**
    - Sınav adı (YKS, KPSS, ALES, YDS, DGS...), tarih, oturum saati, bina, salon, sıra.
    - 🔔 Önceki akşam "Kimliğini ve belgeni hazırla", sınav sabahı bina adresi ve yol tarifi.
67. [ ] **Başlık bulma.** Ekrandaki en büyük yazı başlık sayılır: etkinlik, tarif, kitap ve film için. Okuyucunun verdiği kelime konumlarını kullanır.
68. [ ] **🎤 Etkinlik**
    - Afişler ve bilet uygulamaları: Biletix, Passo (maçlar), Bubilet, Biletinial, Mobilet.
    - Etkinlik adı (ekrandaki en büyük yazı), mekan, tarih ve saat, kapı açılışı. Takvime eklemeden önce başlığı düzeltebilme.
69. [ ] **📍 Adres tanıyıcı**
    - Türk adres düzeni: Mah., Cad., Sk., Bulvarı, No:, Kat:, D:, posta kodu.
    - 81 il ve ilçe listesi, uygulamanın içinde ve internetsiz.
70. [ ] **🔒 Haritada açma.** Apple Haritalar, Google Haritalar ya da Yandex Haritalar (kullanıcı seçer). Adres yalnızca kullanıcı dokununca harita uygulamasına verilir.

## Bölüm 7: 🍲 Tarif, kitap, film ve küçükler (#71–#78)

🎯 **Bitti sayılması için:** Bu türler taramada bulunuyor ve doğru listeye ya da düğmeye düşüyor. Böylece bütün içerik türlerinin tanıyıcısı yazılmış oluyor; hepsi test setinde kalite çıtasını geçiyor.

71. [ ] **🍲 Tarif.** "Malzemeler", "Yapılışı", "Hazırlanışı", "su bardağı", "yemek kaşığı", "fırında ... derece" → tarif listesi.
72. [ ] **📚 Kitap.** Yazar, yayınevi, ISBN. Kitapyurdu, D&R, 1000Kitap ve Goodreads ekranları → kitap listesi.
73. [ ] **🎬 Film ve dizi.** IMDb, Letterboxd ve Netflix ekranları; "sezon", "bölüm", "yönetmen" → izleme listesi.
74. [ ] **📞 Telefon numarası.** 05xx, +90, sabit hat, 444 ve 0850 numaraları → ara, WhatsApp'tan yaz, rehbere ekle.
75. [ ] **📶 Wi-Fi.** "Ağ adı", "SSID", "Şifre", "Parola" → şifreyi tek dokunuşla kopyala.
76. [ ] **🛡️ Garanti.** Alış tarihine garanti süresi eklenir (yasal en az 2 yıl), bitmeden 1 ay önce hatırlatılır.
77. [ ] **🛍️ Ürün.** Trendyol, Hepsiburada ve Amazon ürün sayfaları → adı ve fiyatıyla istek listesi.
78. [ ] **💡 QR kod ve barkod okuma.** Wi-Fi QR kodları, biletlerdeki kare kodlar ("kapıda göster").

## Bölüm 8: 🎨 Görsel kimlik ve arayüzün tamamı (#79–#95)

🎯 **Bitti sayılması için:** İlk açılıştan hatırlatmaya kadar her ekran bitmiş ve iki telefonda da akıcı çalışıyor.

79. [ ] **🧭 İsim kontrolü (karar 3).** "Sonra Bakarım" mağazalarda, marka sicilinde (TÜRKPATENT) ve alan adı olarak müsait mi? Logodan önce.
80. [ ] **Logo ve uygulama ikonu**
    - iPhone'un açık, koyu ve renkli ikon çeşitleri; Android'in uyarlanabilir ve tema ikonları.
    - Sade başlanır, gerçek görüntü küçük boyutta (16-32 px, bildirim, ayarlar listesi) kontrol edilir. ⚠️ Görsel üreten skill'ler Google Gemini'ye istek gönderiyor, kullanmadan önce sana sorarım.
81. [ ] **Açılış ekranı, içerik türü simgeleri ve boş ekran çizimleri** ("Henüz kupon yok").
82. [ ] **"Şunları buldum" ekranı ("vay be" anı).** "312 ekran görüntün var. İçlerinde 14 indirim kodu (6'sının süresi dolmuş 😬)..." Tarama ekranındaki canlı sayaçlar ("14 kupon, 9 adres...") ve animasyonla birlikte.
83. [ ] **🔒 Paylaşılabilir özet kartı.** Sadece sayılar olacak, hiçbir kişisel bilgi olmayacak.
84. [ ] **Detay ekranı.** Orijinal ekran görüntüsü, bulunan yer işaretli, bilgileri düzeltebilme.
85. [ ] **Tamamlandı, arşiv, geri al.**
86. [ ] **🔍 Arama ve filtreler.** Türkçe harften bağımsız arama: "kasim" yazınca "Kasım" da bulunur.
87. [ ] **Bildirim düğmeleri ve kilit ekranı.** "Kopyala", "Ertele", "Tamam" düğmeleri. 🔒 Kilit ekranında hassas içeriği gizleme seçeneği.
88. [ ] **⚙️ Ayarlar.** Bildirim zamanları, türleri aç/kapat, harita uygulaması seçimi, yeniden tarama, tüm verileri silme, "Verilerim nerede?" açıklaması, hakkında, iletişim.
89. [ ] **💡🔒 Face ID ya da parmak iziyle uygulama kilidi** (IBAN ve sağlık bilgileri için).
90. [ ] **🧭 iPad kararı (karar 5) ve uygulanması.**
91. [ ] **🧹 Galeri temizliği için işaretleme.** "İşi bitti" sayılanlar: süresi geçmiş kupon, teslim edilmiş kargo, geçmiş randevu ve etkinlik, doğrulama kodu ekranları, birebir aynı ekran görüntüleri.
92. [ ] **Galeri temizliği ekranı.** İşi bitenler ve açılacak yer ("1,2 GB"). Silme telefonun onay penceresiyle yapılır, silinenlerin bir süre çöp kutusunda kaldığını anlatan bir not olur.
93. [ ] **🧭 Para kazanma modeli ve fiyat (karar 4).**
94. [ ] **💳 Ödeme ekranı (karar verilirse).** Deneme süresi ve "Satın alımları geri yükle" düğmesi (Apple şartı). 🔒 Abonelik sunucusuz doğrulanır (#46'daki araştırmaya göre).
95. [ ] **♿ Kalite turu**
    - Büyük yazı desteği, VoiceOver ve TalkBack için Türkçe etiketler, yeterli renk kontrastı.
    - Titreşimli geri bildirimler, akıcı geçişler; her ekranın hata, yükleniyor ve boş hali.
    - Tüm metinlerin Türkçe okuması: doğal dil, çeviri kokmayan cümleler.

## Bölüm 9: 🍎 Apple hesabı ve iPhone'da gerçek sürüm (#96–#103)

🎯 **Bitti sayılması için:** Uygulamanın asıl okuyuculu deneme sürümü senin iPhone'unda çalışıyor.

96. [ ] **👤💰 Mali müşavir görüşmesi.** GVK 20/B istisnası mı, şirket mi? İstisnanın 2026 sınırı 5,3 milyon TL. Vergi dairesinden istisna belgesi ve özel banka hesabı gerekiyor.
97. [ ] **🧭 Şahıs mı şirket mi (karar 1).**
98. [ ] **👤 🍎💰 Apple Developer üyeliği** (yıllık 99$).
99. [ ] **👤 iPhone'unu kaydet.** Gönderdiğim bağlantıyı iPhone'da açıp profili yükle.
100. [ ] **👤 iPhone'da Geliştirici Modu'nu aç.** Ayarlar → Gizlilik ve Güvenlik → Geliştirici Modu (ilk kurulumdan sonra istenir).
101. [ ] **İlk deneme sürümü iPhone'unda.** Asıl okuyucuyla (ML Kit). Bilgisayardaki değişiklikler telefona anında yansır (tünelle ya da aynı Wi-Fi'dan).
102. [ ] **💡 Apple'ın kendi okuyucusu mu, ML Kit mi?** iPhone'da Apple'ın metin okuyucusu Türkçede daha mı iyi? 50 görüntüyle karşılaştırılır.
103. [ ] **Hız ölçümü: yeni ve eski iPhone.**

## Bölüm 10: 📤 Paylaş menüsü ve Android'de otomatik yakalama (#104–#112)

🎯 **Bitti sayılması için:** iPhone'da "Paylaş → Sonra Bakarım" çalışıyor, Android'de yeni ekran görüntüleri kendiliğinden yakalanıyor.

104. [ ] **Paylaş altyapısı seçimi.** Expo'nun kendi paylaşım modülü ya da expo-share-intent. Expo'nun modülü SDK 55'te deneysel olarak geldi, 57'deki durumu kontrol edilecek.
105. [ ] **🍎 "Paylaş → Sonra Bakarım".** Fotoğraflar'dan ya da ekran görüntüsü önizlemesinden gönderme.
106. [ ] **⚠️ Paylaş penceresinin bellek sınırı.** Sınır düşük, okuma işini ana uygulama yapar.
107. [ ] **Birden fazla görüntüyü aynı anda paylaşma.**
108. [ ] **💡 Şarjdayken arka planda tarama araştırması.** iOS bazen izin veriyor ama garantisi yok.
109. [ ] **🟢 Android: Paylaş menüsünde görünme.**
110. [ ] **Android: yeni ekran görüntüsünü arka planda yakalama.** Belirli aralıklarla kontrol; isteğe bağlı bildirim: "Yeni kupon kaydedildi 🎟️".
111. [ ] **⚠️ Pil tasarrufu rehberi.** Xiaomi, Huawei ve Oppo'nun pil tasarrufu arka plan işini durduruyor. Kullanıcıya pil ayarı rehberi gösterilir.
112. [ ] **Ödünç Android'de birkaç günlük gerçek kullanım testi.**

## Bölüm 11: ⚖️ Yasal ve mağaza hazırlığı (#113–#131)

🎯 **Bitti sayılması için:** İki mağazada da sayfa hazır, bütün formlar dolu, yasal metinler yayında.

113. [ ] **🧭 Hangi ülkelerde yayınlanacak (karar 8).**
114. [ ] **👤 ▶️💰 Google Play Console (25$).** Kimlik doğrulaması ve ödünç Android telefonla cihaz doğrulaması.
115. [ ] **👤 Apple'da "Ücretli Uygulamalar Sözleşmesi".** Banka bilgisi ve ABD vergi formu (W-8BEN). Abonelik satacaksak gerekli.
116. [ ] **👤 Google ödeme profili.** Banka ve vergi bilgileri.
117. [ ] **👤💰 Alan adı ve destek e-postası** (ör. sonrabakarim.com).
118. [ ] **👤 Sosyal medya hesap adları** (Instagram, X, TikTok).
119. [ ] **👤💰 Marka tescili (TÜRKPATENT).**
120. [ ] **📜 Gizlilik politikası.** Türkçe ve sade: her şey telefonda işleniyor, sunucumuz yok, hangi izin neden isteniyor.
121. [ ] **KVKK aydınlatma metni.**
122. [ ] **Kullanım koşulları.** İlaç hatırlatmalarının tıbbi tavsiye olmadığı da yazar.
123. [ ] **👤💰 Avukat ya da KVKK uzmanıyla tek görüşme.** Metinlerin kontrolü ve VERBİS kaydının gerekip gerekmediği.
124. [ ] **Metinlerin web sitesinde yayınlanması.** Mağazalar bağlantı istiyor.
125. [ ] **iOS gizlilik manifesti** (Apple şartı).
126. [ ] **🔒 Gizlilik etiketleri.** App Store: "Veri Toplanmıyor". Google Play "Veri güvenliği" formu: veri toplanmıyor, paylaşılmıyor.
127. [ ] **⚠️ Google Play "Fotoğraf ve video izinleri" beyanı.** Tüm galeriye erişimin neden şart olduğunu anlatan açıklama ve video. Google bu izni sadece galeri erişimi ana işi olan uygulamalara veriyor. Reddedilirse B planı: kullanıcının seçtiği görüntüler ve Paylaş menüsü.
128. [ ] **⚠️ Google Play'in hedef Android sürümü şartı ve 16 KB bellek sayfası uyumluluğu** (metin okuyucu kütüphanesi dahil).
129. [ ] **Yaş derecelendirmesi anketleri** (Apple ve Google).
130. [ ] **⚠️ İnceleme ekibi için demo.** Apple çalışanının telefonunda Türkçe ekran görüntüsü olmayacak. Örnek görsellerle "demo tarama" ve İngilizce inceleme notu hazırlamazsak "uygulama boş" denip reddedilebiliriz.
131. [ ] **🖼️ Mağaza sayfası**
     - Ad (30 karakter), alt başlık (30) ve anahtar kelimeler (100: "kupon, kargo takip, iban, mhrs, fatura hatırlatma..."). Google Play kısa açıklama (80 karakter) ve uzun açıklama (4000).
     - Mağaza ekran görüntüleri (iPhone ve Android boyutları), Google Play öne çıkan görseli (1024×500). 💡 Tanıtım videosu (15-30 sn): galeri taranıyor → "14 kupon buldum".
     - Kategori: Verimlilik. Açıklamada ilaç hatırlatmalarının tıbbi tavsiye olmadığı yazar.

## Bölüm 12: 🧪 Kapalı beta (#132–#141)

🎯 **Bitti sayılması için:** Kalite çıtası tuttu, bilinen kritik hata yok ve Google Play'in 14 gün şartı tamamlandı.

132. [ ] **TestFlight.** Önce iç test (Apple onayı gerekmiyor), sonra dış test (Apple'ın beta incelemesinden geçip herkese açık davet bağlantısıyla).
133. [ ] **Google Play.** Önce iç test, sonra kapalı test.
134. [ ] **Test kullanıcıları için kurulum rehberi.** iPhone ve Android için, Türkçe, ekran görüntülü.
135. [ ] **Geri bildirim kanalı.** WhatsApp grubu ve kısa anket.
136. [ ] **🔒 Gönüllü gönderme rehberi.** Yanlış tanınan görüntüyü kişisel bilgileri karalanmış halde, kendi isteğiyle gönderme. Uygulama kendiliğinden hiçbir şey göndermez.
137. [ ] **👤 20-50 test kullanıcısı.** Farklı yaşlardan (MHRS kullanan anne babalar dahil) ve farklı telefonlarla.
     - ⚠️ Google Play kuralı: en az 12 kişi 14 gün boyunca kesintisiz kayıtlı kalmalı. Sonra "üretime erişim" başvurusu yapılır, inceleme genelde 7 gün sürüyor.
138. [ ] **📱 Denenecek telefonlar.** Senin iPhone'un ve eski bir iPhone; Samsung Galaxy A serisi (Türkiye'de en yaygın); Xiaomi / Redmi (pil kısıtlamaları en sert olan); düşük donanımlı ucuz bir Android (hız testi için).
139. [ ] **🔁 Haftalık döngü.** Her hafta yeni test sürümü, doğruluk raporu ve çökme kontrolü (Apple ve Google'ın kendi raporlarıyla).
140. [ ] **Pil tüketimi ve tarama süresi ölçümü.**
141. [ ] **Son sürüm adayı.** Bilinen kritik hata yok.

## Bölüm 13: 🚀 Herkese açık çıkış (#142–#152)

🎯 **Bitti sayılması için:** Uygulama iki mağazada aynı gün yayında.

142. [ ] **Tanıtım web sitesi.** Tek sayfa, gizlilik politikası ve destek.
143. [ ] **Basın kiti.** Logo, ekran görüntüleri, kısa tanıtım metni.
144. [ ] **👤 Sosyal medya içerikleri.** Reels ve TikTok videoları: "galerimi taradı, 14 kupon buldu".
145. [ ] **👤 Teknoloji basını.** Webrazzi, Webtekno, ShiftDelete.Net, DonanımHaber.
146. [ ] **👤 Apple ve Google'a öne çıkarma başvurusu.**
147. [ ] **App Store: onaydan sonra "elle yayınla" seçeneğiyle bekletme.**
148. [ ] **Google Play: "yönetilen yayın" ile onaylanan sürümü bekletme.**
149. [ ] **👤 Çıkış günü ikisini aynı anda yayına alma.**
150. [ ] **👤 Yorumlara Türkçe yanıt.** Taslakları ben hazırlarım.
151. [ ] **Hızlı düzeltme güncellemesi hazırda bekler.**
152. [ ] **Çökmeleri ve mağaza puanını takip.**

## 🛠️ Bakım ve teknik borç

Ayrıntılar ve teknik açıklamalar CLAUDE.md'nin "Bilinen Sorunlar ve Teknik Borç" bölümünde. Bu işler sıranın dışında, gerektiğinde araya girer. npm paket çakışması #1'e, deneme ekranının taşınması #22'ye alındı.

- [ ] Tünel adresini bulup QR sayfasını tek komutla açan küçük bir yardımcı

## ✅ Bitenler

### 🏗️ Proje iskeleti
- [x] Expo + TypeScript proje iskeleti (1 Ekim 2026)
- [x] CLAUDE.md ve yol haritası (1 Ekim 2026)
- [x] GitHub'da özel depo (2 Ekim 2026)
- [x] Test aracı (Jest) ve kod denetimi (ESLint) (2 Ekim 2026)
- [x] Ekran altyapısı (Expo Router) (2 Ekim 2026)
- [x] 📱 "Tanıma denemesi" ekranı: yapıştırılan metinde bulunan tarih ve tutarları gösterir, Expo Go'da çalışır (2 Ekim 2026)
- [x] 👤 Deneme ekranını iPhone'unda Expo Go ile aç (2 Ekim 2026)
- [x] 👤 🔷 Expo hesabı (2 Ekim 2026)
- [x] Projeyi expo.dev'e bağlama (`eas init`, proje sahibi enesgoks-team) (2 Ekim 2026)

### 🧠 Tanıma motorunun ortak parçaları
- [x] 📅 Tarih ve saat okuyucu (2 Ekim 2026)
- [x] 💸 TL tutar okuyucu (2 Ekim 2026)
- [x] 🔤 Türkçe harf düzeltici: "EKİM", "Ekım" ve "EKIM" aynı kelime sayılıyor (2 Ekim 2026)

### 🎨 Tasarım kararı
- [x] 🧭 Görsel yön: Duolingo tarzı, senin seçimin. Canlı renkler, basılınca çöken kalın düğmeler, yuvarlak yazı tipi, sevimli animasyonlar. Tema ve ilk ekranlar Bölüm 1'de yapılıyor (3 Ekim 2026)

### 🛠️ Geliştirme ortamı, araçlar ve belgeler
- [x] CLAUDE.md'yi sevgilify'daki çalışma standardıyla yeniden yazma: doğrulama kapısı, Windows tuzakları, motorun nasıl çalıştığı, test tablosu, bilinen sorunlar (2 Ekim 2026)
- [x] Telefona internet üzerinden bağlanma (tünel): Windows'un "Ortak ağ" engelini aşıyor (2 Ekim 2026)
- [x] Geliştirme araçları kalıcı olarak kuruldu: resmi Expo eklentisi (24 skill), mobile-mcp, android-mcp, erişilebilirlik / yaşam döngüsü / derin bağlantı skill'leri, skills-manager uygulaması (2 Ekim 2026)
- [x] Tüm projelerde geçerli kişisel çalışma standardı (`~/.claude/CLAUDE.md`) ve ortak skill klasörüne 3 skill: Türkçe arayüz metni, KVKK kontrol listesi, sahip için belge düzeni. Sonra Bakarım'a özel "Türkçe tanıyıcı ekleme" skill'i (2 Ekim 2026)
- [x] İkinci araç paketi kalıcı olarak kuruldu: superpowers, context7, playwright, Claude Code'un geliştirme eklentileri (kod inceleme, PR inceleme, özellik geliştirme, güvenlik, commit), wshobson koleksiyonundan 10 uzman eklenti, Anthropic örnek skill'leri (2 Ekim 2026)
- [x] Skill listesine ayrılan yer iki katına çıkarıldı. Kurulu 138 skill'in hepsi artık açıklamasıyla görünüyor, böylece Claude doğru skill'i kendiliğinden seçebiliyor. Bedeli mesaj başına yaklaşık 2-3 bin token (2 Ekim 2026)
- [x] Skill haritası: kurulu 98 skill'den hangisinin bu projede hangi işte kullanılacağı, hangilerinin kullanılmayacağı (web, sunucu ya da veriyi telefondan çıkaranlar) proje skill'i olarak yazıldı (2 Ekim 2026)
- [x] Bu projede yalnızca gereken eklenti ve skill'ler açık. 7 eklenti ve 4 skill kapatıldı, her oturumda yaklaşık 3.300 token tasarruf. Hangi işte hangisinin kullanıldığı `skill-haritasi` proje skill'inde (3 Ekim 2026)
- [x] Yapılacaklar tek sıraya dizildi: 152 iş, 13 bölüm. Her işin ne olduğu, kimin yapacağı ve ne zaman bitmiş sayılacağı yazılı; aynı iş tek yerde geçiyor (3 Ekim 2026)

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
