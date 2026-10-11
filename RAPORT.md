# Raport final — Retrocadia

## Tema și justificarea ei

Tema proiectului este prezentarea jocurilor video retro din anii 1980 și începutul anilor 1990. Retrocadia explică de ce aceste jocuri sunt interesante și astăzi, cum au evoluat consolele și cum poate începe un jucător nou.

Tema permite îmbinarea unui hobby cu informații istorice, descrieri, imagini și comparații. Jocurile selectate ilustrează genuri diferite: platformer și puzzle, cu ritmuri și moduri de joc diferite. Fontul pixel și capturile reale susțin tema fără a îngreuna citirea textului.

**Aprobarea temei de către profesor:** de completat de elev.

## Structura site-ului

Site-ul conține 13 pagini HTML distincte, un fișier CSS comun și un mic script pentru tema vizuală. Cele patru pagini principale sunt:

1. **Acasă — `index.html`:** prezintă tema, recomandă trei jocuri, explică atractivitatea jocurilor retro și oferă un tabel de recomandări.
2. **Jocuri — `games/index.html`:** conține trei articole cu capturi, informații despre ediții, elemente de gameplay și sfaturi. Un tabel compară platforma, genul și numărul de jucători.
3. **Istorie — `pages/istorie.html`:** prezintă șase repere cronologice, compară trei console și explică influența limitărilor tehnice asupra designului.
4. **Ghid — `pages/ghid.html`:** propune pași de început, compară metodele de acces la jocuri și oferă întrebări frecvente și surse.

Colecțiile sunt extinse prin trei profiluri individuale de joc și trei profiluri de consolă. Pagina `consoles/index.html` permite alegerea unei console. Profilurile explică mecanici, comenzi, ediții, componente hardware și recomandări practice, cu legături între jocuri și console.

`pages/propune.html` conține un formular, iar `pages/multumim.html` este pagina de confirmare. Astfel, proiectul are 13 pagini în total.

Fiecare pagină folosește aceeași navigare și același subsol. Linkurile sunt relative, astfel încât site-ul poate fi deschis atât local, cât și pe un server static.

Doar `index.html` se află în rădăcină. Directorul `games/` conține colecția și profilurile jocurilor, `consoles/` conține colecția și profilurile consolelor, iar `pages/` conține istoria, ghidul, formularul și confirmarea. Fișierele CSS, scriptul, imaginile și fontul rămân în directoarele lor comune.

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
| `video`, `audio`, `source`                       | Playere native pentru clipul de turneu și melodia Korobeiniki             |
| `iframe`                                        | Gameplay YouTube cu titlu accesibil și link către original                 |

Fiecare pagină are un singur `h1`. Paginile de conținut folosesc subtitluri, paragrafe, liste, imagini și tabele cu mai multe rânduri și coloane. Formularul adaugă `form`, `fieldset`, `legend`, `label`, `input`, `select`, `option`, `textarea` și `button`.

## Stilurile CSS

Fișierul `css/style.css` este legat în toate paginile prin `link rel="stylesheet"`. Stilurile sunt separate de conținutul HTML.

- **Culori:** fond crem în modul luminos; fond verde foarte închis în modul întunecat. Variabilele CSS schimbă textul, suprafețele, tabelele și câmpurile de formular fără duplicarea layoutului.
- **Tipografie:** fontul local Press Start 2P pentru identitate și etichete; Arial și fonturi de sistem pentru textul lung.
- **Layout:** CSS Grid pentru secțiunile în coloane și Flexbox pentru meniu, butoane și subsol.
- **Spațiere:** o lățime maximă comună, margini consistente și distanțe între secțiuni.
- **Responsive:** media queries adaptează coloanele, navigarea extinsă, profilurile și formularul la ecrane mici. Tabelele pot fi derulate orizontal în propriul container.
- **Imagini:** `image-rendering: pixelated` păstrează aspectul pixelilor; `object-fit: contain` evită tăierea capturilor.
- **Accesibilitate:** link de salt la conținut, contur la focalizare, indicarea paginii curente prin `aria-current`, texte alternative, regiuni de tabel focalizabile și suport pentru `prefers-reduced-motion`.

## Funcționalitate

Nu există framework-uri, biblioteci sau dependențe pentru rulare. Linkurile, ancorele, întrebările, playerele media și formularul folosesc comportamentul nativ HTML.

Singurul script, `js/theme.js`, alege inițial tema sistemului, schimbă tema la apăsarea butonului și păstrează alegerea în `localStorage`. Dacă stocarea este indisponibilă, schimbarea temei continuă să funcționeze pe pagina curentă. Fără JavaScript, CSS aplică tema sistemului.

