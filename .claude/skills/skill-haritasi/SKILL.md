---
name: skill-haritasi
description: Map of which installed skills, plugins and MCP servers to use for each kind of task in Sonra Bakarım (Turkish recognizers, Expo screens, OCR and native modules, EAS builds, design, accessibility, KVKK/privacy, docs, review, debugging, store release) and which installed skills NOT to use here. Use at the start of any Sonra Bakarım task to pick the right skills, and when two skills seem to overlap.
---

# Sonra Bakarım: Hangi İşte Hangi Skill

Bilgisayarda 98 skill kurulu, ama hepsi bu projeye uymuyor. Bu harita hangi işte hangisinin kullanılacağını, hangisinin bu projede **kullanılmayacağını** söyler.

**Öncelik sırası:**
1. Projenin `CLAUDE.md`'si ve `~/.claude/CLAUDE.md`
2. Projenin kendi skill'leri
3. Sahibin Türkçe skill'leri
4. Expo eklentisi
5. Genel skill'ler

Bir skill bu kurallarla çelişirse kurallar kazanır. Örnek: superpowers'ın bitiş skill'i push önerse bile push sahibin onayıyla yapılır.

## 🧠 Tanıma motoru (`src/core/`)

| İş | Skill | Not |
|---|---|---|
| Yeni tanıyıcı ya da düzeltme | `turkce-taniyici-ekle` (proje) | Ana akış budur, adım atlanmaz |
| Testi koddan önce yazma | `test-driven-development` | Tanıyıcı skill'inin 3. adımı |
| Jest kalıpları (`it.each`, tablo testleri) | `javascript-testing-patterns` | Jest kullanılır, Vitest değil |
| Sonuç tipleri (tanıyıcı kalıbı, güven puanı) | `typescript-advanced-types` | `any` yok, strict |
| Yanlış tanıma, kırmızı test, tuhaf davranış | `systematic-debugging` | Önce kök neden, sonra düzeltme |
| Doğruluk ölçer ve kalite çıtası | `test-driven-development` + `verification-before-completion` | Doğruluğu düşüren değişiklik kabul edilmez |

## 📱 Ekranlar ve uygulama (Expo SDK 57)

**Herhangi bir Expo işine başlamadan önce `expo-overview`'u yükle.** Doğru Expo skill'ine o yönlendirir. Ayrıca `AGENTS.md`'deki kural geçerlidir: sürüme uygun Expo belgelerini oku, ezberden yazma.

