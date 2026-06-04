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

## Legarea domeniului **decorao.ro** (ai deja domeniul)

Domeniul singur nu afișează site-ul — trebuie **hosting** (Netlify / Cloudflare / cPanel) + setări **DNS** la firma unde ai cumpărat `.ro` (ex. ROTLD, Hostinger, GoDaddy, etc.).

### Recomandat: Vercel + GitHub (deploy automat)

1. Urcă codul pe GitHub (`Upload-pe-GitHub.bat`).
2. [vercel.com](https://vercel.com) → login cu GitHub → **Import** repo `decorao`.
3. Deploy (setări în `vercel.json`: build `npm run build`, output `dist`).
4. **Settings → Domains** → `decorao.ro` + `www.decorao.ro` → configurezi DNS la registrar.

Ghid complet: **`VERCEL.md`**.

### Alternativ: Netlify + GitHub (deploy automat)

1. Urcă codul pe GitHub (`Upload-pe-GitHub.bat`).
2. Cont gratuit: https://app.netlify.com → **Add new site** → **Import from Git** → alege repo-ul `decorao`.
3. Netlify detectează singur build-ul (`npm run build`, folder `dist` — vezi `netlify.toml`).
4. După primul deploy reușit: **Domain management** → **Add a domain** → `decorao.ro`.
5. Adaugă și **`www.decorao.ro`** (Netlify oferă redirect www → fără www sau invers — alege una ca principală).

### DNS la registrar (unde ai cumpărat decorao.ro)

Netlify îți arată valorile exacte în panou. De obicei:

| Tip | Nume / gazdă | Valoare |
|-----|----------------|---------|
| **A** | `@` (rădăcină) | IP-ul afișat de Netlify (ex. `75.2.60.5`) |
| **CNAME** | `www` | `nume-site-ul-tau.netlify.app` |

**Sau** (mai simplu): la registrar schimbi **nameserverele** la cele oferite de Netlify — atunci Netlify gestionează tot DNS-ul.

Propagarea DNS: de la câteva minute până la **24–48 ore**. Netlify activează **HTTPS** (certificat gratuit) după ce DNS e corect.

### Varianta Cloudflare

1. Muți nameserverele domeniului la Cloudflare (gratuit).
2. **Pages** → proiect din GitHub sau upload `dist`.
3. **Custom domains** → `decorao.ro` + `www`.
4. Cloudflare pune automat proxy + SSL.

### Varianta hosting clasic (cPanel la firma de hosting)

1. `npm run build`
2. Urci fișierele din **`dist/`** în **`public_html`** (sau subdomeniul setat pentru decorao.ro).
3. La DNS: **A** `@` → IP-ul serverului de hosting; **CNAME** `www` → același server sau `decorao.ro`.

### Verificare

- Site nou online: deschide linkul Netlify (`*.netlify.app`) — dacă merge acolo, codul e OK; apoi aștepți DNS pentru `decorao.ro`.
- După legare: https://decorao.ro și https://www.decorao.ro (redirect pe una singură e normal).

### Ce NU ține site-ul online pentru alții

- `npm run dev` / `Porneste-site.bat` — doar pe PC-ul tău, pentru previzualizare.
- Domeniul fără hosting/DNS — `decorao.ro` nu arată nimic sau arată pagina veche a registrarului.