Formularul are câmpuri pentru poreclă, email, titlu, platformă, an opțional și motiv. Browserul verifică obligația completării, formatul emailului, lungimile textelor, un titlu care nu conține doar spații și un an întreg între 1970 și 2026. `:user-invalid` oferă stiluri pentru erori.

Trimiterea validă folosește `action="multumim.html"` și `method="get"`. Câmpurile nu au atributul `name`, pentru a nu serializa date personale în adresă. Formularul nu salvează propunerea și nu contactează o echipă.

Imaginile și fontul sunt locale. Paginile, capturile și fontul funcționează fără internet. Playerele video/audio și resursele externe necesită internet.

## Proveniența informațiilor și a imaginilor

Capturile sunt din edițiile indicate în pagini și provin din proiectul public libretro-thumbnails. Fișierul `assets/SOURCES.md` înregistrează sursele exacte. Jocurile și imaginile aparțin titularilor lor.

Resursele din pagina Ghid includ The Strong National Museum of Play, Nintendo Switch Online, pagina oficială despre Tetris și RetroArch. Anii diferiți de lansare sunt explicați atunci când o ediție a apărut în regiuni sau pe platforme diferite.

## Video și audio

Fiecare dintre cele șase profiluri are un `iframe` YouTube cu gameplay din ediția prezentată. Atributul `title` identifică înregistrarea, `loading="lazy"` amână încărcarea, iar `details` și `summary` permit deschiderea playerului fără script suplimentar. Există și link către YouTube.

Pagina Tetris include un element `video` cu `source type="video/webm"`, `controls`, `playsinline`, `poster` și `preload="none"`. Filmarea lui Aptiz712 de la CTWC 2023 prezintă tehnica rolling, are descriere vizuală și atribuire CC BY 4.0. Tetris și Game Boy includ `audio`, cu `source type="audio/ogg"` și controale native, pentru interpretarea Korobeiniki de Maxime Lorant, sub CC BY-SA 4.0. Fișierele sunt nemodificate și redate direct de pe Wikimedia.

CSS păstrează raportul 16:9 pentru video și iframe, adaptează lățimea playerelor și folosește culorile temei pentru carduri, explicații și credite. Niciun player nu pornește automat. Sursele și licențele sunt în `assets/SOURCES.md` și lângă playere.

## Verificări efectuate

- Toate cele 13 pagini trec validarea HTML fără erori sau avertismente. Au fost verificate 371 de referințe locale, cu 44 de destinații distincte, fără fișiere sau ancore lipsă.
- Au fost verificate 78 de combinații de pagină, temă și lățime: 13 pagini × 2 teme × 3 lățimi (1440, 390 și 320 de pixeli). Imaginile locale se încarcă, iar pagina și playerele nu depășesc lățimea disponibilă.
- Cele 26 de audituri axe-core pentru regulile WCAG A și AA verificate nu au găsit încălcări. Rezultatul nu certifică accesibilitatea completă a site-ului sau a materialelor externe.
- Colecțiile au câte trei articole. Navigarea între jocuri și console, memorarea temei și redirecționarea formularului au fost verificate când site-ul este servit din `/retrocadia/`.
- Fără JavaScript, formularul respinge câmpurile obligatorii goale și emailul incorect; o completare validă deschide `pages/multumim.html` fără date personale în URL. Secțiunile video se deschid și fără JavaScript.
- Titlurile și edițiile înregistrărilor au fost verificate în sursele publice, iar autorii și licențele fișierelor Wikimedia sunt documentate. Redarea efectivă a YouTube și Wikimedia nu a putut fi verificată în mediul de lucru, deoarece politica lui de rețea blochează aceste servicii.

## Plan pentru prezentarea orală

1. Prezintă tema și motivul alegerii ei.
2. Arată paginile principale și deschide un profil de joc și unul de consolă.
3. Explică o secțiune semantică, o listă, o imagine și un tabel.
4. Deschide o întrebare din Ghid și explică de ce nu necesită JavaScript.
5. Arată legătura cu fișierul CSS și două exemple de stiluri.
6. Micșorează fereastra browserului pentru a demonstra adaptarea la mobil.
7. Schimbă tema și navighează pe altă pagină pentru a demonstra memorarea alegerii.
8. Încearcă un formular incomplet, apoi completează-l corect și arată confirmarea.
9. Deschide un clip de gameplay și arată controalele video și audio.
10. Explică validarea nativă HTML și motivul pentru care datele nu sunt trimise.
11. Prezintă sursele și diferența dintre conținutul HTML, stilizarea CSS și rolul limitat al scriptului.
