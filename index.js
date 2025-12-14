// hamburger menu
const nav = document.querySelector('nav');
const hamburgerButton = document.querySelector('.hamburger-toggle');
const navLinks = document.querySelectorAll('.nav-links');

hamburgerButton.addEventListener('click', function () {
    nav.classList.toggle('mobile');
    const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !expanded);
})

const dropdownButton = document.querySelectorAll('.dropdown-button');
const dropdownContent = document.querySelectorAll('.dropdown-content');

// dropdown menu
dropdownButton.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        dropdownContent.forEach(item => {
            if (item !== content) {
                item.classList.remove('visible');
            } else {
                item.classList.toggle('visible');
            }
        });
    });
});

const progressBar = document.querySelector('.progress-bar');
const backTopBtn = document.querySelector('.back-top');

window.addEventListener('scroll', handleScroll);
function handleScroll() {
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winscroll / height) * 100;

    // back to top button appearance
    progressBar.style.width = `${scrolled}%`;
    if (scrolled >= '30') {
        backTopBtn.classList.add('visible');
    } else if (scrolled <= '15') {
        backTopBtn.classList.remove('visible');
    }
}

// precise scroll padding top
const navHeight = document.querySelector('nav').offsetHeight;
document.documentElement.style.setProperty('--navHeight', `${navHeight}px`);

// dark mode
const darkModeButton = document.querySelector('#dark-mode-btn');
const darkModeIcon = document.querySelector('.dark-controller');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkModeIcon.classList.toggle('active');
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
    darkModeIcon.classList.toggle('active');
    darkModeButton.checked = true;

} else {
    document.body.classList.remove('dark');
    darkModeIcon.classList.remove('active');
    darkModeButton.checked = false;
}


