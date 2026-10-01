@AGENTS.md
@docs/YOL-HARITASI.md

# Sonra Bakarım

Turkey-focused mobile app (Android + iOS) that reads the user's screenshots on-device and turns them into actions. All of these content types are in scope for launch, built on shared Turkish date and TL amount parsing:

- Coupon codes (Trendyol, Hepsiburada, Getir, Yemeksepeti) with expiry reminders
- Cargo tracking numbers (Yurtiçi, Aras, MNG, PTT)
- MHRS hospital appointments
- Event and concert posters → calendar
- Addresses and places → maps
- TR IBANs, validated and saved under a name
- Recipe, book and film recommendations → lists
- Bill due dates (electricity, gas, water, phone, internet)
- Flight and bus tickets (THY, Pegasus, AJet, obilet; PNR) → calendar, online check-in reminder
- Return deadlines for online orders (Trendyol, Hepsiburada)
- Subscription renewals (Netflix, Spotify, YouTube Premium, Disney+, Exxen) → "did you mean to cancel?" reminder
- ÖSYM exam entry documents (YKS, KPSS, ALES) → calendar, exam building
- Gallery cleanup: suggest deleting screenshots whose job is done (expired coupons, delivered cargo, OTP codes) and show the space freed
- Smaller ones: phone numbers, Wi-Fi passwords, warranty documents, product screenshots → wishlist

Cargo tracking and maps stay on-device in the first release: tapping a cargo card opens the carrier's tracking page, tapping an address opens the phone's Maps app. Automatic cargo status and in-app maps would send data off the device, so they wait for the owner's approval. Details and build order are in `docs/YOL-HARITASI.md`.

Competitors exist globally (Google Pixel Screenshots, SnapActions, Captr, Skreenly, Sorti). Our edge is understanding Turkish content better than any of them. When choosing what to build or polish, favor what makes Turkish recognition more accurate.

## Working with the owner

- The owner directs the product and does not write code. Claude writes all the code.
- The owner writes in Turkish. Reply in Turkish, and explain decisions in product terms (what the user sees or what it costs), not implementation detail.
- The goal is a polished launch on both stores at once, preceded by a closed beta (TestFlight + Google Play closed testing). Do not cut corners to ship sooner.
- `docs/YOL-HARITASI.md` (Turkish, read by the owner) is the project's memory. When a decision is made or a phase finishes, update it in the same session.

## Product rules

- **Privacy is the core promise.** Screenshot images and their extracted text never leave the device. Any feature that would send user content to a server needs the owner's explicit approval first. The app must stay KVKK-compliant.
- All user-facing text is Turkish. Write it naturally, the way a Turkish app would, not as translated English.
- iOS cannot scan the photo library in the background. On iOS, scanning happens when the app opens or via the share sheet. On Android, new screenshots may be picked up automatically. Design flows so both platforms feel complete.

## Code conventions

- TypeScript, strict mode. Code, identifiers and comments are in English. UI strings are in Turkish.
- Recognition logic (parsers for coupons, cargo numbers, dates, IBANs, amounts) lives in `src/core/` as pure TypeScript with no React Native imports, so it can be unit-tested on Windows without a device.
- Every recognizer change comes with test cases built from realistic Turkish screenshot text. Do not merge a recognizer that lowers accuracy on existing cases.
- The owner's real screenshots live in `ekran-goruntuleri/`, which is gitignored and must never be committed. Test fixtures derived from them must replace personal data (names, IBANs, phone numbers, tracking numbers, addresses) with made-up values.

## Environment

- Development machine is Windows with no Mac, Java or Android SDK. Build iOS and Android in the cloud with EAS (`npx eas-cli@latest build`), and test on physical phones with development builds.
