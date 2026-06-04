# Upload pe GitHub

Proiectul este pregătit local cu Git. Urmează pașii de mai jos (o singură dată pentru cont).

## Varianta rapidă (Windows)

1. **Dublu-click** pe `Upload-pe-GitHub.bat`
2. Te loghezi în browser la GitHub când îți cere
3. La final vei avea repo-ul **decorao** pe contul tău

## Varianta manuală (terminal)

Deschide PowerShell în `C:\Users\User\Projects\decorao`:

```powershell
# 1. Autentificare (o dată)
gh auth login

# 2. Creează repo public și urcă codul
gh repo create decorao --public --source=. --remote=origin --push
```

Dacă repo-ul există deja pe GitHub:

```powershell
git remote add origin https://github.com/NUMELE_TAU/decorao.git
git branch -M main
git push -u origin main
```

## Ce este inclus în repo

- Codul site-ului (`src/`, componente Astro)
- Pozele din `public/galerie/` (~48 MB)
- **Nu** sunt incluse: `node_modules/`, `dist/`, fișiere `.env`

## După upload

- Pe GitHub: **Settings → Pages** sau conectezi **Netlify** la repo pentru deploy automat la fiecare push
- Pentru modificări locale: `git add .` → `git commit -m "descriere"` → `git push`

## Dacă git cere nume/email la commit

Setează o singură dată (înlocuiește cu datele tale):

```powershell
git config --global user.name "Numele Tau"
git config --global user.email "email@exemplu.com"
```