// array mapping giochi
const gamesData = [
    {
        title: "BloodBorne",
        year: 2015,
        developer: "FromSoftware",
        image: {
            src: "img/lazy-imgs/BloodBorne-low.jpg",
            dataLazy: "img/BloodBorne.jpg",
            alt: "Immagine del Videogioco BloodBorne sviluppato da FromSoftware",
            title: "BloodBorne&#8482 - FromSoftware (2015)",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "BloodBorne&#8482 è un action RPG ambientato nella decadente città di Yharnam, infestata da orrori lovecraftiani e creature contorte. Il gioco offre un sistema di combattimento fluido, una narrazione frammentata tutta da scoprire, in classico stile From, e un'atmosfera unica che ha reso il titolo fin da subito riconoscibile ed iconico. Ancora oggi si aspetta da parte di Sony almeno un aggiornamento per le console di nuova generazione che conferirebbe nuova linfa a questo best-seller <u>uscito esclusivamente su PS4</u>."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: FROMSOFTWARE"
    },
    {
        title: "Mass Effect 2 & Mass Effect 3",
        year: "2010 / 2012",
        developer: "Bioware",
        image: {
            src: "img/lazy-imgs/Mass Effect-low.webp",
            dataLazy: "img/Mass Effect.webp",
            alt: "Immagine del Videogioco Mass Effect 3&#8482 sviluppato da Bioware",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>La saga di Mass Effect è tra le più apprezzate di sempre</b>. Sia il secondo che il terzo capitolo meritano una menzione dato che, a mio parere, non si possono giudicare narrativamente come giochi separati, bensì come <b>un unico grande gioco GDR sci-fi in cui la storia si sviluppa nel corso di 3 capitoli</b>. Ogni gioco perfeziona il precedente, anche se non mancano sbavature in ognuno di essi.",
            "<b>Mass Effect 2</b> è considerato da molti <u>il miglior capitolo della trilogia</u> grazie ad una trama profonda e coinvolgente, un finale al cardiopalma che mette alla prova le scelte del giocatore in ogni fase della missione ancora oggi ricordata come uno dei momenti più iconici nella storia dei videogiochi. Un sistema di scelte morali e reputazione che influenzano mondo di gioco e trama ed infine il numero più alto, 12, di personaggi giocabili nell'intera trilogia, DLC inclusi, caratterizzati da un cast indimenticabile. Tutti dettagli che hanno alzato l'asticella per gli RPG occidentali.",
            "<b>Mass Effect 3</b> è stato oggetto di pesanti critiche soprattutto al lancio. Tutto il gioco è considerabile un finale di serie, dall'aria che si respira e dagli atteggiamenti di chi vive nei vari pianeti che andremo a visitare con il nostro comandante Shepard. Le polemiche all'epoca scoppiarono per il finale considerato dai fan frettoloso e banale e con evidenti buchi di trama. In effetti il gioco ebbe non pochi problemi nello sviluppo: bisognava chiudere tutti i rami e le possibilità di scelta intraprese dai giocatori nei precedenti 2 giochi cercando di chiudere la trama in maniera coerente indipendentemente dalle scelte fatte dai giocatori.",
            "Inoltre Electronic Arts, il publisher del gioco e che aveva acquisito Bioware, forzò il team a sviluppare una modalità multiplayer online, <i>completamente innecessaria e incompatibile con la filosofia del gioco,</i> e tagliare contenuti di gioco spacciandoli per DLC (contenuti aggiuntivi) a pagamento che si rivelarono fondamentali per capire l'interezza della trama; il tutto per monetizzare il più possibile da una serie al suo picco massimo.",
            "Bioware cercò di correre ai ripari pubblicando <b>Mass Effect 3 Extended Cut</b>, che allungava il finale di gioco con cutscene inedite e dialoghi esplicativi che cercavano di chiudere meglio di quanto si era fatto inizialmente, ma comunque non si riuscì a superare né secondo capitolo né, per molti appassionati, il primo in termini di scrittura.",
            "Nel 2021 venne rilasciata la <i><b>Mass Effect Legendary Edition</b></i> che includeva tutta la trilogia e relativi DLC per ogni gioco, fatta eccezione per uno dei due DLC rilasciati per il primo Mass Effect chiamato <i>Stazione Pinnacle</i> che gli sviluppatori hanno ammesso di non esser riusciti a recuperare. Il gioco vanta frame rate migliorato e texture in 4K."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: BIOWARE",
        extraInfo: "Mass Effect&#8482 Legendary Edition (2021)"
    },
    {
        title: "Grand Theft Auto V",
        year: "2013",
        developer: "Rockstar Games",
        image: {
            src: "img/lazy-imgs/GTA5-low.webp",
            dataLazy: "img/GTA5.webp",
            alt: "Immagine del Videogioco Grand Theft Auto V&#8482 sviluppato da Rockstar Games™",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Anche la serie <b>Grand Theft Auto</b> ha avuto un enorme successo nel corso degli anni. Il capitolo che segnò l'inizio di questo successo fu Grand Theft Auto III, uscito nel 2001, che portò per la prima volta nella serie il 3D.",
            "Tra spin-off e capitoli principali, <u>la volontà di Rockstar Games era di alzare sempre l'asticella</u> introducendo in ogni nuovo capitolo della serie tecnologie all'avanguardia e una narrativa brillante e satirica del mondo americano, alternandosi tra <b>3 principali città</b> ispirate a luoghi reali: <b>Liberty City</b> (New York) presente in <i>GTA III, lo spin-off GTA Liberty City Stories, GTA Advance e GTA IV</i>; <b>Vice City</b> (Miami), famosa per la sua atmosfera anni '80, è apparsa in <i>GTA Vice City, lo spin-off GTA Vice City Stories</i> e apparirà su <i>Grand Theft Auto VI</i> in uscita il 26/05/2026. Infine <b>San Andreas</b>, un vasto stato che comprende 3 metropoli: Los Santos (Los Angeles), San Fierro (San Francisco) e Las Venturas (Las Vegas); apparsa in <i>GTA San Andreas e, solo Los Santos, in GTA V</i>. Di GTA si apprezzano le infinite possibilità di interazione col mondo ed il gameplay in una mappa vasta che ricrea in scala reale città lontane.",
            "<b>Grand Theft Auto V</b> dunque non è un semplice open-world, ma un vero e proprio parco giochi. Ambientato a Los Santos, dopo le avventure di Niko Bellic a Liberty City in GTA IV, il gioco offre 3 protagonisti giocabili, ognuno con un suo background, abitudini e stile di vita. Tra le novità principali vi erano la possibilità di passare da un personaggio all'altro in qualsiasi momento, una trama più longeva con diversi finali, attività secondarie più varie ed un maggior numero di edifici esplorabili.",
            "Essendo uscito nel periodo in cui stavano emergendo sempre più giochi online a supporto continuo (Live service), <b>un mese dopo il rilascio venne lancitata una modalità online</b> che prometteva attività free-roam e il necessario per costruirsi il proprio impero criminale con il proprio personaggio creato con un editor dedicato. <u>L'esplosione della modalità online fu inaspettata per Rockstar</u> la quale però non si fece scappare l'occasione rilasciando contenuti aggiuntivi in forma di aggiornamenti gratuiti che ancora oggi, nel 2025, tengono a giocare milioni di persone, in attesa del prossimo capitolo.",
            "Questo gioco è tutt'ora <b>un fenomeno di vendite</b> con al momento <b><u>215 milioni di copie venute nel corso di 12 anni</u></b>. Il gioco è stato inoltre rilasciato più volte: nel settembre 2013 per PS3 ed Xbox 360, un rilancio per la versione e PS4 e Xbox One nel 2014 che introduceva la prima persona e caricamenti migliorati, nell'aprile 2015 uscì per PC, nel 2022 venne rilanciato per PS5 e Xbox Series X|S, ed infine quest'ultima versione viene rilasciata anche su PC come <i>GTA V Enhanced</i> nel 2025."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: ROCKSTAR GAMES",
        extraInfo: "Grand Theft Auto V&#8482"
    },
    {
        title: "Assassin's Creed IV Black Flag",
        year: "2013",
        developer: "Ubisoft Montreal",
        image: {
            src: "img/lazy-imgs/Black Flag-low.webp",
            dataLazy: "img/Black Flag.webp",
            alt: "Immagine del Videogioco Assassin's Creed IV Black Flag&#8482 sviluppato da Ubisoft Montreal™",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Questo quarto capitolo di Assassin's Creed più che sugli assassini, è stato un'epopea piratesca, d'altronde il sottotitolo Black Flag già lo fa presagire. Nei panni di Edward Kenway, protagonista, pirata ed assassino, nel corso del gioco ci troveremo nella lotta secolare tra Templari ed Assassini. La storia è ambientata nel Mar dei Caraibi durante l'età d'oro della pirateria.",
            "Il titolo è ricordato per la sua libertà di gameplay, basato molto su battaglie navali e cacce al tesoro, la meravigliosa colonna sonora a tema marinai e l'atmosfera che il mondo di gioco conferisce all'esperienza."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: UBISOFT MONTREAL",
        extraInfo: "Assassin's Creed IV Black Flag&#8482"
    },
    {
        title: "The Legend of Zelda Breath of The Wild",
        year: "2017",
        developer: "Nintendo",
        image: {
            src: "img/lazy-imgs/Breath of The Wild-low.webp",
            dataLazy: "img/Breath of The Wild.webp",
            alt: "Immagine del Videogioco The Legend of Zelda&#8482 Breath of The Wild sviluppato da Nintendo",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "L'uscita di questo gioco avrà un grande impatto sulla realizzazione di numerosi altri giochi nel futuro; <b>The Legend of Zelda Breath of The Wild</b> ha <u>rivoluzionato e ridefinito il concetto di open world</u>. Con un mondo di gioco, ambientato nel regno di Hyrule, immenso, ricco di segreti, numerosissime sfide ambientali e dalla totale libertà di esplorazione, questo capitolo, uscito al lancio di Nintendo Switch il 3 marzo 2017, ha ridefinito il concetto di esplorazione e viaggio nei videogiochi.",
            "Ogni montagna o luogo visibile dal giocatore può esser esplorato approcciandocisi nel modo che più si preferisce: ci si può arrivare a cavallo, scalando, facendo attenzione ai fenomeni atmosferici e ai loro pericoli: durante un temporale, ad esempio, se si trasportano armi metalliche si verrà attratti da un fulmine che colpirà Link, ferendolo. Ogni enigma presente, sia nei sacrari sotterranei che nel mondo aperto possono essere affrontati in modi sempre diversi; un capolavoro di design e libertà di approccio."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: NINTENDO",
        extraInfo: "The Legend of Zelda&#8482 Breath of The Wild"
    },
    {
        title: "Cuphead",
        year: "2017",
        developer: "Studio MDHR",
        image: {
            src: "img/lazy-imgs/Cuphead-low.webp",
            dataLazy: "img/Cuphead.webp",
            alt: "Immagine del Videogioco Cuphead&#8482 sviluppato da Studio MDHR",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Sviluppato da Studio MDHR, <b>Cuphead</b> è un videogioco action run and gun diventato subito <i>celebre per il suo stile e art direction unici che riprendono i cartoni degli anni '30</i>. Il protagonista è Cuphead, una tazzina, che insieme al fratello Mugman si trova a dover recuperare le anime dei debitori del diavolo dopo aver perso una scommessa nel suo casinò. <u>Ogni fotogramma del gioco è stato realizzato e disegnato a mano</u> con una colonna sonora jazz suonata da un orchestra dal vivo.",
            "L'avventura e il gameplay loop si basano sull'alternarsi tra livelli più tradizionali a scorrimento orizzontale alle più iconiche e difficili boss battle: durante queste battaglie l'aspetto dello scenario, del boss, e i suoi pattern d'attacco, cambiano dopo che infliggiamo una certa quantità di danno passando alla fase successiva.",
            "Cuphead è anche apprezzato per la sua difficoltà conquistando sia chi vuole cercare una sfida vecchio stile, sia i giocatori esperti che desiderano mettersi davvero alla prova. Le boss fight richiedono molta concentrazione vista l'imprevedibilità degli attacchi e la velocità con cui essi cambiano ad ogni fase. Tornando al gameplay, nel corso dell'avventura si possono collezionare delle monete che permettono di potenziare gli attacchi di Cuphead. In tutto ci sono 4 isole principali da affrontare: <b>Isola Calamaio I, II, III, IV</b>. Vi è anche un'area aggiuntiva, <b>l'inferno dell'isola</b>, dove i giocatori affrontano sfide più impegnative.",
            "Nel 2022 il gioco ricevette il DLC <i>The Delicious Last Course</i>, che introdusse il personaggio di Ms. Chalice e venne fin da subito apprezzato per la sua qualità. Cuphead è ormai diventato un cult e un icona che ha avuto grande impatto sia dentro che fuori dal medium videoludico."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: STUDIO MDHR",
        extraInfo: "Cuphead&#8482"
    },
    {
        title: "Far Cry 3",
        year: "2012",
        developer: "Ubisoft Montreal",
        image: {
            src: "img/lazy-imgs/Far Cry 3-low.webp",
            dataLazy: "img/Far Cry 3.webp",
            alt: "Immagine del Videogioco Far Cry 3&#8482 sviluppato da Ubisoft Montreal",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Ambientato in un arcipelago tropicale all'apparenza paradisiaco, con <b>Far Cry 3</b> Ubisoft Montreal ha rivoluzionato la serie elevando narrazione e gameplay. Nel gioco si vestono i panni di Jason Brody, un ragazzo che insieme a un gruppo di amici vengono catapultati in un vero incubo tra traffici illeciti e violenza.",
            "A rimanere impresso nei giocatori è stato l'antagonista <b>Vaas Montenegro</b> - nell'immagine - grazie all'eccezionale interpretazione e carisma dell'attore Michael Mando. Oltre questo, il gioco si è voluto allontanare dalle trame più anonime dei precedenti capitoli ponendo maggior enfasi su narrativa e sul gameplay concedendo maggior libertà nell'approccio."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: UBISOFT MONTREAL",
        extraInfo: "Far Cry 3&#8482"
    },
    {
        title: "Hollow Knight",
        year: "2017",
        developer: "Team Cherry",
        image: {
            src: "img/lazy-imgs/Hollow Knight-low.webp",
            dataLazy: "img/Hollow Knight.webp",
            alt: "Immagine del Videogioco Hollow Knight&#8482 sviluppato da Team Cherry",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Hollow Knight</b> è un meraviglioso metroidvania sviluppato dallo studio australiano Team Cherry. Il gioco segue le vicende di un piccolo cavaliere che non parla mai, armato solo di un chiodo, nel regno di Hallownest. Il mondo di gioco è disegnato a mano e accompagnato da una colonna sonora malinconica e misteriosa che arricchisce l'esperienza con grande forza.",
            "Il progetto era nato come Kickstarter senza troppe pretese, ma alla fine crebbe in maniera clamorosa rispetto le aspettative diventando un successo internazionale. Nel tempo arrivarono degli aggiornamenti gratuiti che contribuirono a consolidare una grande fanbase. Il Sequel, <i>Hollow Knight Silksong</i>, è tutt'ora molto atteso. Inizialmente pensato come semplice DLC il progetto divenne talmente ambizioso da farlo diventare un gioco a sé."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: TEAM CHERRY",
        extraInfo: "Hollow Knight&#8482"
    },
    {
        title: "Super Mario Galaxy 2",
        year: "2010",
        developer: "Nintendo",
        image: {
            src: "img/lazy-imgs/Mario Galaxy 2-low.png",
            dataLazy: "img/Mario Galaxy 2.png",
            alt: "Immagine del Videogioco Super Mario Galaxy 2&#8482 sviluppato da Nintendo",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Dopo l'enorme successo del primo <i>Super Mario Galaxy</i>, Nintendo iniziò i lavori per un'espansione chiamandola <i><b>Super Mario Galaxy 1.5</b></i>. Come spesso accade però lo sviluppo e le idee si erano evolute al punto da trasformare il progetto in un vero e proprio sequel con contenuti del tutto differenti dall'originale. Esce così nel 2010 <b>Super Mario Galaxy 2</b>.",
            "Questo platoform gravitazionale riprendeva la struttura e l'ambientazione del primo capitolo, ma semplificando alcune cose come la mappa dei mondi: la semplificazione rese la selezione dei livelli molto più simile ad un capitolo di Super Mario Bros; si andava sulla galassia desiderata e si selezionava la stella da prendere. Le novità di Galaxy 2 gravitano soprattutto sull'aggiunta di nuovi elementi di gameplay come Yoshi e i suoi potenziamenti chiamati <b>Frutti Yoshi</b>.",
            "I potenziamenti di Mario, oltre quelli già presenti nel primo Galaxy, si arricchiscono; mentre Yoshi ne ottiene 3 inediti:"
        ],
        lists: [
            {
                items: [
                    "<b>Frutto Bolla (Blu)</b>: Yoshi può fluttuare nell'aria gonfiando il suo corpo come un pallone.",
                    "<b>Frutto Lampadino (Giallo)</b>: Yoshi può illuminare le aree oscure, rendendo più facile trovare oggetti e piattaforme nascoste.",
                    "<b>Frutto Peperino (Rosso)</b>: Yoshi diventa velocissimo e può correre sui muri e sull'acqua.",
                    "<b>Fungo Ape</b>: trasforma Mario in Mario Ape, permettendogli di volare per brevi periodi e di attaccarsi a pareti ricoperte di miele.",
                    "<b>Fungo Roccia</b>: trasforma Mario in Mario Roccia, permettendogli di rotolare e distruggere nemici.",
                    "<b>Fungo Spettro</b>: trasforma Mario in Mario Spettro, consentendogli di attraversare muri, fluttuare e diventare invisibile.",
                    "<b>Fiore Nuvola</b>: trasforma Mario in Mario Nuvola, permettendogli di creare nuvole su cui camminare.",
                    "<b>Trottolapano</b>: trasforma Mario in Mario Nuvola, permettendogli di creare nuvole su cui camminare.",
                    "<b>Fungo Molla</b>: trasforma Mario in Mario Molla, permettendogli di eseguire grandi salti.",
                    "<b>Stella Iride</b>: trasforma Mario in Mario Iride, rendendolo invulnerabile per un breve periodo."
                ]
            }
        ],
        paragraphsExtra: [

            "L'impronta del primo capitolo rimane, sia chiaro, ma nonostante questo Galaxy 2 è considerato, insieme al primo, uno dei platform più riusciti di tutti i tempi e ancora oggi molti non sanno preferire l'uno rispetto all'altro."
        ],
        credits: "Crediti: NINTENDO",
        extraInfo: "Super Mario Galaxy 2&#8482"
    },
    {
        title: "Portal 2",
        year: "2011",
        developer: "Valve",
        image: {
            src: "img/lazy-imgs/Portal 2-low.webp",
            dataLazy: "img/Portal 2.webp",
            alt: "Immagine del Videogioco Portal 2&#8482 sviluppato da Valve",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Portal 2</b> è riuscito ad espandere e perfezionare tutto quello che aveva reso il primo capitolo un cult e una pietra miliare del medium. Vennero introdotte nuove meccaniche di gameplay, come i gel propulsivi e repulsivi e una nuova serie di enigmi sempre più complessi. I gel si differenziavano dal colore e dalla funzione svolta:",
            "Tipi di gel presenti nel gioco:"
        ],
        lists: [
            {
                items: [
                    "<b>Gel repulsore (blu)</b>: gel che fa rimbalzare gli oggetti e il giocatore. Quando si incontra una superficie con questo gel, si rimbalza, consentendo di raggiungere aree altrimenti irraggiungibili o superare ostacoli.",
                    "<b>Gel propulsore (arancione)</b>: gel che riduce l'attrito, facendo scivolare gli oggetti e aumentando la velocità del giocatore. È utile per raggiungere punti lontani rapidamente o per superare superfici scivolose.",
                    "<b>Gel di conversione (bianco)</b>: gel che rende le superfici su cui viene applicato adatte a ospitare i portali. Senza questo gel, non è possibile piazzare i portali su tutte le superfici del gioco.",
                    "<b>Gel detergente</b>: gel che rimuove gli effetti degli altri. Se si applica il gel detergente su una superficie precedentemente trattata con gli altri gel, l'effetto di quest'ultimi viene annullato.",
                ]
            }
        ],
        paragraphsExtra: [
            "Inoltre, nel gioco erano presenti anche il <b><i>gel adesivo e riflettente</i></b>, ma furono rimossi dal gioco finale. Ciò che però elevava Portal 2 era la sua brillante scrittura. L'umorismo sempre tagliente di <b>GlaDOS</b>, il tragicomico carisma di <b>Wheatley</b> - doppiato splendidamente da <a class='additional-info-link' href='https://it.wikipedia.org/wiki/Stephen_Merchant' title='Informazioni aggiuntive su Stephen Merchant'>Stephen Merchant</a> - e una trama inaspettatamente profonda per un puzzle game, costruivano un'avventura che catturava, intrigava e arrivava anche a commuovere."
        ],
        credits: "Crediti: VALVE",
        extraInfo: "Portal 2&#8482"
    },
    {
        title: "Mario Kart 8 Deluxe",
        year: "2017",
        developer: "Nintendo",
        image: {
            src: "img/lazy-imgs/MK8-low.webp",
            dataLazy: "img/MK8.webp",
            alt: "Immagine del Videogioco Mario Kart 8 Deluxe&#8482 sviluppato da Nintendo",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Mario Kart 8 Deluxe</b> è una riproposizione per Nintendo Switch di Mario Kart 8, titolo uscito originariamente sulla sfortunata Wii U. Date le scarse vendite e il conseguente fallimento commerciale della console, il titolo non riuscì ad ottenere le vendite che Nintendo sapeva che avrebbe meritato e così dopo un mese dal lancio di Switch nel 2017 viene proposta questa riedizione che conteneva già tutti i DLC della versione Wii U, ampliando notevolmente il roster di personaggi e tracciati.",
            "Con questo presupposto Nintendo riuscì a confezionare <u>il gioco di corse più ricco e accessibile della serie</u>. La principale novità di questo capitolo era l'antigravità che poteva essere utilizzata per creare tracciati ancora più creativi e dinamici.",
            "Durante l'intero ciclo di vita di Nintendo Switch questo gioco è <b>rimasto sempre in cima alle classifiche di vendita</b>, anche grazie ad aggiornamenti costanti e che seguivano in tutto e per tutto la linea di un gioco live service; dando di fatto ragione a Nintendo nel riproporlo al pubblico. Nel 2023 venne annunciato il <b>pacchetto percorsi aggiuntivi</b> che includeva - <i>per 25€ o incluso nel servizio in abbonamento Nintendo Switch Online + Pacchetto Aggiuntivo</i> - 6 pacchetti, ognuno con 8 tracciati ripresi da altri capitoli della serie.",
            "Nonostante Switch non abbia avuto un capitolo originale della serie Mario Kart, Nintendo con 8 Deluxe ha saputo gestire al meglio un gioco dall'enorme potenziale non ancora sfruttato al massimo perché uscito su una console che non aveva permesso di farlo. Ad oggi, a quasi un mese dal lancio di Nintendo Switch 2, il nuovo capitolo della serie, <i>Mario Kart World</i>, è uscito come titolo di lancio; questo fa capire quanto Mario Kart sia diventato centrale nelle strategie della casa di Kyoto."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: NINTENDO",
        extraInfo: "Mario Kart 8 Deluxe&#8482"
    },
    {
        title: "Red Dead Redemption 2",
        year: "2018",
        developer: "Rockstar Games",
        image: {
            src: "img/lazy-imgs/RDR2-low.webp",
            dataLazy: "img/RDR2.webp",
            alt: "Immagine del Videogioco Red Dead Redemption 2&#8482 sviluppato da Rockstar Games",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Red Dead Redemption 2</b> è molto più che un semplice prequel di Red Dead Redemption (2010): è una profonda riflessione sul declino del selvaggio west. Il gioco è un viaggio lento, ma coinvolgente nel quale Rockstar Games, come in ogni suo gioco, ha riposto una cura maniacale per i dettagli costruendo uno degli open world più realistici e dettagliati mai realizzati nel medium videoludico.",
            "Siamo nel 1899, in un'America di fantasia ispirata al sud degli Stati Uniti, e seguiamo la storia della banda di Dutch van der Linde, guidata da <b>Arthur Morgan</b>, il protagonista, mentre cerca di sopravvivere alla fine dell'era del selvaggio West. Arthur è un personaggio complesso, umano, la cui evoluzione accompagna il giocatore in una storia ricca di tematiche come lealtà, sacrificio, redenzione.",
            "Il Gameplay, rispetto ai Grand Theft Auto, è caratterizzato, oltre alla presenza di minimappa e un sistema di polizia locale con livello di sospetto, anche dai valori vitali del personaggio da tenere a bada per evitare le conseguenze dell'incuria: c'è la barra della stamina, energia, fame e così via. Il mondo di Red Dead II presenta cinque stati: <b>New Hanover, Ambarino, e Lemoyne</b>, che sono nuovi, e <b>New Austin e West Elizabeth</b>, che ritornano dal primo Red Dead Redemption. Dalla caccia realistica alle dinamiche con gli NPC e le loro abitudini, ogni elemento aiuta a far sentire il giocatore parte integrante di un mondo 'vivo' e in continua evoluzione.",
            "Dal punto di vista tecnico il gioco è sbalorditivo: paesaggi mozzafiato, nuvole volumetriche, animazioni di oggetti, animali, materiali e persone curate in ogni minimo dettaglio e un comparto audio coinvolgente. Red Dead Redemption II è opera che, con una maestria che poche volte si vede, riesce ad unire interattività e cinema."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: ROCKSTAR GAMES",
        extraInfo: "Red Dead Redemption 2&#8482"
    },
    {
        title: "The Last of Us",
        year: "2013",
        developer: "Naughty Dog",
        image: {
            src: "img/lazy-imgs/TLOU-low.webp",
            dataLazy: "img/TLOU.webp",
            alt: "Immagine del Videogioco The Last of Us&#8482 sviluppato da Naughty Dog",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "Con <b>The Last of Us</b> Naughty Dog ha ridefinito il modo con cui i videogiochi possono raccontarci una storia. Ambientato in un'America post apocalittica, in un mondo dove l'infezione ha decimato la popolazione, il gioco segue le vicende di <b>Joel ed Ellie</b>, due sopravvissuti legati da una relazione che man mano nel gioco si fa sempre più profonda anche verso il giocatore.",
            "La narrazione delle vicende è violenta, cruda con momenti tranquilli alternati ad azione, tensione e violenza che riflettono il lato più umano - e non - del mondo che si sta vivendo. Uscito come uno degli ultimi titoli PS3 in esclusiva, tecnicamente era notevole. Lato gameplay siamo di fronte a un gioco in terza persona con il personaggio leggermente verso la sinistra dell'inquadratura, uno stile poi ripreso spesso nelle esclusive Sony, in cui si alternavano fasi action e stealth.",
            "La cura per i dettagli, il level design, la narrativa, la colonna sonora e il doppiaggio hanno trasformato The Last of Us in un punto di riferimento per il settore."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: NAUGHTY DOG",
        extraInfo: "The Last of Us&#8482"
    },
    {
        title: "Super Mario Odyssey",
        year: "2017",
        developer: "Nintendo",
        image: {
            src: "img/lazy-imgs/Odyssey-low.webp",
            dataLazy: "img/Odyssey.webp",
            alt: "Immagine del Videogioco Super Mario Odyssey&#8482 sviluppato da Nintendo",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Super Mario Odyssey</b> è il l'ultimo capitolo della serie uscito in esclusiva su Nintendo Switch nell'ottobre 2017. Questo gioco rappresenta un ritorno alla struttura sandbox dei livelli utilizzata in <a class='additional-info-link' href='https://www.mariowiki.it/Super_Mario_64' title='Informazioni aggiuntive su Super Mario 64'>Super Mario 64</a>, ma con la freschezza e le innovazioni tecniche portate avanti negli ultimi 21 anni. Il gioco mette subito in primo piano il <u>tema del viaggio</u> e lo si può notare anche dalla mappe dei regni, consultabili tramite delle cartine che somigliano a delle brochures per turisti raccoglibili in un centro informazioni.",
            "La vera novità di questo capitolo è <b>Cappy</b>, il cappello di Mario ora è in grado di <i><q>cap-turare</q></i> i nemici ereditandone comportamenti e movimenti, creando possibilità infinite d'interazione con il mondo di gioco. L'intero videogioco è poi una celebrazione della storia di Mario, con numerose citazioni e richiami per i fan di vecchia data.",
            "I regni esplorabili"
        ],
        lists: [
            {
                items: [
                    "<b>Regno del Cappello:</b> regno dedicato al cappello di Mario.",
                    "<b>Regno delle Cascate:</b> con imponente cascata e fossili naturali.",
                    "<b>Regno delle Sabbie:</b> deserto arido con rovine e oasi.",
                    "<b>Regno dei Fornelli:</b> vulcani e attività geotermica.",
                    "<b>Regno del Lago:</b> area lacustre con isole e grotte.",
                    "<b>Regno della Selva:</b> giungla lussureggiante.",
                    "<b>Regno delle Nevi:</b> ambiente freddo e innevato.",
                    "<b>Regno del Mare:</b> regno sottomarino con barriere coralline.",
                    "<b>Regno della City (New Donk City):</b> metropoli ispirata a New York.",
                    "<b>Regno dei Ruderi:</b> area rocciosa con rovine antiche.",
                    "<b>Regno dei Nembi:</b> regno che fluttua tra le nuvole.",
                    "<b>Regno di Bowser:</b> castello di Bowser.",
                    "<b>Regno della Luna:</b> regno sulla luna con base spaziale.",
                    "<b>Regno dei Funghi:</b> tradizionale regno di Mario.",
                    "<b>Lato Tetro:</b> area nascosta con sfide oscure.",
                    "<b>Regno dell'Oblio:</b> regno vuoto e silenzioso.",
                    "<b>Piramide Capovolta:</b> area sbloccabile con sfide di gravità e Pallottoli Bill."
                ]
            }
        ],
        paragraphsExtra: [
            "Il comparto tecnico e audio è eccezionale con musica d'orchestra, colori vivaci e grande accessibilità, rendendo Super Mario Odyssey uno dei migliori platform 3D di sempre."
        ],
        credits: "Crediti: NINTENDO",
        extraInfo: "Super Mario Odyssey&#8482"
    },
    {
        title: "Uncharted 4",
        year: "2016",
        developer: "Naughty Dog",
        image: {
            src: "img/lazy-imgs/Uncharted 4-low.webp",
            dataLazy: "img/Uncharted 4.webp",
            alt: "Immagine del Videogioco Uncharted 4&#8482 sviluppato da Naughty Dog",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>Uncharted 4: Fine di un Ladro</b> segna la degna conclusione dell'incredibile saga che ha visto protagonista <b>Nathan Drake</b>. Il gioco è il più ambizioso della serie, con un gameplay smussato e livelli ancora più aperti, senza però rinunciare ad un comparto tecnico, artistico, registico e sonoro tra i migliori della generazione PS4.",
            "Come ogni gioco Uncharted sono presenti <i>enigmi ambientali alternati a fasi più action</i>, ma in questo capitolo Naughty Dog riesce ad approfondire maggiormente anche il lato umano dei personaggi, mettendo alla luce i conflitti interiori di Drake e le sue tensioni in famiglia - sono presenti flashback durante il racconto - in particolare con il fratello Sam.",
            "Non solo è uno dei giochi più impressionanti, tecnicamente, della scorsa generazione, ma è anche una lezione di storytelling, in netta continuità con la direzione presa da The Last of Us."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: NAUGHTY DOG",
        extraInfo: "Uncharted 4&#8482"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        year: "2015",
        developer: "CD Projekt RED",
        image: {
            src: "img/lazy-imgs/TW3-low.webp",
            dataLazy: "img/TW3.webp",
            alt: "Immagine del Videogioco The Witcher 3: Wild Hunt&#8482 sviluppato da CD Projekt RED",
            width: 900,
            loading: "lazy",
            className: "not-loaded"
        },
        paragraphs: [
            "<b>The Witcher 3</b> è considerato come uno degli RPG - giochi di ruolo - migliori di sempre. Il gioco offre un mondo davvero vasto, ricco di sottotrame, in cui ogni decisione ha conseguenze tangibili durante l'esperienza.",
            "Il protagonista, <b>Geralt di Rivia</b>, affronta sia dilemmi morali che le complessità del mondo in cui vive. La scrittura delle missioni secondarie è curata al punto da superare, in alcuni casi, la narrativa principale. Inoltre i <b>DLC</b> - contenuti aggiuntivi usciti anni dopo come <i>Hearts of Stone</i> e <i>Blood and Wine</i> - <u>migliorano notevolmente l'esperienza di gioco aggiungendo decine di ore di contenuti</u> con nuove trame, personaggi e luoghi da esplorare.",
            "Oltre la trama e i personaggi memorabili, il gioco migliora il sistema di combattimento, la personalizzazione del personaggio e la varietà delle ambientazioni. CD Projekt RED ha dunque dimostrato come combinare ottimamente narrazione, open-world e meccaniche RPG."
        ],
        lists: [],
        paragraphsExtra: [],
        credits: "Crediti: CD PROJEKT RED",
        extraInfo: "The Witcher 3: Wild Hunt&#8482"
    }
];

// funzione che crea l'HTML di  un singolo gioco
function createGameBodyArticle(game) {
    // Creiamo il div game
    const gameDiv = document.createElement('div');
    gameDiv.className = "game";

    // Titolo gioco
    const gameTitle = document.createElement('h2')
    gameTitle.innerHTML = game.title;
    gameDiv.appendChild(gameTitle);

    // Anno e sviluppatore
    const span = document.createElement('span')
    span.innerHTML = `<i>${game.year} - ${game.developer}</i>`;
    gameDiv.appendChild(span);

    // Contenitore con informazioni sul gioco
    const gameInfoDiv = document.createElement('div')
    gameInfoDiv.className = 'game-info';

    // immagine del gioco
    const img = document.createElement("img");
    img.src = game.image.src;
    img.dataset.lazy = game.image.dataLazy;
    img.alt = game.image.alt;
    img.width = game.image.width;
    img.className = game.image.className;
    gameInfoDiv.appendChild(img);

    // captions immagine del gioco
    const pGameName = document.createElement('p');
    pGameName.innerHTML = game.extraInfo || game.title;
    const pGameCredits = document.createElement('p');
    pGameCredits.innerHTML = game.credits;

    gameInfoDiv.appendChild(pGameName);
    gameInfoDiv.appendChild(pGameCredits);
    gameDiv.appendChild(gameInfoDiv)

    // paragrafi
    game.paragraphs.forEach(par => {
        const p = document.createElement('p');
        p.innerHTML = par;
        gameDiv.appendChild(p);
    })

    // Eventuali Liste principali
    if (game.lists && game.lists.length > 0) {
        game.lists.forEach(list => {
            // creo l'elemento lista
            const ul = document.createElement('ul');
            // aggiungi i list item (stringhe HTML)
            list.items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                ul.appendChild(li);
            })
            gameDiv.appendChild(ul);
        });
    }
    // Eventuali paragrafi extra 
    if (game.paragraphsExtra && game.paragraphsExtra.length > 0) {
        game.paragraphsExtra.forEach(par => {
            const p = document.createElement('p');
            p.innerHTML = par;
            gameDiv.appendChild(p);
        });
    }
    // restituisci tutto il div game
    return gameDiv
}

// inserisco i giochi nella sezione article-content scorrendo l'array di oggetti gamesData 
const articleContent = document.getElementById('article-content')
gamesData.forEach(game => {
    const gameBody = createGameBodyArticle(game);
    articleContent.appendChild(gameBody)
})

// lazy load
const images = document.querySelectorAll('.not-loaded');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.lazy;
            image.onload = () => {
                image.classList.remove('not-loaded');
                image.classList.add('loaded');
            };
        }
    })
}, { threshold: 0.5 })
images.forEach((image) => {
    observer.observe(image)
})