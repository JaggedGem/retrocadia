# Studiu Individual Nr. 1 — Retrocadia

## Tema și justificarea

Retrocadia este un ghid despre jocurile video retro și consolele din anii 1980–1990. Trei exemple — Super Mario Bros., Tetris și Sonic the Hedgehog — permit compararea mecanicilor, imaginilor, sunetului și platformelor. Tema leagă un hobby de informații istorice și de observații despre design.

**Aprobarea temei de către profesor:** de completat de elev și profesor. Proiectul nu presupune că această aprobare a fost deja obținută.

## Corespondența cu cerințele

| Cerință | Implementare |
| --- | --- |
| Cel puțin trei pagini diferite | 14 pagini: index, două colecții, șase profiluri, cronologie, ghid, media, formular și confirmare |
| `h1`, `h2`, `h3`, paragrafe | Fiecare pagină are un singur `h1` și subtitluri cu text explicativ |
| Liste | Fiecare pagină are liste în conținut; meniul comun este un `ul` |
| Imagini cu descriere | Fiecare pagină are o imagine în conținut, cu `alt`; simbolul decorativ al siglei are `alt` gol |
| Tabele cu 2–3 rânduri și coloane | Fiecare pagină are cel puțin un tabel cu trei rânduri de date și trei coloane; antetele folosesc `scope` și tabelul are `caption` |
| Linkuri funcționale | Legături relative între pagini, ancore și resurse externe cu atribuire |
| Navigare comună | Același meniu cu șapte destinații pe toate paginile; `aria-current` marchează secțiunea curentă |
| Elemente semantice | `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer` |
| HTML separat de CSS | Paginile sunt `.html`; stilurile sunt exclusiv în `css/style.css` |
| Media variată | `picture`, `img`, `video`, `audio`, `source`, `track`, `iframe`, `svg`, `object`, `embed` în pagina media |
| Puțin JavaScript | Un singur script mic pentru tema vizuală; funcțiile principale folosesc HTML și CSS |

## Structura site-ului

`index.html` este un index de jocuri. Selectarea unui titlu arată captura, o descriere și date esențiale. Linkul fișei deschide un articol cu poveste, reguli, comenzi, sfaturi și gameplay.

`games/` conține colecția și cele trei profiluri de joc. `consoles/` conține colecția și profilurile NES, Mega Drive și Game Boy. `pages/` reunește cronologia, ghidul, pagina media, formularul și confirmarea. Imaginile, fonturile și materialele audio/video au directoare comune. Toate paginile folosesc aceleași stiluri și aceeași navigare.

## De ce această interfață

Site-ul este organizat ca un atlas de consultat. Conținutul apare imediat: un index, o captură și o fișă. Navigarea laterală pe desktop lasă zona centrală pentru lectură. Pe mobil, meniul se așază pe rânduri, iar indexul și fișa se suprapun vertical.

Paleta folosește alb ușor verzui, cerneală verde închis și o nuanță vegetală pentru elementul selectat. Titlurile Georgia sunt mici și distincte de textul Archivo. Spațiul, liniile fine și ierarhia textului separă informațiile; nu sunt folosite degradeuri sau elemente decorative care imită controale funcționale.

CSS Grid organizează indexul, fișele și articolele. Flexbox aliniază meniul mobil și datele scurte. Media queries adaptează coloanele. Tabelele se derulează în propriul container. `image-rendering: pixelated` păstrează claritatea capturilor, iar `object-fit: contain` evită tăierea lor.

## Interacțiuni fără JavaScript

Indexul folosește un `fieldset`, o `legend`, trei `input type="radio"` și etichete asociate. CSS `:checked` marchează selecția, iar `:has()` afișează fișa corespunzătoare. Browserul gestionează tastatura și starea controalelor; este necesar un browser modern cu suport pentru `:has()`.

Întrebările, înregistrările și explicațiile suplimentare folosesc `details` și `summary`. Playerele au controale native. Formularul se validează prin atribute HTML. Singurul script, `js/theme.js`, schimbă și memorează tema; fără el, CSS urmează preferința sistemului.

## Media și proveniență

