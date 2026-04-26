# Folkogon — Hrvatska folklorna digitalna platforma

**Folkogon** je otvorena web platforma za dokumentaciju, edukaciju i digitalnu prezentaciju hrvatske folklorne baštine — od notnih zapisa do interaktivnih alata.

---

## O projektu

Folkogon nastaje iz potrebe za centralnim mjestom koje spaja glazbenike, istraživače i ljubitelje tradicijske kulture. Platforma nudi slobodan pristup digitalnim materijalima vezanim uz hrvatsku folklornu glazbu i ples, uz poseban fokus na regionalne tradicije karpatskog i podunavskog bazena (Međimurje, Podravina, Slavonija, Zagorje…).

Projekt je rezultat suradnje malog tima entuzijasta koji spajaju glazbu, tehnologiju i ljubav prema tradiciji.

---

## Stranice

| Stranica | Opis |
|---|---|
| `index.html` | Početna stranica s predstavljanjem platforme |
| `projekti.html` | Pregled svih projekata (aktivni i u razvoju) |
| `note.html` | Digitalni arhiv notnih zapisa (PDF + MusicXML), filtriranje po regiji |
| `linkovi.html` | Kurirani popis institucija, časopisa, software-a i alata |
| `tim.html` | Predstavljanje tima |

---

## Projekti

### Aktivni

- **Svirala** — mobilna aplikacija za učenje tradicijskih melodija i instrumentalne prakse (notni zapisi, audio primjeri, vježbe) — Google Play
- **Notni arhiv** — pretraživač notnih zapisa tradicijskih napjeva s podrškom za MusicXML i besplatno preuzimanje PDF particija
- **Labanotacija — software vodič** — pregled i upute za LabanWriter, LabaNotator, KineScribe, Calaban; primjeri zapisa hrvatskih i mađarskih plesnih forma
- **Znanstveni članci** — kurirani popis radova iz etnomuzikologije, etnokoreologije i računalne muzikologije (JSTOR, RILM, Hrčak, CEEOL)

### U razvoju

- **Folkogon Mapa** — interaktivna karta regionalnih folklorno-glazbenih tradicija Hrvatske s karakterističnim napjevima, instrumentima i plesnim formama po regijama
- **Labanotacija baza** — digitalna baza kinetografskih zapisa tradicijskih plesova u Laban notaciji uz video primjere i pedagoške komentare
- **Harmonizacijska škola** — interaktivni priručnik za harmonizaciju sjevernohrvatskih napjeva (Međimurje, Podravina, Posavina); modalni kontrapunkt, pandiatonika, višeglasje karpatskog bazena

---

## Notni arhiv

Notni zapisi pohranjeni su u `data/notes.js` kao JavaScript polje objekata. Svaki zapis sadrži:

```js
{
  id: 1,
  naziv: "Lepa naša",
  regija: "Međimurje",
  zapis: "Folkogon tim",      // ime zapisivača / urednika
  godina: 2024,
  pdf: "https://...",         // Google Drive link (ili null)
  xml: "https://...",         // MusicXML link (ili null)
  napomena: ""
}
```

Datoteke se dijele putem Google Drivea (desni klik → Share → Copy link).

**Trenutno zastupljene regije:** Međimurje, Zagorje, Podravina, Slavonija

---

## Struktura projekta

```
folkogon/
├── index.html          # Početna stranica
├── projekti.html       # Pregled projekata
├── note.html           # Arhiv notnih zapisa
├── linkovi.html        # Linkovi i resursi
├── tim.html            # Tim
├── 404.html            # Stranica za greške
├── favicon.svg         # Logo / ikona
├── css/
│   └── style.css       # Globalni stilovi
├── js/
│   └── nav.js          # Navigacijska logika (hamburger menu)
└── data/
    ├── sadrzaj.js      # Podaci o timu, projektima i linkovima
    └── notes.js        # Podaci o notnim zapisima
```

---

## Kako dodati novi notni zapis

1. Uploadaj PDF i/ili MusicXML na Google Drive
2. Desni klik na datoteku → *Share* → *Copy link* (ili postavi na "Anyone with the link can view")
3. Otvori `data/notes.js` i dodaj novi objekt u polje `NOTES`:

```js
{
  id: 6,                          // sljedeći slobodni broj
  naziv: "Naziv napjeva",
  regija: "Regija",               // npr. "Međimurje", "Slavonija"...
  zapis: "Ime Prezime",           // tko je napravio zapis
  godina: 2025,
  pdf: "https://drive.google.com/...",
  xml: null,                      // null ako nema MusicXML verzije
  napomena: ""
}
```

---

## Kako dodati projekt ili člana tima

Sve se uređuje u `data/sadrzaj.js`:

- **`TIM`** — polje s objektima (inicijal, ime, uloga, bio)
- **`PROJEKTI`** — polje s objektima (tip, naziv, opis, linkovi, status: `"aktivan"` ili `"uskoro"`)
- **`LINKOVI`** — polje kategorija s popisom URL-ova

---

## Tehnologije

- Vanilla HTML / CSS / JavaScript (bez frameworka, bez build procesa)
- Google Fonts: Playfair Display + DM Sans
- Podaci u `.js` datotekama kao plain objekti (bez baze podataka)
- Hosting: GitHub Pages (ili bilo koji statični hosting)

---

## Linkovi i resursi

Platforma prati i kurira izvore iz sljedećih kategorija:

- Institucije: Ansambl Lado, IEF, HFS, HAZU, MTA Zenetudományi Intézet (Budapest), SĽUK (Bratislava)…
- Notni arhivi: IMSLP, MuseScore, MusicXML, MEI, Verovio…
- Etnomuzikološki časopisi: ICTM, Narodna umjetnost (Hrčak), RILM, CEEOL, Ethnomusicology (JSTOR), Studia Musicologica…
- Labanotacija: LabanWriter, KineScribe, LabaNotator, DNB, ICKL…
- Digitalna muzikologija: music21, Sonic Visualiser, Praat, Melodia…
- Folklor i ples: Magyar Táncművészeti Egyetem, Hagyományok Háza, ICTM Ethnochoreology…

---

## Licenca

Svi materijali pod otvorenom licencom. © 2026 Folkogon.

---

## Tim

Mali tim entuzijasta koji spaja glazbu, tehnologiju i ljubav prema hrvatskoj folklorno-glazbenoj baštini. Osnivač je profesionalni glazbenik i cimbalist u Ansamblu Lado, magistar glazbene pedagogije, koji se bavi računalnom etnomuzikologijom i digitalnom dokumentacijom folklorne baštine.

---

*Izrađeno s ljubavlju prema tradiciji.*
