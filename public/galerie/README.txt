Poze pe categorii
=================

  public/galerie/bucatarii/
  public/galerie/dormitor/
  public/galerie/baie/
  public/galerie/living/
  public/galerie/usi/
  public/galerie/scari/

Cum adaugi poze
---------------
1. Copiază fișierul (.jpg, .jpeg, .png, .webp) în folderul categoriei.
2. Nume recomandat: bucatarie-06.png, dormitor-07.png, etc.
3. Rulează npm run build (sau urcă pe site).

Orientare automată
------------------
Site-ul detectează orientarea și alege cadrul potrivit:
  - landscape (lată) → cadru 4:3
  - portrait (înaltă) → cadru 3:4
  - pătrată → cadru 1:1

Poza se vede întreagă în cadru (fără tăiere).

Legende (opțional)
------------------
Textul de sub poză: src/data/galerie.json
Doar file + title. Exemplu:

  { "file": "dormitor/dormitor-07.png", "title": "Pat — lemn masiv" }

Forțare manuală (rar necesar)
-----------------------------
Poți adăuga "fit": "cover" sau "fit": "contain" în galerie.json.
