# Raport final — Retrocadia

## Tema și justificarea ei

Tema proiectului este prezentarea jocurilor video retro din anii 1980 și începutul anilor 1990. Retrocadia explică de ce aceste jocuri sunt interesante și astăzi, cum au evoluat consolele și cum poate începe un jucător nou.

Tema permite îmbinarea unui hobby cu informații istorice, descrieri, imagini și comparații. Jocurile selectate ilustrează genuri diferite: platformer, aventură, puzzle și lupte. Fontul pixel și capturile reale susțin tema fără a îngreuna citirea textului.

**Aprobarea temei de către profesor:** de completat de elev.

## Structura site-ului

Site-ul conține 18 pagini HTML distincte, un fișier CSS comun și un mic script pentru tema vizuală. Cele patru pagini principale sunt:

1. **Acasă — `index.html`:** prezintă tema, recomandă trei jocuri, explică atractivitatea jocurilor retro și oferă un tabel de recomandări.
2. **Jocuri — `jocuri.html`:** conține șase articole cu capturi, informații despre ediții, elemente de gameplay și sfaturi. Un tabel compară platforma, genul și numărul de jucători.
3. **Istorie — `istorie.html`:** prezintă șase repere cronologice, compară patru console și explică influența limitărilor tehnice asupra designului.
4. **Ghid — `ghid.html`:** propune pași de început, compară metodele de acces la jocuri și oferă întrebări frecvente și surse.

Colecțiile sunt extinse prin șase profiluri individuale de joc și cinci profiluri de consolă. Pagina `console.html` permite alegerea unei console. Profilurile explică mecanici, comenzi, ediții, componente hardware și recomandări practice, cu legături între jocuri și console.

`propune.html` conține un formular, iar `multumim.html` este pagina de confirmare. Astfel, proiectul are 18 pagini în total.

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

Nu există framework-uri, biblioteci sau dependențe pentru rulare. Linkurile, ancorele, întrebările și formularul folosesc comportamentul nativ HTML.

Singurul script, `js/theme.js`, alege inițial tema sistemului, schimbă tema la apăsarea butonului și păstrează alegerea în `localStorage`. Dacă stocarea este indisponibilă, schimbarea temei continuă să funcționeze pe pagina curentă. Fără JavaScript, CSS aplică tema sistemului.

Formularul are câmpuri pentru poreclă, email, titlu, platformă, an opțional și motiv. Browserul verifică obligația completării, formatul emailului, lungimile textelor, un titlu care nu conține doar spații și un an întreg între 1970 și 2026. `:user-invalid` oferă stiluri pentru erori.

Trimiterea validă folosește `action="multumim.html"` și `method="get"`. Câmpurile nu au atributul `name`, pentru a nu serializa date personale în adresă. Formularul nu salvează propunerea și nu contactează o echipă.

Imaginile și fontul sunt locale. Site-ul funcționează fără internet, iar sursele externe se deschid prin linkuri obișnuite.

## Proveniența informațiilor și a imaginilor

Capturile sunt din edițiile indicate în pagini și provin din proiectul public libretro-thumbnails. Fișierul `assets/SOURCES.md` înregistrează sursele exacte. Jocurile și imaginile aparțin titularilor lor.

Resursele din pagina Ghid includ The Strong National Museum of Play, Nintendo Switch Online, pagina oficială despre Tetris și RetroArch. Anii diferiți de lansare sunt explicați atunci când o ediție a apărut în regiuni sau pe platforme diferite.

## Verificări efectuate

- Toate cele 18 pagini au trecut validarea HTML fără erori sau avertismente; scriptul de temă a trecut verificarea sintaxei.
- Au fost verificate 144 de combinații: 18 pagini × 2 teme × 4 lățimi (1440, 768, 390 și 320 de pixeli), fără imagini lipsă, erori de script sau depășire orizontală a paginii.
- Cele 48 de destinații locale distincte, inclusiv ancorele, sunt valide.
- Cele 36 de audituri automate axe-core pentru criteriile WCAG A și AA verificate nu au găsit probleme. Verificările automate nu reprezintă o certificare completă de accesibilitate.
- Tema respectă inițial sistemul, folosește pictograme lună/soare cu etichetă accesibilă, se schimbă prin mouse sau tastatură și se păstrează după navigare și reîncărcare. Comutarea funcționează și dacă stocarea locală este indisponibilă.
- Fără JavaScript, CSS păstrează tema sistemului, iar formularul validează și se trimite corect.
- Formularul respinge câmpurile obligatorii goale, nume și titluri prea scurte sau formate numai din spații, emailuri incorecte, ani în afara limitelor sau neîntregi, explicații prea scurte, lipsa platformei.
- O completare validă deschide `multumim.html`; valorile personale nu apar în URL.
- Linkul de salt la conținut este primul element focalizat. Tabelele pot fi focalizate pentru derulare cu tastatura, iar întrebările din Ghid se deschid și se închid corect.
- Erorile formularului sunt vizibile și în modul întunecat fără JavaScript. Toate imaginile și fontul sunt locale, iar paginile nu conțin stiluri sau scripturi inline.

## Plan pentru prezentarea orală

1. Prezintă tema și motivul alegerii ei.
2. Arată paginile principale și deschide un profil de joc și unul de consolă.
3. Explică o secțiune semantică, o listă, o imagine și un tabel.
4. Deschide o întrebare din Ghid și explică de ce nu necesită JavaScript.
5. Arată legătura cu fișierul CSS și două exemple de stiluri.
6. Micșorează fereastra browserului pentru a demonstra adaptarea la mobil.
7. Schimbă tema și navighează pe altă pagină pentru a demonstra memorarea alegerii.
8. Încearcă un formular incomplet, apoi completează-l corect și arată confirmarea.
9. Explică validarea nativă HTML și motivul pentru care datele nu sunt trimise.
10. Prezintă sursele și diferența dintre conținutul HTML, stilizarea CSS și rolul limitat al scriptului.
