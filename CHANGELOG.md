# FinHub 1.1.0: changed files

| File | What changed | Why |
|---|---|---|
| index.html (new) | Landing page. Dark rail + light body, same split as the app. Theme tokens copied from the app's `:root`. Footer with copyright + email. | Landing pulls from app theme colors |
| app/index.html (moved from root) | Renamed FinHub; title, meta, manifest/icon links; `:root` theme tokens; logo in sidebar; version stamp (APP_VERSION 1.1.0); service worker registration + update prompt; model list refreshes on key save, button renamed Refresh Models, non-chat models filtered, missing saved model kept and flagged; footer "All Rights Reserved" + email; embedded logo MIME fixed (png -> jpeg). | Audit items 1, 4, 5, 6, 9, 10 |
| app/manifest.json (new) | scope `./`, 192 + 512 `any maskable` icons, black background, #111827 theme | PWA install |
| app/sw.js (new) | Cache `finhub-v1.1.0`; network-first HTML, cache-first assets, CDN libs cached; Groq calls never cached; skipWaiting + clients.claim | Offline + updates |
| app/icon-192.png, app/icon-512.png (new) | Your new icon, symbol only (wordmark removed), square with maskable-safe padding | Washed-out icon |
| README.md | Rewritten with standard sections | Audit item 8 |
| docs/how-it-works.svg (new) | Flow diagram, light/dark safe | README |
| finhub_icon.png (delete) | Replaced by the two icons in /app | Flatten |

Not changed, on purpose: print palette (navy/gold), the hardcoded `llama-3.1-70b-versatile` fallback (line ~636) and `llama-3.3-70b-versatile` (structure detection), dead Dark Mode / currency / decimals toggles.