| İş | Skill |
|---|---|
| Rotalar, sekmeler, modallar | `expo-router` |
| Yerli hissettiren ekran, iOS/Android görünümü | `expo-native-ui`, `react-native-design` |
| Apple ve Google tasarım kuralları | `mobile-ios-design`, `mobile-android-design` (yalnızca ilke olarak; kod React Native'de yazılır) |
| SwiftUI ve Compose bileşenleri (`@expo/ui`) | `expo-ui` (Expo Go'da çalışıp çalışmadığını önce kontrol et) |
| Animasyon, geçiş, titreşimli geri bildirim | `expo-animation`, `interaction-design` |
| Uygulama içi tema ve tasarım dili | `expo-design-system` |
| Mimari, telefondaki veritabanı (SQLite), çevrimdışı çalışma | `react-native-architecture` |
| Uygulama durumu (state) | `react-state-management` (sade tut, gerekmedikçe kütüphane ekleme) |
| Tarama yarıda kalırsa kaldığı yerden devam | `app-lifecycle` (örnekler native, RN karşılığıyla uygula) |
| Paylaş menüsü, bildirimden karta gitme, kargo bağlantıları | `deep-linking` |
| Expo'nun hazır örnek projeleri | `expo-examples` |
| Paket çakışması (npm ERESOLVE), SDK yükseltme | `expo-upgrade` |

## 📷 Metin okuma (ML Kit) ve native modüller

| İş | Skill / araç | Not |
|---|---|---|
| Kütüphanenin güncel belgeleri | context7 MCP | Yalnızca kütüphane adı ve soru gider, kullanıcı verisi gitmez |
| Deneme sürümü (development build) | `expo-dev-client` | Ödünç Android'e kurulur |
| Hazır kütüphane yetmezse kendi native modülü | `expo-module` | Önce sahibe sor, bakım yükü getirir |
| Ödünç Android'i yönetme (ekran görüntüsü, dokunma, log) | mobile-mcp, android-mcp | ADB ve USB hata ayıklama gerekir |

## 🎨 Tasarım ve görsel kimlik (4. aşama)

| İş | Skill | Not |
|---|---|---|
| Görsel yön önerileri, renk, yazı tipi | `frontend-design`, `ui-ux-pro-max`, `visual-design-foundations` | Yazı tipinde Türkçe harfleri (ğ, ş, ı, İ) kontrol et |
| Marka sesi ve kimliği | `brand` | |
| Tasarım kuralları belgesi (tokens) | `design-system`, `design-system-patterns` | Uygulamaya aktarmak için `expo-design-system` |
| Logo ve ikon üretimi | `design` | ⚠️ Google Gemini'ye istek gönderir, **önce sahibe sor.** Sade başla, 16-32 px'de kontrol et. |
| Mağaza ve sosyal medya görselleri | `banner-design` | ⚠️ Gemini kullanır, **önce sahibe sor.** |
| Sahibe sunum | `slides` | |

## 🗣️ Metin, erişilebilirlik, gizlilik

| İş | Skill |
|---|---|
| Kullanıcıya görünen her Türkçe metin | `turkce-arayuz-metni` |
| Kişisel veri, sağlık bilgisi (MHRS), IBAN, izinler, yedekleme | `kvkk-kontrol-listesi` |
| VoiceOver, TalkBack, büyük yazı, dokunma hedefi | `accessibility-patterns`, `accessibility-compliance` |
| Erişilebilirlik denetimi | `wcag-audit-patterns` (web odaklı, ilkeleri mobile uyarla) |
| Tehdit modeli (çıkış öncesi) | `stride-analysis-patterns`, `security-requirement-extraction` |

Güvenlik eklentisi (`security-guidance`) kendiliğinden çalışır, bulgularını ciddiye al.

## 🧭 Planlama, inceleme, bitiş

| İş | Skill | Not |
|---|---|---|
| Yeni özellik fikri, belirsiz istek | `brainstorming` | Sahibe ürün diliyle sor, teknik ayrıntıyla değil |
| Çok adımlı iş planı | `writing-plans`, ardından `executing-plans` | |
| "Bitti" demeden önce | `verification-before-completion` | CLAUDE.md'deki doğrulama kapısı |
| Kod incelemesi | `requesting-code-review`, `/code-review` | Gelen yorumları değerlendirmek için `receiving-code-review` |
| İşi tamamlama | `finishing-a-development-branch` | ⚠️ Push yalnızca sahibin onayıyla |
| Commit | `commit-commands` eklentisi (`/commit`) | Commit serbest, push için dur ve sor |
| Paralel ajanlar | `dispatching-parallel-agents`, `subagent-driven-development` | Yalnızca sahip isterse; ek maliyet getirir |
| Sahibin belgeleri | `sahip-belgeleri` | YOL-HARITASI ve YAPILACAKLAR |
| Yeni skill yazma | `writing-skills`, `skill-creator` | Ekledikten sonra skill listesinin sığdığını hesapla |

## 🚀 Mağaza ve yayın (6-8. aşamalar)

| İş | Skill | Not |
|---|---|---|
| Bulutta derleme, TestFlight, Google Play | `eas-app-stores` | 💰 Ücretsiz planın sınırı var, aşılacaksa sahibe sor |
| Otomatik derleme akışları | `eas-workflows` | 💰 Aynı not |
| Uzaktaki simülatörde deneme | `eas-simulator` | 💰 Ücretli, önce sor |
| Gizlilik politikası, mağaza metinleri | `turkce-arayuz-metni`, `kvkk-kontrol-listesi` | Hukuki görüş yerine geçmez |

## 🚫 Bu projede kullanılmayanlar

| Skill | Neden |
|---|---|
| `eas-update`, `eas-update-insights` | Uygulamaya internetten güncelleme indirir. Android'de internet izninin tamamen kapalı olması kararı bekliyor (YAPILACAKLAR, karar 6). Sahip karar vermeden kullanma. |
| `eas-observe` | Uygulamanın ölçümlerini Expo'nun sunucusuna gönderir. "Telefondan veri çıkmaz" sözüne aykırı, sahibin onayı olmadan kullanma. |
| `expo-data-fetching` | Uygulama ağa çıkmıyor. Sahip onaylı bir sunucu özelliği gelirse kullanılır. |
| `eas-hosting`, `expo-dom`, `expo-web-to-native`, `expo-brownfield`, `expo-app-clip`, `expo-project-structure` | Web sitesi, mevcut native uygulama, App Clip ya da sıfırdan proje işleri. Bize uymuyor. |
| `nextjs-app-router-patterns`, `tailwind-design-system`, `ui-styling`, `responsive-design`, `web-component-design`, `nodejs-backend-patterns`, `postgresql-table-design` | Web ve sunucu projeleri için. Sahibin diğer projelerinde kullanılır. |
| `screen-reader-testing`, `webapp-testing`, `sast-configuration` | Web uygulamalarına göre yazılmış. |
| `brand-guidelines`, `internal-comms`, `slack-gif-creator`, `algorithmic-art`, `canvas-design`, `theme-factory`, `web-artifacts-builder`, `mcp-builder`, `claude-api` | Anthropic markası, şirket içi yazışma ya da başka işler. |
| `using-git-worktrees` | Tek kişilik, tek dallı çalışıyoruz; gerek yok. |
| playwright MCP | Uygulama mobil. Tarayıcı açmak gerekirse önce sahibe sor. |

Yeni bir eklenti ya da skill kurulursa bu haritayı güncelle.
