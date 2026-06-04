# Decorao — site de prezentare

Site static modern pentru **decorao.ro** (fabrică de mobilă). Mentenanță minimă: editezi texte într-un fișier JSON și pui poze într-un folder.

## Pornire rapidă (Windows)

**Dublu-click pe `Porneste-site.bat`** din acest folder (`C:\Users\User\Projects\decorao`).

- Nu deschide fișiere `.html` direct din Explorer — site-ul **nu** merge așa.
- Lasă fereastra neagră (terminal) **deschisă** cât timp navighezi pe site.
- Dacă browserul spune „refused to connect”, așteaptă 2–3 secunde sau reîncarcă pagina.
- Fără Node.js: instalează LTS de la https://nodejs.org , repornește PC-ul, apoi rulează din nou `Porneste-site.bat`.

## Logo & siglă

- **Logo complet** (header + hero): `public/logo.svg`
- **Siglă** (pictogramă): `public/sigla.svg`
- **Favicon**: `public/favicon.svg`

## Tab-uri (meniu)

Definite în `src/data/site.json` → `nav` și secțiunile `rooms`:

Acasă · Despre · Materiale · **Bucătării** · **Dormitor** · **Baie** · **Living** · **Uși** · **Scări** · Contact

## Adăugare poze pe cameră

1. Copiază imagini în subfolderul camerei, ex. **`public/galerie/bucatarii/`**
2. Rulează `npm run build` înainte de publicare
3. Opțional: titluri în `src/data/galerie.json`:

```json
[
  { "file": "bucatarie-1.jpg", "title": "Bucătărie albă mat" }
]
```

## Date firmă (telefon, adresă, texte)

Editează **`src/data/site.json`** — telefon, email, adresă, produse, paragrafe „Despre noi”.

## Comenzi

```bash
cd C:\Users\User\Projects\decorao
npm install
npm run dev      # previzualizare locală — http://localhost:4321 (deschide browserul)
npm start        # la fel ca npm run dev
npm run build    # generează folderul dist/ pentru hosting
npm run preview  # verifică build-ul
```

## GitHub

Dublu-click pe **`Upload-pe-GitHub.bat`** sau vezi **`GITHUB.md`** pentru pașii de upload.

## Publicare pe decorao.ro

Încarcă conținutul din **`dist/`** pe hosting-ul domeniului (cPanel, Netlify, Cloudflare Pages etc.). Setează domeniul `decorao.ro` către acel site.

## Structură

```
public/galerie/     ← poze noi aici
src/data/site.json  ← texte + meniu
src/pages/index.astro
dist/               ← site gata de upload (după build)
```
