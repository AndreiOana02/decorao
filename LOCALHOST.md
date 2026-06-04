# De ce se „închide” localhost?

**localhost** nu e un site care rulează mereu pe PC. E un **server temporar** pornit de `npm run dev`.

## Când se oprește (normal)

| Acțiune | Ce se întâmplă |
|---------|----------------|
| Închizi fereastra **„Decorao local”** | Serverul se oprește → localhost nu mai merge |
| Apasă **Ctrl+C** în fereastra serverului | La fel |
| Repornești PC-ul | Trebuie să pornești din nou `Porneste-site.bat` |
| Eroare roșie în fereastra serverului | Serverul a căzut — repornește și citește mesajul |

## Ce NU trebuie să repornești

- **www.decorao.ro** (site-ul live pe Vercel) — merge mereu, fără `Porneste-site.bat`
- Închizi doar browserul — serverul poate rămâne pornit

## Cum lucrezi confortabil

1. Dublu-click **`Porneste-site.bat`**
2. Apare fereastra **„Decorao local — NU INCHIDE”** → **minimizeaz-o** (nu o închide cu X)
3. Lucrezi în browser la http://localhost:4321/
4. La final: închizi fereastra „Decorao local” sau **Ctrl+C**

## Alternativă fără server pornit

După modificări, pentru verificare rapidă fără dev:

```
npm run build
npm run preview
```

`preview` tot necesită o fereastră deschisă, dar e mai stabil pentru „verificare finală”.
