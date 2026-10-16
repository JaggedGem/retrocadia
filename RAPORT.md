# Studiu Individual Nr. 1 — Retrocadia

## Tema și justificarea

Retrocadia prezintă jocuri video retro și consolele din anii 1980–1990. Super Mario Bros., Tetris și Sonic the Hedgehog ilustrează mecanici și ritmuri diferite. Tema permite compararea imaginilor, sunetului, regulilor și hardware-ului, pornind de la un hobby și informații istorice.

**Aprobarea temei de către profesor:** de completat de elev și profesor.

## Corespondența cu cerințele

| Cerință | Implementare |
| --- | --- |
| Minimum trei pagini | Nouă pagini: două colecții, șase profiluri și formularul |
| Titluri și paragrafe | Un singur `h1` pe fiecare pagină; `h2`, `h3` și paragrafe în conținut |
| Liste | Liste în conținut și `ul` pentru navigarea comună |
| Imagini descrise | Imagini în conținut, cu `alt`; miniaturile decorative asociate unui nume au `alt` gol |
| Tabele | Fiecare pagină are minimum trei rânduri de date și trei coloane; `caption` și `scope` explică structura |
| Linkuri | Legături între pagini, ancore și surse externe |
| Meniu comun | Jocuri, Console și Propune un joc; pagina sau secțiunea curentă este marcată |
| Semantică | `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer` |
| Separarea HTML/CSS | Fișiere `.html` și un fișier comun `css/style.css` |
| Media variată | `picture`, `img`, `audio`, `video`, `source`, `track`, `iframe`, `svg`, `object`, `embed` |
| JavaScript redus | Un script opțional pentru temă; interacțiunile principale folosesc HTML și CSS |

## Organizarea site-ului

`index.html` este singura colecție de jocuri. Selectorul afișează captura, datele și legătura către consola potrivită. Întrebările și sursele se află în aceeași pagină.

`consoles/index.html` reunește cele trei console, tabelul de comparație, cronologia, opțiunile prin care se poate juca și întrebările hardware. În `games/` și `consoles/` rămân câte trei fișe detaliate, cu reguli sau hardware, liste, tabele și materiale media.

`pages/propune.html` conține formularul și confirmarea. Paginile separate de ghid, media, cronologie, confirmare și colecția duplicată de jocuri au fost eliminate. Informațiile utile au fost mutate în contextul potrivit, iar legăturile au fost actualizate.

## Direcția vizuală și imaginile

Interfața folosește tipografie Archivo îndrăzneață, fundal crem, cerneală bleumarin și accente legate de joc: coral, albastru și galben. Contururile și umbrele ferme sugerează etichetele și ambalajele din epocă. Nu există degradeuri sau un banner de promovare; colecția este primul conținut util.

Miniaturile fac selectorul ușor de recunoscut. Captura mare este și link spre fișă. Imaginile de joc își păstrează proporțiile; `image-rendering: pixelated` păstrează claritatea pixelilor. Consolele au ilustrații SVG originale ale hardware-ului, cu legende care precizează că sunt desene, nu fotografii. Astfel, o pagină despre consolă nu mai prezintă o captură de joc ca imagine principală.

CSS Grid și Flexbox organizează conținutul. Media queries rearanjează selectorul, meniul, fișele și formularul. Tabelele pot fi derulate în propriul container. Culoarea, conturul, punctul de selecție și starea radio indică împreună jocul ales.

## Interacțiuni native

Selectorul folosește `fieldset`, `legend`, radio și etichete asociate. CSS `:checked` marchează alegerea, iar `:has()` afișează fișa. Browserul gestionează tastele săgeți și starea controlului. Este necesar un browser modern.

Întrebările, cronologia și media suplimentară folosesc `details` și `summary`. Playerele au controale native și nu pornesc automat. Scriptul `js/theme.js` schimbă și memorează doar tema; fără el, CSS urmează preferința sistemului.

## Formularul într-o singură pagină

