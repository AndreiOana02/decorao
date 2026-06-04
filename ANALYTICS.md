# Google Analytics (decorao.ro)

## 1. Creează proprietatea GA4

1. Intră pe [https://analytics.google.com](https://analytics.google.com) cu contul Google.
2. **Admin** (roată) → **Create** → **Property**.
3. Nume: `Decorao`, fus orar România, industrie la alegere.
4. Flux de date: **Web** → URL: `https://decorao.ro`.
5. Copiază **Measurement ID** — arată ca `G-XXXXXXXXXX`.

## 2. Pune ID-ul în site

**Variantă A — în fișier (simplu)**

În `src/data/site.json`:

```json
"googleAnalyticsId": "G-XXXXXXXXXX"
```

Înlocuiește cu ID-ul tău real.

**Variantă B — pe Vercel (fără ID în GitHub)**

1. Vercel → proiect **decorao** → **Settings** → **Environment Variables**
2. Adaugă: `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy (sau push nou pe `main`).

Variabila din Vercel are prioritate față de `site.json`.

## 3. Unde vezi statisticile

- [analytics.google.com](https://analytics.google.com) → **Reports** → **Realtime** (vizitatori acum)
- **Acquisition** / **Engagement** — pagini, țări, dispozitive (nu numele persoanelor)

## 4. Cookie-uri

Site-ul afișează un mesaj scurt; Google Analytics pornește doar dacă vizitatorul apasă **Accept** (conform practicii UE).

## 5. Localhost

Pe `npm run dev` analytics **nu** rulează — doar pe site-ul public (Vercel / decorao.ro).
