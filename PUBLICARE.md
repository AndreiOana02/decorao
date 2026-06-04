# Cum pui site-ul online (mereu accesibil)

Site-ul tău e static. După publicare **nu** trebuie să lași calculatorul pornit.

## Varianta cea mai rapidă (5 minute, gratuit) — Netlify Drop

1. Rulează build (dacă nu ai făcut deja):
   ```
   cd C:\Users\User\Projects\decorao
   npm run build
   ```
2. Deschide în browser: **https://app.netlify.com/drop**
3. Creează cont gratuit (email + parolă) dacă nu ai.
4. **Trage folderul `dist`** din `C:\Users\User\Projects\decorao\dist` în pagina Netlify Drop.
5. Primești imediat un link gen `https://ceva-random.netlify.app` — site-ul e **mereu online**.
6. Pentru **decorao.ro**: în Netlify → Site → Domain management → Add custom domain → `decorao.ro`
7. Netlify îți arată ce să pui la DNS (la firma unde ai cumpărat domeniul). Aștepți 1–48 ore.

La fiecare modificare: `npm run build` → tragi din nou folderul `dist` pe Netlify (sau conectezi GitHub pentru deploy automat).

---

## Varianta cu domeniu direct — Cloudflare Pages

1. Cont pe https://dash.cloudflare.com
2. Pages → Create project → Upload assets → alegi folderul **`dist`**
3. Adaugi domeniul `decorao.ro` (ideal muti DNS-ul domeniului la Cloudflare)

---

## Hosting clasic (cPanel)

1. `npm run build`
2. File Manager → `public_html`
3. Ștergi fișierele vechi (backup întâi), urci **conținutul** din `dist` (nu folderul dist în sine — fișierele din interior).

---

## Pot face eu deploy-ul automat?

Da, **dacă îmi lași o dată** una din variante:

- te loghezi la Netlify în terminal (`npx netlify login`) și îmi spui „gata”, sau
- îmi trimiți un **token Netlify** (Site settings → Access tokens) — îl folosesc doar pentru deploy, nu îl pun în chat public.

Fără asta, nu am acces la contul tău de domeniu și nu pot lega `decorao.ro` în locul tău.

---

## Ce NU ține site-ul online pentru alții

- `npm run dev` — doar pe PC-ul tău, pentru previzualizare.
