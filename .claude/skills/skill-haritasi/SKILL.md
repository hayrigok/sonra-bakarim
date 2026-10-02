---
name: skill-haritasi
description: Map of which installed skills, plugins and MCP servers to use for each kind of task in Sonra Bakarım (Turkish recognizers, Expo screens, Duolingo-style UI and animation, OCR and gallery scanning, EAS builds, accessibility, KVKK/privacy, docs, review, debugging, store release) and which are turned off for this project to save tokens. Use at the start of any Sonra Bakarım task to pick the right skills, and when two skills seem to overlap.
---

# Sonra Bakarım: Hangi İşte Hangi Skill

Token tasarrufu için bu projede yalnızca gereken eklenti ve skill'ler açık (sahibin isteği, 2026-10-03). Ayar `.claude/settings.local.json`'da; değişiklik yeni oturumda geçerli olur.

**Öncelik sırası:**
1. Projenin `CLAUDE.md`'si ve `~/.claude/CLAUDE.md`
2. Projenin kendi skill'leri
3. Sahibin Türkçe skill'leri
4. Expo eklentisi
5. Genel skill'ler

Bir skill bu kurallarla çelişirse kurallar kazanır. Örnek: superpowers'ın bitiş skill'i push önerse bile push sahibin onayıyla yapılır.

## ✅ Bu projede açık olanlar (2026-10-03)

| Eklenti / skill | Her oturuma yükü | Neden |
|---|---|---|
| context-mode | ~970 token | Büyük çıktıları sohbete dökmez; tasarruf sağlar |
| context7 | ~0 | Kütüphanelerin güncel belgeleri |
| superpowers | ~840 | Önce test, sistematik hata ayıklama, bitirmeden doğrulama |
| expo | ~4.400 | Ekranlar, animasyon, tasarım sistemi, derleme, Expo belgeleri (MCP) |
| commit-commands, code-review | ~130 | Commit ve kod incelemesi |
| Kullanıcı skill'i `accessibility-patterns` | küçük | Mobil erişilebilirlik (44 pt, VoiceOver/TalkBack, büyük yazı) |
| `turkce-arayuz-metni`, `kvkk-kontrol-listesi`, `sahip-belgeleri` | küçük | Sahibin standardında her yerde açık |
| Proje skill'leri `turkce-taniyici-ekle`, `skill-haritasi` | küçük | Bu proje için yazıldı |

## 🧠 Tanıma motoru (`src/core/`)

| İş | Skill | Not |
|---|---|---|
| Yeni tanıyıcı ya da düzeltme | `turkce-taniyici-ekle` (proje) | Ana akış budur, adım atlanmaz |
| Testi koddan önce yazma | `test-driven-development` | Tanıyıcı skill'inin 3. adımı. Jest kullanılır. |
| Yanlış tanıma, kırmızı test, tuhaf davranış | `systematic-debugging` | Önce kök neden, sonra düzeltme |
| Doğruluk ölçer ve kalite çıtası | `test-driven-development` + `verification-before-completion` | Doğruluğu düşüren değişiklik kabul edilmez |

## 📱 Ekranlar, tema ve animasyon (Expo SDK 57)

**Herhangi bir Expo işine başlamadan önce `expo-overview`'u yükle.** Doğru Expo skill'ine o yönlendirir. `AGENTS.md`'deki kural geçerlidir: sürüme uygun Expo belgelerini oku, ezberden yazma.

