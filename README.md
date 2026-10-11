# Retrocadia

Un site educațional în limba română despre jocurile retro, construit cu HTML și CSS și un mic script JavaScript pentru memorarea temei. Fără framework-uri, biblioteci de interfață sau proces de build.

Deschide `index.html` în browser. Toate paginile, imaginile și fontul funcționează local, fără conexiune la internet. Doar linkurile către resurse externe necesită internet.

Pentru un server local opțional, din directorul proiectului:

```sh
python3 -m http.server 8000
```

Apoi deschide `http://localhost:8000`.

## Fișiere

Doar pagina principală `index.html` se află în rădăcină. Colecția și profilurile jocurilor sunt în `games/`, cele ale consolelor în `consoles/`, iar paginile generale și formularul în `pages/`. Fiecare colecție are propriul `index.html`.

| Fișier               | Rol                                                          |
| -------------------- | ------------------------------------------------------------ |
| `index.html`         | Introducere, jocuri recomandate și tabel de orientare        |
| `games/index.html`   | Șase jocuri, capturi, descrieri, sfaturi și comparație       |
| `pages/istorie.html` | Cronologie și prezentarea a patru console                    |
| `pages/ghid.html`    | Primii pași, opțiuni de joc, întrebări și surse              |
| `css/style.css`      | Toate stilurile și adaptările pentru mobil                   |
| `assets/images/`     | Capturi reale din jocuri                                     |
| `assets/favicon.svg` | Simbolul site-ului                                           |
| `fonts/`             | Fontul local Press Start 2P și licența lui                   |
| `RAPORT.md`          | Explicația temei, structurii și stilurilor pentru prezentare |
| `assets/SOURCES.md`  | Proveniența exactă a imaginilor                              |

Site-ul are 18 pagini: cele patru pagini inițiale, o colecție de console, șase profiluri de joc, cinci profiluri de consolă, un formular și o confirmare.

| Pagini și fișiere noi                                                                                                                                                                 | Rol                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `games/super-mario-bros.html`, `games/the-legend-of-zelda.html`, `games/tetris.html`, `games/super-mario-world.html`, `games/sonic-the-hedgehog.html`, `games/street-fighter-ii.html` | Profiluri de joc cu comenzi, mecanici, sfaturi și context        |
| `consoles/index.html`                                                                                                                                                                 | Colecția celor cinci console                                     |
| `consoles/nes.html`, `consoles/snes.html`, `consoles/mega-drive.html`, `consoles/game-boy.html`, `consoles/atari-2600.html`                                                           | Istorie, hardware, jocuri și verificări pentru consola originală |
| `pages/propune.html`                                                                                                                                                                  | Formular de recomandare cu validare HTML nativă                  |
| `pages/multumim.html`                                                                                                                                                                 | Pagina deschisă după o completare validă                         |
| `js/theme.js`                                                                                                                                                                         | Alegerea și memorarea modului luminos sau întunecat              |

Meniul comun include starea paginii curente. Linkurile din colecție duc la articolele corespunzătoare, iar întrebările folosesc elementele HTML native `details` și `summary`.

## Tema și formularul

Tema inițială urmează preferința sistemului. Butonul cu pictograme lună/soare schimbă tema și o memorează local pentru navigare și reîncărcare. Culorile sunt definite în CSS. Dacă JavaScript este dezactivat, site-ul urmează în continuare preferința sistemului prin `prefers-color-scheme`; butonul este ascuns.

Formularul folosește `required`, `type="email"`, `minlength`, `maxlength`, `pattern`, `min`, `max` și `step`. Etichetele și textele de ajutor sunt asociate câmpurilor, iar stilurile `:user-invalid` semnalează erorile după interacțiune. Validarea și trimiterea funcționează fără JavaScript.

În `pages/propune.html`, `action="multumim.html"` și `method="get"` deschid confirmarea `pages/multumim.html` după validare. Câmpurile nu au atributul `name`, astfel încât valorile personale nu sunt incluse în URL și nu sunt trimise unui server. Este un formular demonstrativ, fără backend sau salvare.

## Surse

Capturile provin din [libretro-thumbnails](https://github.com/libretro-thumbnails); sursele individuale sunt în `assets/SOURCES.md` și în pagina Ghid. Drepturile asupra jocurilor și imaginilor aparțin titularilor respectivi. Fontul [Press Start 2P](https://github.com/google/fonts/tree/main/ofl/pressstart2p) de CodeMan38 este distribuit sub SIL Open Font License; licența este inclusă în `fonts/OFL.txt`.
