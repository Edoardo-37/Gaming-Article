# ConsoleVault - Articolo sui videogiochi

Questa è una pagina di un articolo di ConsoleVault, realizzata con **HTML, CSS e JS`**, sui migliori giochi dell'ultimo decennio (2010-2019). **ConsoleVault è un marchio inventato** con cui ho già realizzato un'app React con un elenco completo di tutte le console Nintendo, Sony e Microsoft mai rilasciate.

---

## Tecnologie e librerie utilizzate:

- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)** - (HyperText Markup Language) per inserire il contenuto della pagina web.

- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - (Cascading Style Sheets) per stilizzare la pagina web.

- **[JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** - per applicare comportamenti dinamici alla pagina web.

---

### Disclaimer

_Questo sito web è stato realizzato a scopo esercitativo_ e alcuni pulsanti o link potrebbero non funzionare (ES: i link del menu a tendina denominato 'approfondimenti' non reindirizzano ad alcuna pagina. Hanno l'attributo `src` impostato su `#`)

---

**Struttura del progetto**:

- `./pages`: cartella con le pagine secondarie del progetto.
- `./img`: cartella con tutte le immagini utilizzate nel sito web e favicon.
- `./docs`: cartella con tutte le immagini del sito nella versione desktop, mobile oltre a una cartella dedicata alle immagini utilizzate nel README.

<br />

![Immagine della struttura del progetto](./docs/struttura-progetto.png)

---

`HTML`:

1. **Intestazione dell'articolo** con titolo e introduzione.
2. **Corpo dell'articolo** con il contenuto principale dell'articolo
3. **Piè di pagina**
4. **Pagina Informazioni** con alcune informazioni sul marchio.

`CSS`

- Responsive per dispositivi mobili e desktop con @media
- Approccio mobile first
- Grid e Flex
- Variabili `:root`
- Modalità scura

`JavaScript`

- Proprietà **Scroll-padding-top** impostata dinamicamente prendendo l'esatto `offsetHeight` della barra di navigazione
- **Barra di avanzamento**
- **Pulsante Scorri in alto**: quando il valore `scroll` della barra di avanzamento raggiunge un certo valore, questo pulsante fisso viene visualizzato per facilitare la navigazione nell'articolo
- **Lazy Loading**
