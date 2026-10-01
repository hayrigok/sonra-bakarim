@AGENTS.md
@docs/YOL-HARITASI.md

# Sonra Bakarım: Ekran Görüntülerini İşe Yarar Hale Getiren Uygulama

Türkiye'ye odaklı mobil uygulama (Android + iOS). Kullanıcının ekran görüntülerini **telefonun içinde** okur ve işe yarar şeylere çevirir: kuponlar, kargo numaraları, MHRS randevuları, IBAN'lar, faturalar, biletler ve daha fazlası. Çıkışta olacak içerik türlerinin tam listesi ve alınan kararlar `docs/YOL-HARITASI.md`'de, ayrıntılı iş listesi `docs/YAPILACAKLAR.md`'de.

Rakipler global olarak var (Google Pixel Screenshots, SnapActions, Captr, Skreenly, Sorti). **Farkımız Türk içeriğini herkesten iyi anlamak.** Neyi yapacağına ya da neyi parlatacağına karar verirken Türkçe tanımayı daha doğru yapanı seç.

---

## Çalışma Standardı (kalıcı, her görevde hatırlatılmadan uygulanır)

- **Kıdemli yazılımcı kalitesi.** Kod, arayüz ve kullanıcı deneyimi kusursuz olacak; mimari bozulmayacak. Her ekran küçük ve büyük iPhone'larda, farklı Android telefonlarda, büyük yazı ayarında ve klavye açıkken düzgün çalışmalı. Yalnızca bir cihazda deneyip bitirme.
- **Ürün sahibi yönetir, kodu Claude yazar.** Sahip kod yazmaz. Türkçe yazar. Ona Türkçe ve ürün diliyle (kullanıcı ne görür, neye mal olur) anlat, teknik ayrıntıyla değil.
- **Aceleyle çıkış yok.** Hedef, kapalı betadan (TestFlight + Google Play kapalı testi) sonra iki mağazada aynı gün cilalı bir çıkış.
- **Belgeler aynı oturumda güncellenir.** Karar alınınca `docs/YOL-HARITASI.md`; bir iş bitince ya da yeni iş çıkınca `docs/YAPILACAKLAR.md` (`[x]` + tarih, en üstteki durum tablosu); yeni bir modül, kural ya da tuzak öğrenilince bu dosya. Biriktirip toplu güncellemek en pahalı yol.
- **Bir kural burada yazıyor diye kendiliğinden işlemez.** Örneğin "paket kurulunca çalışan sunucuyu yeniden başlat" kuralını uygulamak senin işin. Sahip tuhaf bir hata bildirene kadar bekleme.
- **Dürüst rapor.** Doğrulanmayanı doğrulanmış gibi sunma. Test geçmediyse çıktısıyla söyle. Bir adım atlandıysa söyle.

## Git ve GitHub