| Elemente | Exemplu și rol |
| --- | --- |
| `picture`, `source`, `img` | Captura jocului, cu format declarat și imagine de rezervă |
| `video`, `source` | Animație MP4 locală de 8 secunde despre completarea unei linii |
| `track` | Patru secvențe de subtitrări românești în fișierul VTT |
| `audio`, `source` | Motiv monofonic original de 6 secunde, în format WAV |
| `svg`, `title`, `desc` | Diagramă accesibilă a unei unde dreptunghiulare |
| `object`, `embed` | Schema statică SVG, cu alternative și link separat |
| `iframe` | Gameplay YouTube identificat prin `title`, cu link la original |

Animația, schema, subtitrările și motivul audio au fost realizate pentru acest ghid și sunt etichetate ca demonstrații. Animația nu este prezentată drept gameplay comercial. Are o descriere textuală suplimentară și nu pornește automat. Materialele locale pot fi folosite fără internet atunci când site-ul este servit local. `serve.py` este un utilitar opțional Python, fără dependențe, care oferă suport HTTP Range pentru derularea în timp și servește subtitrările; nu este un backend al site-ului și nu este necesar pe o găzduire statică.

Capturile reale provin din libretro-thumbnails. Înregistrările din profiluri provin din YouTube și Wikimedia și își păstrează atribuirile. Sursele exacte, autorii și licențele sunt în `assets/SOURCES.md`. Fontul Archivo are licența SIL OFL inclusă în proiect.

## Formularul

Câmpurile au etichete, indicații și validare nativă: `required`, `type="email"`, `minlength`, `maxlength`, `pattern`, `min`, `max` și `step`. Erorile sunt evidențiate prin `:user-invalid`. O completare validă deschide `pages/multumim.html`.

Este un exercițiu fără backend sau salvare. Câmpurile nu au atributul `name`, astfel încât informațiile personale nu sunt serializate în URL. Caracterul demonstrativ este explicat înainte de completare și pe confirmare.

## Accesibilitate

Linkul de salt duce la `main`. Focusul este vizibil. Controalele au nume accesibile și etichete. Selecția indexului nu se bazează doar pe culoare: are stare radio, marcaj lateral și text. Tabelele au antete și legende, iar regiunile cu derulare pot fi focalizate. Imaginile au descrieri, video are subtitrări și transcriere, iar mișcarea automată nu este folosită.

## Verificări

- Toate cele 14 pagini trec verificarea Nu HTML Checker 26.10.12 fără erori sau avertismente.
- Au fost verificate 112 combinații: 14 pagini × 2 teme × 4 lățimi (1440, 900, 390 și 320 px), fără depășirea lățimii paginii sau imagini locale lipsă.
- Toate referințele locale și ancorele au fost verificate. Nu au apărut erori JavaScript.
- Cele 31 de audituri axe-core 4.14.0, pentru regulile WCAG A și AA verificate, nu au găsit încălcări automate după corectarea contrastului. Acest rezultat nu certifică accesibilitatea completă; subtitrarea videoclipului extern de turneu rămâne de verificat manual.
- Cu JavaScript dezactivat: selecția prin tastatură și etichete, navigarea, întrebările și validarea formularului funcționează. O completare validă deschide confirmarea fără date personale în URL.
- Tema aleasă rămâne activă după navigare și reîncărcare.
- Videoclipul local de 8 secunde și sunetul de 6 secunde sunt decodate și redate; derularea video în timp este verificată pe serverul local cu HTTP Range; cele patru secvențe VTT se încarcă, iar schema SVG se deschide. Înregistrările externe depind de internet și nu au fost incluse în testele de redare.

## Plan de prezentare

1. Justific tema și arăt indexul, apoi selectez un joc cu mouse-ul și cu tastatura.
2. Deschid o fișă și explic titlurile, paragrafele, lista, imaginea, tabelul și linkurile.
3. Arăt navigarea comună și structura directoarelor.
4. Micșorez fereastra pentru a demonstra adaptarea layoutului.
5. În pagina media, redau animația, arăt subtitrările, deschid schema și ascult motivul audio.
6. Prezint o înregistrare încorporată și sursa ei.
7. Încerc formularul incomplet, apoi unul valid; explic de ce nu salvează date.
8. Arăt legătura dintre fișierele HTML și CSS și rolul limitat al scriptului de temă.