Etichetele, instrucțiunile și atributele `required`, `type="email"`, `minlength`, `maxlength`, `pattern`, `min`, `max` și `step` oferă validare nativă. CSS `:user-invalid` semnalează erorile.

După o completare validă, formularul navighează la `propune.html#confirmare`. CSS `:target` arată mesajul și ascunde formularul. O legătură permite revenirea la o completare nouă. Nu este nevoie de o pagină separată sau de JavaScript.

Este un exercițiu fără backend sau salvare. Câmpurile nu au `name`, astfel încât valorile personale nu sunt serializate în URL. Acest lucru este explicat înainte și după completare.

## Media, în context

| Elemente | Utilizare |
| --- | --- |
| `picture`, `source`, `img` | Capturile din selector, cu format declarat și imagine de rezervă |
| `video`, `source` | Animația locală de 8 secunde din fișa Tetris și clipul extern de turneu |
| `track` | Patru secvențe de subtitrări românești pentru demonstrația locală |
| `audio`, `source` | Korobeiniki în fișele Tetris și Game Boy, cu atribuire |
| `object`, `embed` | Schema statică SVG din demonstrația Tetris, cu alternative și link separat |
| `iframe` | Înregistrări de gameplay în cele șase profiluri, cu titlu și sursă |
| `svg` | Simboluri și ilustrații hardware originale, fără dependințe externe |

Animația și schema sunt demonstrații originale, etichetate clar; nu sunt prezentate drept gameplay comercial. Există subtitrări și descriere textuală. Serverul local opțional `serve.py` oferă HTTP Range pentru derularea video și servește subtitrările; nu este un backend al site-ului.

Capturile reale provin din libretro-thumbnails. YouTube și Wikimedia necesită internet și își păstrează atribuirile. Sursele, autorii și licențele sunt în `assets/SOURCES.md`. Archivo are licența SIL OFL inclusă în proiect.

## Accesibilitate și verificări

Link de salt la conținut, focus vizibil, nume accesibile, etichete asociate și navigare prin tastatură. Imaginile au descrieri, tabelele au legende și antete, iar preferința pentru mișcare redusă este respectată. Demonstrația video are subtitrări și transcriere. Serviciile media externe necesită verificare manuală și internet.

- Toate cele nouă pagini au fost verificate cu Nu HTML Checker, fără erori sau avertismente.
- 72 de combinații în Chromium: 9 pagini × 2 teme × 4 lățimi (1440, 900, 390 și 320 px), fără depășirea lățimii sau imagini locale lipsă.
- 22 de audituri axe-core pentru regulile WCAG A și AA verificate, fără încălcări automate. Rezultatul nu certifică accesibilitatea completă a site-ului și a serviciilor externe.
- Referințele locale, ancorele, ID-urile, etichetele și cele trei destinații ale meniului au fost verificate. Nu au apărut erori JavaScript.
- Capturile principale păstrează raportul original de aspect, iar fiecare selecție afișează jocul, ediția și consola corectă.
- Cu JavaScript dezactivat, selectorul funcționează prin tastatură, întrebările se deschid, iar formularul validează și afișează confirmarea în aceeași pagină, fără date personale în URL.
- Demonstrația locală Tetris se redă și poate fi derulată; durata este de 8 secunde și cele patru secvențe VTT se încarcă. Schema SVG se deschide. Înregistrările externe nu au fost incluse în testele de redare.

## Plan de prezentare

1. Justific tema și selectez un joc cu mouse-ul și tastele săgeți.
2. Deschid o fișă și explic titlurile, paragrafele, imaginea, lista, tabelul și linkurile.
3. Arăt colecția de console, ilustrațiile și cronologia integrată.
4. Micșorez fereastra pentru a demonstra adaptarea layoutului și a imaginilor.
5. Deschid demonstrația Tetris, subtitrările, schema, un player audio și un gameplay încorporat.
6. Completez un formular invalid, apoi unul valid; arăt confirmarea în aceeași pagină și explic lipsa salvării.
7. Arăt separarea HTML/CSS și rolul limitat al scriptului de temă.