- Depo: https://github.com/hayrigok/sonra-bakarim (özel). `gh` PATH'te değil: `"/c/Program Files/GitHub CLI/gh.exe"`.
- **Commit serbest. Push yalnızca sahibin açık onayıyla.** Her push ayrı onay ister. Bir kez "yükle/pushla" denmesi sonraki commit'leri kapsamaz. Commit'ten sonra dur ve "GitHub'a yükleyeyim mi?" diye sor.
- `ekran-goruntuleri/` asla commit edilmez (gitignore'da). Sır (token, şifre, API anahtarı) koda, commit'e ya da bu dosyaya asla yazılmaz.

## "Bitti" Demeden Önce: Doğrulama Kapısı

Temiz geçmeden iş bitmiş sayılmaz. Sonuçları sayılarıyla raporla.

| Ne zaman | Komut | Neyi yakalar |
|---|---|---|
| Her değişiklik | `npm test` | Tanıma motoru ve yardımcıların davranışı |
| Her değişiklik | `npx tsc --noEmit` | Tip hataları |
| Her değişiklik | `npx expo lint` | Kod kuralları |
| Ekran ya da paket değişikliği | `npx expo export --platform ios` (çıktı `dist/`, gitignore'da) | Metro paketleme hataları ve Hermes'in kodu derleyip derleyemediği (ör. regex sözdizimi) |
| Paket ekleme/çıkarma, `app.json` değişikliği | `npx expo-doctor` | SDK uyumsuzlukları, yapılandırma hataları |
| Tanıyıcı değişikliği | Testlerde olmayan gerçekçi Türkçe ekran metinleriyle deneme | Yanlış alarm ve kaçırılan bulgu |
| Telefonda görülmesi gereken değişiklik | Expo Go'da ya da deneme sürümünde sahibe adım adım ne kontrol edeceğini yaz | Gerçek cihaz davranışı; doğrulanmadıysa "telefonda doğrulanmadı" de |

Paket kurduktan, kaldırdıktan ya da `app.json`'ı değiştirdikten sonra **çalışan Metro sunucusunu yeniden başlat**. Garip davranış sürerse `--clear` ile başlat.

## Ürün Kuralları

- **Gizlilik ana söz.** Ekran görüntüleri ve okunan metin telefondan çıkmaz. Kullanıcı içeriğini bir sunucuya gönderecek her özellik önce sahibin açık onayını ister. Uygulama KVKK'ya uygun kalır.
- Kargo takibi ve harita ilk sürümde cihazda kalır: kargo kartı firmanın takip sayfasını, adres telefonun Haritalar uygulamasını açar. Otomatik kargo durumu ve uygulama içi harita veri göndereceği için sahibin onayını bekler.
- Kullanıcıya görünen tüm metinler Türkçedir ve bir Türk uygulamasının yazacağı gibi doğal yazılır, çeviri kokmaz. Ham İngilizce hata mesajı kullanıcıya asla sızmaz.
- iOS galeriyi arka planda tarayamaz: tarama uygulama açılınca ya da Paylaş menüsüyle olur. Android'de yeni ekran görüntüleri kendiliğinden yakalanabilir. Akışları iki platformda da eksiksiz hissettirecek şekilde tasarla.
- Sağlık bilgisi (MHRS) KVKK'da özel nitelikli veridir. Kilit ekranı bildirimlerinde branş gibi ayrıntılar varsayılan olarak gizli tutulur.
- Yeni üçüncü taraf paket eklemeden önce kontrol et: veri gönderiyor mu (analitik, telemetri, çökme raporu)? Gönderiyorsa sahibin onayı gerekir.
- Logo ve ikonlar sade olur. Süsleme eklemeden önce gerçek render'ı küçük boyutta (bildirim, ayarlar listesi) kontrol et.

## Kod Standartları

- TypeScript strict; `any` yok. Kod, tanımlayıcılar ve yorumlar İngilizce; arayüz metinleri Türkçe.
- **Tanıma mantığı `src/core/` altında saf TypeScript'tir.** React Native import etmez, ağa çıkmaz, böylece Windows'ta cihazsız test edilir. Dışa açılan her fonksiyonun yanında `*.test.ts` testi olur.
- Her tanıyıcı değişikliği gerçekçi Türkçe ekran metinlerinden kurulan testlerle gelir. Mevcut vakalarda doğruluğu düşüren bir tanıyıcı kabul edilmez.
- Sahibin gerçek ekran görüntülerinden türetilen test metinlerinde kişisel bilgiler (isim, IBAN, telefon, takip numarası, adres) uydurma değerlerle değiştirilir.
- Kullanıcı içeriği (okunan metin, bulunan IBAN vb.) `console.log`'a yazılmaz. Geliştirici deneme ekranı bunun dışındadır, çünkü metni kullanıcı kendisi yapıştırır ve ekranda kalır.
- Arayüz: en az 44 pt dokunma hedefi; her ekranın yükleniyor, boş ve hata hali; VoiceOver/TalkBack için Türkçe etiketler; güvenli alan ve klavye düzeni.
- Rotalar `src/app/` altındadır (Expo Router); rota olmayan kod (bileşenler, yardımcılar) `src/app/` dışında durur.

## Kritik Kırılma Noktaları

### Expo SDK 57, React Native 0.86, TypeScript 6
- Paket her zaman `npx expo install <paket>` ile kurulur. Geliştirme bağımlılığı için `-- --save-dev` kullan. npm 11'de `--dev` artık çalışmıyor, paket sessizce `dependencies`'e düşüyor.
- TypeScript 6'da `types` varsayılanı boştur. `tsconfig.json`'da `"types": ["jest"]` olmadan test tipleri bulunmaz; yeni bir global tip gerekiyorsa listeye ekle.
- Expo Router: `package.json` `main` alanı `expo-router/entry`, kök `src/app/`. `typedRoutes` açık olduğu için `npx expo start` `tsconfig.json`'a `include` ekler; bu değişiklik commit edilir.
- Expo Go yalnızca kendi içindeki native modülleri barındırır. Deneme ekranına native modül (ML Kit vb.) import etme, yoksa iPhone'daki Expo Go testi kırılır. Native modüller deneme sürümünde (development build) test edilir.
- iPhone'da Expo Go projeyi ancak bilgisayardaki CLI ile telefondaki Expo Go aynı Expo hesabıyla (`1enesgok`) giriş yapmışsa açar.

### Windows'a özgü tuzaklar
- **`npx expo login --browser` Windows'ta çöküyor:** Expo, tarayıcıyı `cmd /c start` ile açarken bağlantıdaki `&` karakterleri yüzünden hata alıyor. Çözüm: `BROWSER=none npx expo login --browser` arka planda çalıştırılır, çıktıdaki bağlantı PowerShell `Start-Process` ile açılır.
- **Telefon bilgisayara yerel ağdan bağlanamıyor:** Ağ profili "Ortak (Public)" ve güvenlik duvarında Node için izin yok. Bu yüzden geliştirme sunucusu tünelle çalışır (aşağıya bak).
- **Expo, bilgisayar geneline kurulu `@expo/ngrok`'u bulamıyor:** Expo'nun global paket arama kodu `npm.cmd`'yi shell'siz çalıştırmaya çalışıyor ve Node 24'te bu başarısız oluyor. Çözüm: `NODE_PATH` ile global `node_modules` gösterilir. `@expo/ngrok`'u projeye yerel kurmak şu an npm ERESOLVE ile başarısız (bkz. Bilinen Sorunlar §1).
- **Süreç durdururken PID ya da port hedeflenir.** `taskkill /IM node.exe` gibi isimle toplu kapatma yapma, sahibin başka işlerini de öldürür. Doğrulama için tarayıcı süreçleri başlatıp kapatma; gerekirse önce sor.

### Hermes (telefondaki JavaScript motoru)
- Tarih okuyucudaki lookbehind (`(?<!...)`) ve sticky (`y`) bayraklı regex'ler Hermes tarafından derlendi (`npx expo export` ile doğrulandı). Hermes desteğinden emin olmadığın yeni bir dil özelliği kullanırsan aynı kontrolü yap.

## Geliştirme Sunucusu ve iPhone'da Deneme

```bash
# Tünelli geliştirme sunucusu (arka planda çalıştır)
NODE_PATH='C:\Users\expen\AppData\Roaming\npm\node_modules' npx expo start --tunnel

# Tünel adresini oku (ngrok'un yerel API'si)
curl -s http://127.0.0.1:4040/api/tunnels   # public_url → exp://<alt-alan>.exp.direct
```

- Arka planda çalışan `npx expo start` QR kodu basmaz. Telefon için QR, projede zaten bulunan `toqr` paketiyle üretilip (matris satır satır, `1` = koyu modül) geçici bir HTML sayfası olarak açılır. Sayfa scratchpad'e yazılır, repoya girmez.
- Expo Go'da aynı hesapla girildiğinde proje ana ekrandaki "Development servers" listesinde de görünür.
- Tünelde yeniden yüklemeler yerel ağa göre yavaştır. Sahip ağ profilini "Özel" yapıp Node'a güvenlik duvarı izni verirse yerel ağ (`npx expo start`, `exp://192.168.1.101:8081`) kullanılabilir.

## Proje Yapısı

```
src/
├── app/                        # Expo Router rotaları
│   ├── _layout.tsx             # Kök Stack + StatusBar
│   └── index.tsx               # Şimdilik "Tanıma denemesi" ekranı (gerçek ana ekran gelene kadar)
├── core/                       # Saf TypeScript tanıma motoru (RN import yok, ağ yok)
│   ├── text/fold.ts            # foldTurkish: Türkçe harf ve noktalama normalleştirme
│   ├── dates/calendar.ts       # CalendarDate, TimeOfDay, gün hesapları
│   ├── dates/findDates.ts      # Türkçe tarih ve saat bulucu
│   ├── dates/format.ts         # formatDate: "31 Ekim 2026 Cumartesi, 23:59"
│   ├── amounts/findAmounts.ts  # TL tutar bulucu, parseAmountNumber
│   └── amounts/format.ts       # formatKurus: "1.249,90 TL"
└── dev/                        # Geliştirici araçları (kullanıcıya giden sürümde kaldırılacak)
    ├── RecognitionPlayground.tsx  # Yapıştırılan metinde bulunanları gösteren ekran
    └── samples.ts              # Uydurma örnek ekran metinleri
docs/
├── YOL-HARITASI.md             # Kararlar ve aşamalar (sahip okur)
└── YAPILACAKLAR.md             # Ayrıntılı iş listesi (sahip okur)
ekran-goruntuleri/              # Sahibin gerçek ekran görüntüleri; gitignore'da, asla commit edilmez
```

## Mimari: Türkçe Tanıma Motoru (`src/core/`)

### `foldTurkish` (`text/fold.ts`)
- Metni küçük harfe çevirir, Türkçe harfleri sadeleştirir: "EKİM", "Ekim", "EKIM" ve OCR'ın bozduğu "Ekım" hepsi `ekim` olur. Kıvrık kesme işaretini düz `'`, uzun tireyi `-`, bölünmez boşluğu normal boşluk yapar.
- **Değişmez kural: her karakter tam olarak bir karaktere dönüşür.** Böylece katlanmış metinde bulunan konum, orijinal metinde de aynı konumdur. JavaScript'in kendi `toLowerCase()`'i "İ"yi iki karaktere çevirdiği için kullanılmaz; eşleme tablosu elle tutulur. Bu kural bozulursa tüm eşleşme konumları kayar.
- Tüm tanıyıcılar regex'i katlanmış metinde çalıştırır, sonucu orijinal metinden keser.

### `findDates` (`dates/findDates.ts`)
`findDates(text, reference)` metindeki tüm tarihleri bulur. `reference`, ekran görüntüsünün çekildiği gündür: eksik yılı ve "yarın" gibi göreli ifadeleri buna göre çözer.

Akış: **adaylar → çakışma temizliği → aralık yılı paylaşımı → çözümleme**
1. **Adaylar:** ay adlı tarihler ("15 Ekim", "Cumartesi, 17 Ekim 2026", "1-31 Ekim", "28 Eyl 2026"), sayısal tarihler ("31.10.2026", "31/12/26", "15-10-2026"), ISO ("2026-10-15"), göreli kelimeler (bugün, yarın, dün, öbür gün, yarından sonra, bu akşam, bu gece), saatli gün adı ("Cumartesi 21.00").
2. Her adayın arkasından aynı satırdaki gün adı ve saat okunur (`readTrailing`).
3. **Çakışma temizliği:** Aynı yerde en erken başlayan, eşitlikte en uzun aday kalır.
4. **Aralık yılı:** "15 Aralık - 5 Ocak 2027"de yılsız ilk tarih yılını ikinciden alır (ay sırası tersse bir önceki yıl).
5. **Çözümleme:** Yıl yazılmamışsa ekran görüntüsü tarihine en yakın yıl seçilir (önceki, bu, sonraki yıl). Gün adı yazılıysa ona uyan yıl önceliklidir ("5 Ocak Salı" haziran 2026'da görülürse 2027).

Bilinçli kurallar ve sınırlar:
- Kısa ay adları ("Ara", "May", "Kas") sıradan kelimelerle karışmasın diye yalnızca yıl ya da saat varsa tarih sayılır.
- Saat yalnızca aynı satırdaysa tarihe bağlanır. Alt satırdaki saati bağlamak başka ekranlarda yanlış hatırlatma kurardı. MHRS'nin ayrı satırlı "Randevu Saati" alanını MHRS tanıyıcısı etiketle çözecek.
- Fiyat saat ya da yıl sayılmaz: "15 Ekim 12.50 TL", "15 Ekim 2000 TL".
- Gün adı tek başına, saat yoksa tarih sayılmaz ("Cuma günü görüşürüz").
- "3 gün içinde", "son 3 gün" gibi süreler genel okuyucuda çözülmez. "14 gün içinde iade" ekran görüntüsünün tarihine değil sipariş tarihine bağlıdır; bu iş ilgili tanıyıcıya kalır.
- "Dönem: Eylül 2026" gibi yalnızca ay ve yıl yazan ifadeler tarih sayılmaz.

### `findAmounts` (`amounts/findAmounts.ts`)
- Para birimi işareti olmayan sayı tutar sayılmaz. Tanınanlar: TL, ₺, TRY, lira, Türk Lirası; "bin" ve "milyon" çarpanları.
- Önce "sayı + TL" biçimi aranır, sonra "₺ + sayı". Böylece "100 TL 250 TL"de "TL 250" yanlış okunmaz.
- Tutarlar **kuruş cinsinden tamsayı** tutulur (89,90 TL = 8990), ondalık yuvarlama hatası olmaz.
- `parseAmountNumber`: iki ayraç birden varsa sondaki ondalıktır ("1.250,00", "1,250.00"); tek ayraçta 1-2 hane ondalık, üçlü gruplar binliktir ("89,90", "1.250"). Biçimi bozuk sayı reddedilir ("1.25.000").
- Yüzde işaretli sayı indirim oranıdır, tutar değildir ("%20").

### Biçimlendiriciler
- `formatDate(date, time?)` → "31 Ekim 2026 Cumartesi, 23:59". `formatKurus(kurus)` → "1.249,90 TL".
- Ay ve gün adları iki listede durur: `findDates.ts`'te tanıma için katlanmış biçimde (`ekim`, `subat`), `format.ts`'te gösterim için Türkçe harfli (`Ekim`, `Şubat`). Biri değişirse diğerini kontrol et.

### Tanıma denemesi ekranı (`src/dev/`)
- Sahibin iPhone'da Expo Go ile tanıyıcıları denemesi için. Yapıştırılan metinde bulunan tarihleri ve tutarları listeler, metinde renkle işaretler. Hazır örnek düğmeleri `samples.ts`'teki uydurma metinleri yükler.
- Yeni bir tanıyıcı bitince bu ekrana da eklenir. Ekran Expo Go'da çalışmaya devam etmelidir.

## Test Altyapısı

Jest (`jest-expo` ön ayarı; `testEnvironment: node`; yalnızca `src/` taranır). Testler kaynak dosyanın yanında durur (`foo.ts` → `foo.test.ts`). Jest, Expo'nun önerdiği yol olduğu için seçildi.

| Komut | Görev |
|---|---|
| `npm test` | Tüm testleri bir kez çalıştırır |

**Mevcut testler (72 test, 5 dosya, 2026-10-02):**

| Dosya | Neyi doğruluyor |
|---|---|
| `src/core/text/fold.test.ts` | Türkçe büyük harfler, ı/i karışıklığı, noktalama normalleştirme, uzunluğun korunması |
| `src/core/dates/findDates.test.ts` | Sayısal ve ay adlı tarihler, saat ve gün adı ekleri, aralıklar, yıl tahmini, göreli ifadeler, telefon/IBAN/tutar/sürüm numarası gibi yanlış alarmlar |
| `src/core/amounts/findAmounts.test.ts` | Türk ve İngiliz sayı biçimleri, ₺ önde/arkada, ekler, bin/milyon, indirim satırı, yanlış alarmlar; `parseAmountNumber` kabul/ret |
| `src/core/dates/format.test.ts` | Türkçe tarih yazımı, iki haneli saat, `toCalendarDate` |
| `src/core/amounts/format.test.ts` | Kuruştan "1.249,90 TL" yazımı, sıfır ve eksi tutarlar |

`calendar.ts`'in gün hesapları (`weekdayOf`, `addDays`, `daysBetween`) `findDates` testleri üzerinden dolaylı doğrulanıyor.

**Testlerde olmayan metinlerle deneme yöntemi:** `src/core/` altına geçici bir `*.test.ts` dosyası yazılır, gerçekçi uzun ekran metinleri (kargo SMS'i, MHRS ekranı, sipariş özeti, fatura, bilet) çalıştırılıp sonuçlar `console.log` ile incelenir, sonra dosya silinir. Bulunan hatalar kalıcı teste dönüştürülür.

## Bilinen Sorunlar ve Teknik Borç

Yeni kod yazarken bunları büyütme. Durumlar: 🔴 açık ve önemli, 🟡 açık, ✅ çözüldü.

1. 🟡 **npm yeni paket eklerken ERESOLVE veriyor.** Expo Router'ın isteğe bağlı bağımlılıkları `react-dom@19.3.0` getiriyor ve bu sürüm `react@^19.3.0` istiyor; proje SDK 57'nin sabitlediği `react@19.2.3`'te. Ayrıca `react-native-worklets@0.13.0`, `expo-modules-core`'un beklediği aralığın dışında. `npx expo-doctor` 21/21 temiz, yani uygulama çalışıyor; sorun yalnızca npm'e yeni paket eklerken çıkıyor (2026-10-02'de `@expo/ngrok` eklenirken görüldü). **Metin okuyucu (ML Kit) kurulmadan önce çözülmeli.** İlk denenecek: `react-dom`'u SDK uyumlu sürüme sabitlemek.
2. 🟡 **Expo CLI'ın Windows hataları** (tarayıcıyla giriş ve global paket bulma). Geçici çözümler yukarıda "Windows'a özgü tuzaklar"da. Expo güncellemelerinde düzelip düzelmediği kontrol edilir.
3. 🟡 **Telefon yerel ağdan bağlanamıyor.** Şimdilik tünel kullanılıyor; yerel ağ için sahibin ağ profilini değiştirmesi gerekir.
4. 🟡 **Test metinleri henüz uydurma.** Sahibin gerçek ekran görüntüleri gelince gerçek okuma hatalarıyla güçlendirilecek.
5. 🟡 **`app.json`'da `ios.supportsTablet: true`.** iPad kararı bekleniyor (öneri: ilk sürümde kapalı). Açık kalırsa App Store iPad ekran görüntüleri de ister.
6. 🟡 **Deneme ekranı uygulamanın açılış rotası.** Gerçek ana ekran gelince `src/dev/` geliştirici menüsüne taşınacak ve kullanıcıya giden sürümden çıkarılacak.

## Hesaplar ve Ortam

- **Bilgisayar:** Windows 11, Node 24, npm 11. Mac, Java ve Android SDK yok. iOS ve Android derlemeleri bulutta (EAS).
- **Expo:** CLI hesabı `1enesgok`. Proje sahibi `enesgoks-team`, EAS proje kimliği `52d02b65-4849-4bc6-8a46-a228f5801856` (`app.json`'da).
- **Telefonlar:** Sahibin telefonu iPhone. Apple Developer ve Google Play hesapları sahibin kararıyla sonraya bırakıldı. O zamana kadar iPhone'da yalnızca Expo Go ile saf JavaScript özellikleri (deneme ekranı gibi) denenir. ML Kit gibi native özellikler ödünç bir Android telefona kurulan deneme sürümüyle (EAS development build, ücretsiz) denenir.

### Kurulu geliştirme araçları (kullanıcı düzeyinde, tüm projelerde, 2026-10-02)

Claude CLI PATH'te değil; VS Code eklentisinin içindeki `claude.exe` ile yönetilir (`~/.vscode/extensions/anthropic.claude-code-*/resources/native-binary/claude.exe`). MCP ayarları `~/.claude.json`'da durur.

| Araç | Ne işe yarar | Not |
|---|---|---|
| Expo resmi eklentisi (`expo@claude-plugins-official`) | 24 Expo skill'i (Router, EAS, mağazalar, SDK yükseltme, tasarım sistemi) + Expo MCP | Kullanım istatistiği isteğe bağlı ve kapalı. Expo MCP bir kerelik giriş ister (Claude'da `/mcp`). |
| `mobile-mcp` | Telefonu ya da emülatörü yönetmek: ekran görüntüsü, dokunma, uygulama kurma, loglar | `MOBILEMCP_DISABLE_TELEMETRY=1` ile kullanım verisi kapalı. Windows'ta `cmd /c npx` ile başlar. Android için ADB ve USB hata ayıklama gerekir. Windows'tan iPhone yönetimi doğrulanmadı. |
| `android-mcp` | Android telefonu ADB ve erişilebilirlik ağacıyla yönetmek | `uvx --python 3.13` ile çalışır (Python 3.13 uv'nin kendi alanında, sistemdeki 3.12'ye dokunmaz). ADB ve Android 10+ telefon gerekir. mobile-mcp ile aynı işi görür. |
| Kullanıcı skill'leri: `accessibility-patterns`, `app-lifecycle`, `deep-linking` | Erişilebilirlik, uygulama yaşam döngüsü, derin bağlantı ilkeleri | everything-claude-code-mobile'dan seçildi (MIT). Örnekler native; React Native/Expo karşılıklarıyla uygulanır. |
| skills-manager (masaüstü uygulaması) | Sahibin skill'leri görsel olarak yönetmesi | `%LOCALAPPDATA%\skills-manager`. İmzasız kurulum dosyası, sahip onayladı. |

**Bilinçli olarak kurulmayanlar:** everything-claude-code-mobile'ın geri kalanı. Paket native Kotlin/Swift/KMP için yazılmış; React Native'de yanlış tekniklere yönlendirir. Kancaları proje klasörüne kayıt dosyası yazıyor. Bildirim ve çevrimdışı skill'leri sunucu tabanlı. Güvenlik skill'i kayıtları dışarıdaki bir çökme servisine göndermeyi öneriyor, bu gizlilik kuralımıza aykırı. awesome-claude-skills ise kurulacak bir paket değil, bir liste; içindeki tek ilgili öğe (Expo skill'leri) zaten kurulu.
