// FOLKOGON — TIM I PROJEKTI
// Uredi podatke o timu i projektima ovdje.

const TIM = [
  {
    inicijal: "G",
    ime: "Ime Prezime",
    uloga: "Osnivač · Razvoj · Glazba",
    bio: "Profesionalni glazbenik i cimbalist u Ansamblu Lado, magistar glazbene pedagogije. Bavi se računalnom etnomuzikologijom i digitalnom dokumentacijom folklorne baštine."
  },
  {
    inicijal: "A",
    ime: "Ime Prezime",
    uloga: "Sadržaj · Istraživanje",
    bio: "Uredite ovaj tekst s pravim podacima o ulogama, pozadini i doprinosu projektu."
  },
  {
    inicijal: "B",
    ime: "Ime Prezime",
    uloga: "Dizajn · Dokumentacija",
    bio: "Uredite ovaj tekst s pravim podacima o ulogama, pozadini i doprinosu projektu."
  }
];

const PROJEKTI = [
  {
    tip: "Mobilna aplikacija",
    naziv: "Svirala",
    opis: "Interaktivna aplikacija za učenje tradicijskih melodija i instrumentalne prakse. Sadrži notne zapise, audio primjere i vježbe.",
    linkovi: [
      { label: "Google Play", url: "https://play.google.com/zamijeni", stil: "btn-gold" },
      { label: "Više informacija", url: "#", stil: "btn-dark" }
    ],
    status: "aktivan"
  },
  {
    tip: "Web alat",
    naziv: "Notni arhiv",
    opis: "Pretraživač notnih zapisa tradicijskih napjeva. Podržava prikaz MusicXML formata i preuzimanje PDF particija.",
    linkovi: [
      { label: "Pregledaj note", url: "note.html", stil: "btn-dark" }
    ],
    status: "aktivan"
  },
  {
    tip: "U razvoju",
    naziv: "Folkogon Mapa",
    opis: "Interaktivna karta regionalnih folklorno-glazbenih tradicija Hrvatske. Svaka regija sadrži karakteristične napjeve, instrumente i plesne forme.",
    linkovi: [],
    status: "uskoro"
  },
  {
    tip: "Dokumentacija",
    naziv: "Labanotacija baza",
    opis: "Digitalna baza kinetografskih zapisa tradicijskih plesova u Laban notaciji uz video primjere i pedagoške komentare.",
    linkovi: [],
    status: "uskoro"
  },
  {
    tip: "Pedagoški alat",
    naziv: "Harmonizacijska škola",
    opis: "Interaktivni priručnik za harmonizaciju sjevernohvatskih napjeva — Međimurje, Podravina, Posavina. Obrađuje modalni kontrapunkt, pandiatoniku i stilske osobitosti tradicijskog višeglasja karpatskog bazena.",
    linkovi: [],
    status: "uskoro"
  },
  {
    tip: "Baza znanja",
    naziv: "Znanstveni članci",
    opis: "Kurirani popis recenziranih radova iz etnomuzikologije, etnokoreologije i računalne muzikologije relevantnih za hrvatsku i karpatsku folklornu tradiciju. Uključuje linkove na JSTOR, RILM, Hrčak i CEEOL.",
    linkovi: [
      { label: "Hrčak — Narodna umjetnost", url: "https://hrcak.srce.hr/narodna-umjetnost", stil: "btn-gold" }
    ],
    status: "aktivan"
  },
  {
    tip: "Alat",
    naziv: "Labanotacija — software vodič",
    opis: "Pregled i upute za korištenje software-a za kinetografiju: LabanWriter (Mac), LabaNotator (Windows), KineScribe (iPad), Calaban (AutoCAD-based, PC). Uključuje primjere zapisa hrvatskih i mađarskih plesnih forma.",
    linkovi: [
      { label: "LabanWriter (OSU)", url: "https://dance.osu.edu/research/dnb/laban-writer", stil: "btn-dark" },
      { label: "KineScribe", url: "https://www.reed.edu/kinescribe/", stil: "btn-dark" },
      { label: "LabaNotator", url: "https://www.labanotator.com/", stil: "btn-dark" }
    ],
    status: "aktivan"
  }
];

