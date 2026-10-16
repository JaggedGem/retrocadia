# Retrocadia

Un mic atlas în limba română despre trei jocuri retro și consolele lor. Proiect pentru Studiul Individual Nr. 1: 14 pagini HTML, un fișier CSS comun, resurse media locale și un singur script opțional pentru tema vizuală. Nu are framework, dependențe sau proces de build.

Deschide `index.html` direct în browser. Pentru subtitrări și derularea temporală a playerelor, folosește serverul local opțional, cu suport HTTP Range:

```sh
python3 serve.py
```

Deschide apoi `http://localhost:8000`. Interfața, capturile, animația și motivul audio funcționează fără internet. Înregistrările YouTube și fișierele Wikimedia din profiluri necesită internet.

## Organizare

| Director sau fișier | Conținut |
| --- | --- |
| `index.html` | Index selectabil: Mario, Tetris și Sonic |
| `games/` | Colecția și trei fișe de joc, cu reguli, comenzi și video |
| `consoles/` | Colecția și trei fișe de consolă: NES, Mega Drive, Game Boy |
| `pages/istorie.html` | Cronologie și comparații |
| `pages/ghid.html` | Primii pași, întrebări și surse |
| `pages/media.html` | Imagine, video local, subtitrări, audio și încorporări |
| `pages/propune.html` | Formular cu validare HTML nativă |
| `pages/multumim.html` | Confirmare demonstrativă și rute de întoarcere |
| `css/style.css` | Aspectul comun, temele și adaptarea la ecrane mici |
| `serve.py` | Server local opțional, fără dependențe; nu este necesar pe o găzduire statică |
| `js/theme.js` | Schimbarea și memorarea temei; singurul JavaScript |
| `assets/images/` | Capturi reale din edițiile prezentate |
| `assets/media/` | MP4, WAV, VTT și schema SVG realizate pentru ghid |
| `assets/SOURCES.md` | Sursele și proveniența materialelor |
| `RAPORT.md` | Justificare, cerințe, explicații și plan de prezentare |

## Interfața

Punctul de pornire este colecția. O listă de titluri schimbă captura și fișa scurtă din zona de lectură. Selecția folosește butoane radio HTML și selectorul CSS `:has()`, fără JavaScript; poate fi operată și cu tastele săgeți. Linkul din fișă deschide articolul complet.

Navigarea comună este laterală pe desktop și se așază pe rânduri pe mobil. Titlurile sunt discrete, informațiile folosesc spații și separatoare fine, iar o singură nuanță verde marchează selecția. Nu există secțiune de promovare, bandă de statistici sau degradeuri.

Titlurile folosesc Georgia din sistem, iar textul folosește fontul local Archivo. Interfața respectă `prefers-reduced-motion`. Linkul de salt, focusul vizibil, numele accesibile, legendele și textele alternative sunt păstrate.

## Media

Pagina **Imagine & sunet** include `picture`, `img`, `video`, `audio`, `source`, `track`, `iframe`, `svg`, `object` și `embed`. Animația schematică de 8 secunde explică completarea unei linii; are subtitrări românești, transcriere și schemă statică. Motivul audio original durează 6 secunde. Controalele sunt native, iar redarea pornește numai la alegerea vizitatorului.

Schema SVG este inclusă într-un `object`, cu `embed` și link drept alternative. Gameplay-ul YouTube este într-un `details`, cu link către înregistrarea originală. Cele șase profiluri păstrează propriile înregistrări și atribuiri.

## Formular și temă

Formularul este un exercițiu fără backend. Folosește `required`, tipuri de câmp, limite de lungime și intervale, iar `:user-invalid` semnalează erorile. După validare deschide confirmarea. Câmpurile nu au `name`, astfel încât datele personale nu ajung în URL și nu sunt trimise unei echipe. Acest lucru este explicat înainte de completare și pe confirmare.

Scriptul de temă memorează alegerea în `localStorage`. Fără JavaScript, CSS urmează preferința sistemului, iar selecția jocurilor, linkurile, formularul, întrebările și playerele rămân utilizabile.

## Licențe

Capturile provin din [libretro-thumbnails](https://github.com/libretro-thumbnails); drepturile asupra jocurilor și imaginilor aparțin titularilor lor. [Archivo](https://github.com/google/fonts/tree/main/ofl/archivo), de Omnibus-Type, folosește SIL Open Font License; vezi `fonts/Archivo-OFL.txt`. Fontul Press Start 2P și licența din proiectul inițial sunt păstrate, dar nu sunt folosite de noua interfață. Materialele demonstrative locale sunt originale pentru acest proiect; sursele complete sunt în `assets/SOURCES.md`.
