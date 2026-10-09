# Retrocadia

Un site educațional în limba română despre jocurile retro, construit numai cu HTML și CSS. Fără JavaScript, framework-uri, biblioteci de interfață sau proces de build.

Deschide `index.html` în browser. Toate paginile, imaginile și fontul funcționează local, fără conexiune la internet. Doar linkurile către resurse externe necesită internet.

Pentru un server local opțional, din directorul proiectului:

```sh
python3 -m http.server 8000
```

Apoi deschide `http://localhost:8000`.

## Fișiere

| Fișier               | Rol                                                          |
| -------------------- | ------------------------------------------------------------ |
| `index.html`         | Introducere, jocuri recomandate și tabel de orientare        |
| `jocuri.html`        | Șase jocuri, capturi, descrieri, sfaturi și comparație       |
| `istorie.html`       | Cronologie și prezentarea a patru console                    |
| `ghid.html`          | Primii pași, opțiuni de joc, întrebări și surse              |
| `css/style.css`      | Toate stilurile și adaptările pentru mobil                   |
| `assets/images/`     | Capturi reale din jocuri                                     |
| `assets/favicon.svg` | Simbolul site-ului                                           |
| `fonts/`             | Fontul local Press Start 2P și licența lui                   |
| `RAPORT.md`          | Explicația temei, structurii și stilurilor pentru prezentare |
| `assets/SOURCES.md`  | Proveniența exactă a imaginilor                              |

Meniul comun include starea paginii curente. Linkurile din colecție duc la articolele corespunzătoare, iar întrebările folosesc elementele HTML native `details` și `summary`.

## Surse

Capturile provin din [libretro-thumbnails](https://github.com/libretro-thumbnails); sursele individuale sunt în `assets/SOURCES.md` și în pagina Ghid. Drepturile asupra jocurilor și imaginilor aparțin titularilor respectivi. Fontul [Press Start 2P](https://github.com/google/fonts/tree/main/ofl/pressstart2p) de CodeMan38 este distribuit sub SIL Open Font License; licența este inclusă în `fonts/OFL.txt`.
