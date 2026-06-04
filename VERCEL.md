# Deploy pe Vercel (după GitHub)

Site-ul Astro e static — Vercel îl publică din repo-ul GitHub.

## 1. Cod pe GitHub

Dacă nu ai urcat încă repo-ul:

- Dublu-click **`Upload-pe-GitHub.bat`**, sau
- `gh auth login` apoi `gh repo create decorao --public --source=. --remote=origin --push`

## 2. Proiect nou pe Vercel

1. Cont: [vercel.com](https://vercel.com) → **Sign Up** → **Continue with GitHub**
2. **Add New…** → **Project**
3. Importă repository-ul **`decorao`**
4. Setări (de obicei detectate automat din `vercel.json`):

   | Câmp | Valoare |
   |------|---------|
   | Framework Preset | Astro |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Install Command | `npm install` |

5. **Deploy** — în 1–2 minute primești link `https://decorao-xxx.vercel.app`

La fiecare `git push` pe `main`, Vercel reface deploy-ul automat.

## 3. Domeniul decorao.ro

1. În proiectul Vercel: **Settings** → **Domains**
2. Adaugă **`decorao.ro`** și **`www.decorao.ro`**
3. Vercel îți arată înregistrările DNS — le pui la firma unde ai cumpărat domeniul:

   | Tip | Nume | Valoare (exemplu Vercel) |
   |-----|------|---------------------------|
   | **A** | `@` | `76.76.21.21` |
   | **CNAME** | `www` | `cname.vercel-dns.com` |

   (Valorile exacte le vezi în panoul Vercel — pot diferi ușor.)

4. Aștepți propagarea DNS (minute … 48 h). Vercel activează **HTTPS** gratuit.

## 4. Verificare

- Link Vercel (`*.vercel.app`) merge → codul e OK
- Apoi `https://decorao.ro` după DNS

## Ce nu folosești pe Vercel

- `npm run dev` — doar local
- Folderul `dist` urcat manual — Vercel îl generează la build din GitHub