| İş | Skill |
|---|---|
| Rotalar, sekmeler, modallar | `expo-router` |
| Duolingo tarzı tema: renkler, yazı tipi, kalın düğmeler, kart bileşenleri | `expo-design-system` |
| Sevimli, zıplayan animasyonlar, kutlama anları, dokunma titreşimi | `expo-animation` ("hareketi azalt" ayarına uy) |
| Telefona özgü davranışlar (güvenli alan, koyu tema, izin pencereleri) | `expo-native-ui` |
| SwiftUI ve Compose bileşenleri (`@expo/ui`) | `expo-ui` (Expo Go'da çalışıp çalışmadığını önce kontrol et) |
| Expo'nun hazır örnek projeleri | `expo-examples` |
| Paket çakışması (npm ERESOLVE), SDK yükseltme | `expo-upgrade` |

## 📷 Galeri tarama, metin okuma, native modüller

| İş | Skill / araç | Not |
|---|---|---|
| Kütüphanenin güncel belgeleri | context7 MCP, Expo MCP | Yalnızca kütüphane adı ve soru gider, kullanıcı verisi gitmez |
| Deneme sürümü (development build) | `expo-dev-client` | Ödünç Android'e kurulur |
| Hazır kütüphane yetmezse kendi native modülü | `expo-module` | Önce sahibe sor, bakım yükü getirir |
| Ödünç Android'i yönetme (ekran görüntüsü, dokunma, log) | mobile-mcp, android-mcp | ADB ve USB hata ayıklama gerekir |

## 🗣️ Metin, erişilebilirlik, gizlilik, güvenlik

| İş | Skill |
|---|---|
| Kullanıcıya görünen her Türkçe metin | `turkce-arayuz-metni` |
| Kişisel veri, sağlık bilgisi (MHRS, ilaç), IBAN, parola, izinler, yedekleme | `kvkk-kontrol-listesi` |
| VoiceOver, TalkBack, büyük yazı, dokunma hedefi | `accessibility-patterns` |
| Parola kasası, izinler gibi hassas kod bitince güvenlik incelemesi | Yerleşik `/security-review` (elle çalıştırılır; arka planda çalışan güvenlik eklentisi kapalı) |

## 🧭 Planlama, inceleme, bitiş

| İş | Skill | Not |
|---|---|---|
| Yeni özellik fikri, belirsiz istek | `brainstorming` | Sahibe ürün diliyle sor, teknik ayrıntıyla değil |
| Çok adımlı iş planı | `writing-plans`, ardından `executing-plans` | |
| "Bitti" demeden önce | `verification-before-completion` | CLAUDE.md'deki doğrulama kapısı |
| Kod incelemesi | `/code-review`, `requesting-code-review` | Gelen yorumlar için `receiving-code-review` |
| Commit | `/commit` | Commit serbest, push için dur ve sor |
| Paralel ajanlar | `dispatching-parallel-agents`, `subagent-driven-development` | Yalnızca sahip isterse; ek maliyet getirir |
| Sahibin belgeleri | `sahip-belgeleri` | YOL-HARITASI ve YAPILACAKLAR |

## 🚀 Mağaza ve yayın (6-8. aşamalar)

| İş | Skill | Not |
|---|---|---|
| Bulutta derleme, TestFlight, Google Play | `eas-app-stores` | 💰 Ücretsiz planın sınırı var, aşılacaksa sahibe sor |
| Otomatik derleme akışları | `eas-workflows` | 💰 Aynı not |
| Uzaktaki simülatörde deneme | `eas-simulator` | 💰 Ücretli, önce sor |

## 💤 Bu projede kapalı olanlar (2026-10-03)

Gerektiğinde sahibe sorularak `.claude/settings.local.json`'dan açılır.

| Kapalı | Yükü | Neden kapalı, yerine ne |
|---|---|---|
| `ui-design` | ~1.170 | Expo'nun tasarım ve animasyon skill'leri aynı işi React Native'e özgü yapıyor |
| `javascript-typescript` | ~710 | Genel TypeScript ve Jest bilgisi; ihtiyaç yok |
| `frontend-mobile-development` | ~580 | Expo skill'lerinin kopyası, bir kısmı web (Next.js) |
| `accessibility-compliance` | ~350 | Web odaklı (axe, NVDA, JAWS); yerine `accessibility-patterns` |
| `frontend-mobile-security` | ~320 | Web odaklı (XSS); yerine `/security-review` |
| `unit-testing` | ~190 | `test-driven-development` yetiyor |
| `security-guidance` | 0, ama arka planda Claude çağırıp kullanım hakkı harcıyor | Hassas kod bitince `/security-review` elle çalıştırılır |
| Kullanıcı skill'leri `app-lifecycle`, `deep-linking`, `design-system`, `ui-ux-pro-max` | küçük | İlk ikisi native Android/iOS örnekli, Paylaş menüsü aşamasında (5) açılabilir. Son ikisi web ve genel tasarım; tema `expo-design-system` ile kurulur. |

**Hiç kullanılmayanlar (kurulu eklentilerin içinde gelse de):**
- `eas-update`, `eas-update-insights`: Uygulamaya internetten güncelleme indirir. Android'de internet izni kararı bekliyor (YAPILACAKLAR, karar 6).
- `eas-observe`: Ölçümleri Expo'nun sunucusuna gönderir. "Telefondan veri çıkmaz" sözüne aykırı.
- `expo-data-fetching`: Uygulama ağa çıkmıyor.
- `eas-hosting`, `expo-dom`, `expo-web-to-native`, `expo-brownfield`, `expo-app-clip`, `expo-project-structure`: Web, mevcut native uygulama ya da sıfırdan proje işleri.
- `using-git-worktrees`: Tek kişilik, tek dallı çalışıyoruz.
- `design`, `banner-design` (kullanıcı skill'i, kapalı): Google Gemini'ye istek gönderir. Logo aşamasında sahibe sorulmadan açılmaz.
- playwright MCP: Uygulama mobil. Tarayıcı açmak gerekirse önce sahibe sor.

Yeni bir eklenti ya da skill kurulursa bu haritayı güncelle.