const LINKOVI = [
  {
    kategorija: "Institucije — Hrvatska",
    stavke: [
      { naziv: "Ansambl Lado", url: "https://www.lado.hr" },
      { naziv: "Hrvatski folklorni savez", url: "https://www.hfs.hr" },
      { naziv: "Institut za etnologiju i folkloristiku (IEF)", url: "https://www.ief.hr" },
      { naziv: "Ministarstvo kulture RH", url: "https://www.min-kulture.gov.hr" },
      { naziv: "Hrvatska akademija znanosti i umjetnosti (HAZU)", url: "https://www.hazu.hr" }
    ]
  },
  {
    kategorija: "Nacionalni ansambli — regija",
    stavke: [
      { naziv: "Mađarski državni ansambl narodnih plesova (HSFE)", url: "https://maneart.eu" },
      { naziv: "Hagyományok Háza (Kuća tradicije, Budapest)", url: "https://hagyomanyokhaza.hu/en" },
      { naziv: "Hungaricana — kulturna baština Mađarske", url: "https://hungaricana.hu/en/" },
      { naziv: "SĽUK — Slovački državni ansambl (Bratislava)", url: "https://www.sluk.sk" },
      { naziv: "Ansambl Kolo — Srbija", url: "https://www.ansamblkolo.rs" },
      { naziv: "LADO Electro (Hrvatska, eksperimentalni folklor)", url: "https://www.innerviews.org/inner/lado-electro" },
      { naziv: "SOKOJ — MIC (Srbija, glazbeni centar)", url: "https://www.mic.hr" },
      { naziv: "Slovensko narodno gledališče (Ljubljana)", url: "https://www.sng.si" }
    ]
  },
  {
    kategorija: "Instituti za etnologiju — regija",
    stavke: [
      { naziv: "MTA Bölcsészettudományi Kutatóközpont — Zenetudományi Intézet (Budapest)", url: "https://zti.hu" },
      { naziv: "Folkloristički inštitut ZRC SAZU (Ljubljana)", url: "https://isp.zrc-sazu.si" },
      { naziv: "Ústav etnologie SAV (Bratislava)", url: "https://uet.sav.sk" },
      { naziv: "Etnografski muzej Zagreb", url: "https://www.emz.hr" },
      { naziv: "Muzej Slavonije Osijek", url: "https://www.mso.hr" }
    ]
  },
  {
    kategorija: "Notni zapisi i arhivi",
    stavke: [
      { naziv: "IMSLP Petrucci Library", url: "https://imslp.org" },
      { naziv: "MuseScore", url: "https://musescore.com" },
      { naziv: "MusicXML standard", url: "https://www.musicxml.com" },
      { naziv: "Verovio — online MEI/MusicXML renderer", url: "https://verovio.org" },
      { naziv: "Music Encoding Initiative (MEI)", url: "https://music-encoding.org" },
      { naziv: "Josquin Research Project (polifonija, analiza)", url: "https://josquin.stanford.edu" }
    ]
  },
  {
    kategorija: "Etnomuzikologija — časopisi i baze",
    stavke: [
      { naziv: "ICTM — International Council for Traditional Music", url: "https://ictm.org" },
      { naziv: "Narodna umjetnost (IEF, Hrčak)", url: "https://hrcak.srce.hr/narodna-umjetnost" },
      { naziv: "RILM Abstracts of Music Literature", url: "https://www.rilm.org" },
      { naziv: "CEEOL — Central and Eastern European Online Library", url: "https://www.ceeol.com" },
      { naziv: "Ethnomusicology (JSTOR — SEM časopis)", url: "https://www.jstor.org/journal/ethnomusicology" },
      { naziv: "EasyFolk", url: "https://www.easyfolk.eu" },
      { naziv: "Folk Index", url: "https://folkindex.musiquefolk.com" },
      { naziv: "Studia Musicologica (LFZE, Budapest)", url: "https://akjournals.com/journal/smus" }
    ]
  },
  {
    kategorija: "Labanotacija — software",
    stavke: [
      { naziv: "LabanWriter (Mac, besplatno — OSU)", url: "https://dance.osu.edu/research/dnb/laban-writer" },
      { naziv: "KineScribe (iPad)", url: "https://www.reed.edu/kinescribe/" },
      { naziv: "LabaNotator (Windows)", url: "https://www.labanotator.com/" },
      { naziv: "Dance Notation Bureau (DNB)", url: "https://dancenotation.org" },
      { naziv: "ICKL — Int'l Council of Kinetography Laban", url: "https://ickl.org" }
    ]
  },
  {
    kategorija: "Notacijski software — glazba",
    stavke: [
      { naziv: "MuseScore (besplatno)", url: "https://musescore.org" },
      { naziv: "Sibelius", url: "https://www.sibelius.com" },
      { naziv: "Finale", url: "https://www.finalemusic.com" },
      { naziv: "Dorico (Steinberg)", url: "https://www.steinberg.net/dorico/" },
      { naziv: "Audiveris (OMR — optičko prepoznavanje nota)", url: "https://audiveris.github.io" },
      { naziv: "PhotoScore (Neuratron)", url: "https://www.neuratron.com/photoscore.htm" },
      { naziv: "LilyPond (tekstualni notni zapis)", url: "https://lilypond.org" }
    ]
  },
  {
    kategorija: "Digitalna muzikologija — alati",
    stavke: [
      { naziv: "music21 (Python toolkit za muzikologiju)", url: "https://web.mit.edu/music21/" },
      { naziv: "Sonic Visualiser", url: "https://www.sonicvisualiser.org" },
      { naziv: "Praat (fonetska i melodijska analiza)", url: "https://www.fon.hum.uva.nl/praat/" },
      { naziv: "Melodia (melodijska ekstrakcija za Sonic Visualiser)", url: "https://www.upf.edu/web/mtg/melodia" },
      { naziv: "Audiomoth (terenski snimač)", url: "https://www.openacousticdevices.info" }
    ]
  },
  {
    kategorija: "Folklore — ples i koreografija",
    stavke: [
      { naziv: "Folkdance Footnotes (opisi plesova)", url: "https://folkdancefootnotes.org" },
      { naziv: "ICTM Study Group on Ethnochoreology", url: "https://ictm.org/study-groups/ethnochoreology" },
      { naziv: "Magyar Táncművészeti Egyetem (Budapest)", url: "https://mte.eu" },
      { naziv: "Táncház — House of Traditions online", url: "https://hagyomanyokhaza.hu/en/tanchaz" }
    ]
  }
];