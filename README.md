# Retrocadia

Un ghid în limba română despre trei jocuri retro și trei console. Nouă pagini HTML, un fișier CSS comun și un singur script opțional pentru tema vizuală. Fără framework, dependențe sau build.

```sh
python3 serve.py
```

Deschide `http://localhost:8000`. Serverul local opțional oferă HTTP Range pentru derularea video și servește fișierele de subtitrare. Site-ul poate fi găzduit pe orice server static; Python nu face parte din aplicație.

## Nouă pagini, trei destinații în meniu

| Fișier | Rol |
| --- | --- |
| `index.html` | Colecția de jocuri, selector cu capturi, comparație, întrebări și surse |
| `consoles/index.html` | Colecția de console, comparație, cronologie, variante de joc și întrebări hardware |
| `games/super-mario-bros.html` | Reguli, comenzi, sfaturi și gameplay Mario |
| `games/tetris.html` | Fișa Tetris, video demonstrativ cu subtitrări, diagramă, audio și gameplay |
| `games/sonic-the-hedgehog.html` | Reguli, comenzi, sfaturi și gameplay Sonic |
| `consoles/nes.html` | NES: istorie, hardware și jocuri |
| `consoles/mega-drive.html` | Mega Drive: istorie, hardware și jocuri |
| `consoles/game-boy.html` | Game Boy: istorie, hardware, audio și gameplay |
| `pages/propune.html` | Formular demonstrativ cu validare și confirmare în aceeași pagină |

Colecția duplicată de jocuri și paginile separate de ghid, media, cronologie și confirmare au fost eliminate. Conținutul util este integrat în colecții și în fișele potrivite.

## Aspect și imagini

Textura vizuală vine din tipografie îndrăzneață, contururi ferme și culori legate de joc: coral pentru Mario, albastru pentru Tetris și galben pentru Sonic. Fundalul rămâne deschis și calm; nu există degradeuri sau secțiune de promovare.

Capturile își păstrează proporțiile originale. Selectorul are miniaturi, iar captura mare duce direct la fișa jocului. Consolele sunt reprezentate prin trei ilustrații SVG originale, nu prin capturi de joc care ar putea fi confundate cu imagini ale hardware-ului. Fiecare desen este identificat ca ilustrație.

Pe mobil, meniul și selectorul se rearanjează, iar linkul către consola jocului rămâne în datele fișei. Tabelele se derulează în propriul container. Focusul este vizibil, navigarea funcționează prin tastatură, iar preferința pentru mișcare redusă este respectată.

## HTML, CSS și JavaScript

- `css/style.css` conține toate stilurile, ambele teme și adaptările responsive.
- `js/theme.js` este singurul JavaScript: schimbă și memorează tema.
- Selectorul folosește radio HTML și CSS `:has()`; întrebările și media suplimentară folosesc `details` și `summary`.
- Formularul folosește validare HTML nativă. După o completare validă, `#confirmare` arată mesajul în aceeași pagină prin CSS `:target`.
- Câmpurile nu au `name`; datele nu sunt salvate, trimise unei echipe sau incluse în URL. Caracterul demonstrativ este explicat înainte și după completare.

Funcțiile principale rămân utilizabile fără JavaScript. Este necesar un browser modern pentru `:has()`.

## Media și licențe

Site-ul păstrează `picture`, `img`, `audio`, `video`, `source`, `track`, `iframe`, `svg`, `object` și `embed`. Acestea apar în contextul jocurilor și consolelor. Animația locală de 8 secunde despre completarea unei linii este în fișa Tetris și are subtitrări românești, transcriere și schemă statică.

Capturile, ilustrațiile și demonstrația funcționează local. Înregistrările YouTube și Wikimedia necesită internet. Niciun material nu pornește automat.

`assets/SOURCES.md` documentează proveniența. Capturile sunt din libretro-thumbnails și aparțin titularilor jocurilor. Ilustrațiile și demonstrația schematică au fost realizate pentru acest ghid. Fontul local Archivo este distribuit sub SIL OFL; licența este în `fonts/Archivo-OFL.txt`.

`RAPORT.md` explică tema, corespondența cu cerințele și structura pentru prezentarea proiectului.
