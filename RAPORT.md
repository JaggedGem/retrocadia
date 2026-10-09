# Raport final — Retrocadia

## Tema și justificarea ei

Tema proiectului este prezentarea jocurilor video retro din anii 1980 și începutul anilor 1990. Retrocadia explică de ce aceste jocuri sunt interesante și astăzi, cum au evoluat consolele și cum poate începe un jucător nou.

Tema permite îmbinarea unui hobby cu informații istorice, descrieri, imagini și comparații. Jocurile selectate ilustrează genuri diferite: platformer, aventură, puzzle și lupte. Fontul pixel și capturile reale susțin tema fără a îngreuna citirea textului.

**Aprobarea temei de către profesor:** de completat de elev.

## Structura site-ului

Site-ul conține patru pagini HTML distincte și un fișier CSS comun:

1. **Acasă — `index.html`:** prezintă tema, recomandă trei jocuri, explică atractivitatea jocurilor retro și oferă un tabel de recomandări.
2. **Jocuri — `jocuri.html`:** conține șase articole cu capturi, informații despre ediții, elemente de gameplay și sfaturi. Un tabel compară platforma, genul și numărul de jucători.
3. **Istorie — `istorie.html`:** prezintă șase repere cronologice, compară patru console și explică influența limitărilor tehnice asupra designului.
4. **Ghid — `ghid.html`:** propune pași de început, compară metodele de acces la jocuri și oferă întrebări frecvente și surse.

Fiecare pagină folosește aceeași navigare și același subsol. Linkurile sunt relative, astfel încât site-ul poate fi deschis atât local, cât și pe un server static.

## Elementele HTML utilizate

| Element                                          | Utilizare                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| `html lang="ro"`                                 | Declară limba conținutului                                               |
| `head`, `title`, `meta`                          | Titlu unic, codificare UTF-8, descriere și afișare pe mobil              |
| `header`, `nav`, `main`, `footer`                | Separă navigarea, conținutul principal și subsolul                       |
| `section`, `article`, `aside`                    | Organizează secțiuni, articole despre jocuri și informații complementare |
| `h1`, `h2`, `h3`, `p`                            | Creează ierarhia titlurilor și paragrafele                               |
| `ul`, `ol`, `li`                                 | Liste de caracteristici, meniuri, pași și cronologie                     |
| `img`, `figure`, `figcaption`                    | Imagini cu text alternativ și explicații                                 |
| `table`, `caption`, `thead`, `tbody`, `th`, `td` | Tabele de comparație, cu antete identificate prin `scope`                |
| `a`, `id`                                        | Navigare între pagini, ancore în pagină și resurse externe               |
| `details`, `summary`                             | Întrebări care se deschid fără JavaScript                                |

Fiecare pagină include un singur `h1`, subtitluri, paragrafe, liste ordonate și neordonate, imagini și un tabel cu mai multe rânduri și coloane.

## Stilurile CSS

Fișierul `css/style.css` este legat în toate paginile prin `link rel="stylesheet"`. Stilurile sunt separate de conținutul HTML.

- **Culori:** fond crem, text verde închis, secțiuni verde închis și accente lime, mov și piersică.
- **Tipografie:** fontul local Press Start 2P pentru identitate și etichete; Arial și fonturi de sistem pentru textul lung.
- **Layout:** CSS Grid pentru secțiunile în coloane și Flexbox pentru meniu, butoane și subsol.
- **Spațiere:** o lățime maximă comună, margini consistente și distanțe între secțiuni.
- **Responsive:** media queries la 900 și 650 de pixeli adaptează coloanele și navigarea. Tabelele pot fi derulate orizontal în propriul container.
- **Imagini:** `image-rendering: pixelated` păstrează aspectul pixelilor; `object-fit: contain` evită tăierea capturilor.
- **Accesibilitate:** link de salt la conținut, contur la focalizare, indicarea paginii curente prin `aria-current`, texte alternative și suport pentru `prefers-reduced-motion`.

## Funcționalitate

Nu există JavaScript, framework-uri, dependențe pentru rulare sau formulare care să simuleze trimiterea unor date. Interacțiunile necesare sunt oferite de linkuri, ancore și elemente HTML native.

Imaginile și fontul sunt locale. Site-ul funcționează fără internet, iar sursele externe se deschid prin linkuri obișnuite.

## Proveniența informațiilor și a imaginilor

Capturile sunt din edițiile indicate în pagini și provin din proiectul public libretro-thumbnails. Fișierul `assets/SOURCES.md` înregistrează sursele exacte. Jocurile și imaginile aparțin titularilor lor.

Resursele din pagina Ghid includ The Strong National Museum of Play, Nintendo Switch Online, pagina oficială despre Tetris și RetroArch. Anii diferiți de lansare sunt explicați atunci când o ediție a apărut în regiuni sau pe platforme diferite.

## Verificări efectuate

- Cele patru pagini au trecut validarea HTML fără erori sau avertismente.
- Site-ul a fost verificat în Chromium la lățimi de 1440, 768, 390 și 320 de pixeli: 16 combinații de pagină și ecran, fără depășirea orizontală a paginii și fără imagini lipsă.
- Au fost verificate 21 de destinații locale distincte, inclusiv ancorele din pagini.
- Auditurile automate de accesibilitate pentru criteriile WCAG A și AA verificate de axe-core nu au găsit probleme pe cele patru pagini. Aceste verificări automate nu reprezintă o certificare completă de accesibilitate.
- Linkul de salt la conținut este primul element focalizat de tastatură; întrebările din Ghid se deschid și se închid corect.
- Fișierele site-ului nu conțin scripturi sau stiluri inline, iar fontul și toate imaginile utilizate sunt locale.

## Plan pentru prezentarea orală

1. Prezintă tema și motivul alegerii ei.
2. Arată cele patru pagini și navighează între ele.
3. Explică o secțiune semantică, o listă, o imagine și un tabel.
4. Deschide o întrebare din Ghid și explică de ce nu necesită JavaScript.
5. Arată legătura cu fișierul CSS și două exemple de stiluri.
6. Micșorează fereastra browserului pentru a demonstra adaptarea la mobil.
7. Prezintă sursele și explică diferența dintre conținutul HTML și stilizarea CSS.
