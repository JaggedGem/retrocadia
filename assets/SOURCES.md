# Sursele imaginilor și ale materialelor media

Capturi reale din edițiile prezentate, descărcate din [libretro-thumbnails](https://github.com/libretro-thumbnails). Imaginile nu sunt generate și nu au fost modificate. Numele locale au fost simplificate pentru linkuri ușor de citit.

| Fișier local                    | Ediție                                       | Sursă exactă                                                                                                                                                     |
| ------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `images/super-mario-bros.png`   | Super Mario Bros. (World), NES               | [PNG](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_Entertainment_System/master/Named_Snaps/Super%20Mario%20Bros.%20%28World%29.png) |
| `images/tetris.png`             | Tetris (USA), Nintendo NES                   | [PNG](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_Entertainment_System/master/Named_Snaps/Tetris%20%28USA%29.png)                  |
| `images/sonic-the-hedgehog.png` | Sonic The Hedgehog (USA, Europe), Mega Drive | [PNG](https://raw.githubusercontent.com/libretro-thumbnails/Sega_-_Mega_Drive_-_Genesis/master/Named_Snaps/Sonic%20The%20Hedgehog%20%28USA%2C%20Europe%29.png)   |

Drepturile asupra jocurilor și imaginilor aparțin Nintendo, Sega și celorlalți titulari. Capturile ilustrează un proiect educațional și nu sunt prezentate drept creații originale Retrocadia.

Simbolul `favicon.svg` a fost desenat pentru acest site. Fontul existent `PressStart2P-Regular.ttf` a fost păstrat; licența lui este în `fonts/OFL.txt`, iar sursa este [Google Fonts / CodeMan38](https://github.com/google/fonts/tree/main/ofl/pressstart2p).

## Capturi suplimentare pentru profilurile de console

- `images/tetris-game-boy.png`: Tetris (World) (Rev 1), Nintendo Game Boy — [sursa PNG](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Game_Boy/master/Named_Snaps/Tetris%20%28World%29%20%28Rev%201%29.png).

Profilurile consolelor folosesc capturi din jocurile respective, identificate prin legende. Aceste imagini nu sunt prezentate ca fotografii de hardware.

## Video și audio

Înregistrările audio și video externe din profiluri sunt redate din sursele publice originale; nu sunt copii locale. Demonstrațiile locale noi sunt documentate separat mai jos. Linkurile directe rămân disponibile lângă fiecare player. Niciun player nu pornește automat; fișierele audio/video folosesc `preload="none"`, iar iframe-urile YouTube sunt în secțiuni `details` și folosesc `loading="lazy"`.

| Material                                                   | Sursă și autor                                                                                                                                                                                | Utilizare                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Super Mario Bros., NES                                     | [nesguide / YouTube](https://www.youtube.com/watch?v=ia8bhFoqkVE)                                                                                                                             | Profilurile Mario și NES                  |
| Sonic the Hedgehog, Mega Drive / Genesis, 1991             | [NintendoComplete / YouTube](https://www.youtube.com/watch?v=MTBGIo7HXis)                                                                                                                     | Profilurile Sonic și Mega Drive           |
| Tetris, ediția Nintendo NES, 1989                          | [nesguide / YouTube](https://www.youtube.com/watch?v=CvUK-YWYcaE)                                                                                                                             | Profilul Tetris                           |
| Tetris, Game Boy, 1989                                     | [NintendoComplete / YouTube](https://www.youtube.com/watch?v=BQwohHgrk2s)                                                                                                                     | Profilul Game Boy                         |
| Korobeiniki, aproximativ 21 s                              | [Maxime Lorant / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korobe%C3%AFniki_music_sample.ogg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)               | `audio` în profilurile Tetris și Game Boy |
| Fractal și DogPlayingTetris la CTWC 2023, aproximativ 24 s | [Aptiz712 / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fractal_and_DogPlayingTetris_rolling_during_CTWC_2023.webm), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | `video` în profilul Tetris                |

Fișierele Wikimedia sunt nemodificate. Imaginea de previzualizare a videoclipului este generată de Wikimedia din aceeași filmare. Korobeiniki este o interpretare separată a melodiei tradiționale care a inspirat „Type A” din ediția Game Boy; nu este muzica ediției NES și nu este prezentată ca înregistrare din joc.

Surse directe:

- [Audio Ogg](https://upload.wikimedia.org/wikipedia/commons/3/3f/Korobe%C3%AFniki_music_sample.ogg).
- [Video WebM](https://upload.wikimedia.org/wikipedia/commons/a/af/Fractal_and_DogPlayingTetris_rolling_during_CTWC_2023.webm).

Videoclipurile YouTube sunt încorporate prin `youtube-nocookie.com`, cu atribuire canalului și link către original. Drepturile asupra jocurilor și înregistrărilor rămân ale titularilor respectivi.

## Materiale demonstrative locale — pagina Imagine & sunet

Următoarele materiale au fost realizate pentru Retrocadia. Nu sunt capturi din jocuri comerciale și nu preiau muzică din acestea:

- `media/linie-completa.mp4`: animație schematică originală, 640 × 480 px, H.264, 8 secunde, fără sunet. Arată o piesă orizontală care completează un rând, dispariția acelui rând și coborârea blocurilor de deasupra.
- `media/linie-completa.ro.vtt`: subtitrări descriptive originale în limba română, cu patru intervale sincronizate.
- `media/linie-poster.svg`: schemă vectorială originală a poziției inițiale. Este posterul animației și poate fi deschisă separat, fără mișcare.
- `media/motiv-chiptune.wav`: motiv monofonic demonstrativ original, PCM mono, 22.050 Hz, 16 biți, 6 secunde. Folosește note cu undă dreptunghiulară și pauze, nu înregistrări sau sample-uri din jocuri.
- Diagrama undei din `pages/media.html` este un SVG original, cu titlu și descriere accesibilă.

Fontul Archivo, de Omnibus-Type, este păstrat local în `fonts/Archivo-Variable.ttf`, cu SIL Open Font License în `fonts/Archivo-OFL.txt`: [sursa](https://github.com/google/fonts/tree/main/ofl/archivo). Fontul Press Start 2P din proiectul inițial rămâne în director, cu licența sa, însă interfața nouă nu îl utilizează.
