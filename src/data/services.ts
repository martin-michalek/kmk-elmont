/**
 * Zoznam služieb. Každá služba má vlastnú podstránku /sluzby/<slug>/ (dobré pre SEO).
 * Texty môžete ľubovoľne upraviť, pridať alebo odobrať službu.
 */
export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: 'bolt' | 'home' | 'panel' | 'bulb' | 'plug' | 'wrench';
  seoTitle: string;
  seoDescription: string;
  intro: string;
  includes: string[];
  forWhom: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'nove-elektroinstalacie',
    title: 'Nové elektroinštalácie',
    short: 'Kompletná elektroinštalácia pre novostavby rodinných domov a bytov – od návrhu rozvodov až po zapojenie.',
    icon: 'bolt',
    seoTitle: 'Nová elektroinštalácia v rodinnom dome – Považská Bystrica',
    seoDescription:
      'Kompletné elektroinštalácie pre novostavby domov a bytov v Považskej Bystrici a okolí. Rozvody, rozvádzač, zásuvky, osvetlenie. Cena po obhliadke.',
    intro:
      'Staviate dom alebo dokončujete byt? Pripravím elektroinštaláciu tak, aby bola bezpečná, prehľadná a pripravená aj na budúce potreby – napríklad nabíjačku pre elektromobil, tepelné čerpadlo či inteligentné ovládanie.',
    includes: [
      'Konzultácia rozmiestnenia zásuviek, vypínačov a svetiel',
      'Hrubá inštalácia – drážkovanie, krabice, káble',
      'Montáž a zapojenie rozvádzača s ističmi a prúdovým chráničom',
      'Kompletizácia – zásuvky, vypínače, svietidlá',
      'Príprava na slaboprúd (internet, TV, zvonček)',
      'Odovzdanie hotového diela a vysvetlenie zapojenia',
    ],
    forWhom: ['Novostavby rodinných domov', 'Nové byty (holobyty)', 'Prístavby a garáže'],
  },
  {
    slug: 'rekonstrukcia-elektroinstalacie',
    title: 'Rekonštrukcia elektroinštalácie',
    short: 'Výmena starých hliníkových rozvodov za nové medené, modernizácia bytov a domov pri prerábke.',
    icon: 'home',
    seoTitle: 'Rekonštrukcia elektroinštalácie v byte a dome – Považská Bystrica',
    seoDescription:
      'Výmena starej hliníkovej elektroinštalácie za novú v bytoch a domoch. Považská Bystrica, Púchov, Dubnica a okolie. Nezáväzná obhliadka a cenová ponuka.',
    intro:
      'Staré hliníkové rozvody z panelákov a starších domov nie sú stavané na dnešné spotrebiče. Rekonštrukcia elektroinštalácie zvýši bezpečnosť, pridá zásuvky tam, kde ich naozaj potrebujete, a pripraví byt na ďalšie roky.',
    includes: [
      'Obhliadka a posúdenie stavu existujúcej inštalácie',
      'Demontáž starých rozvodov',
      'Nové medené rozvody podľa aktuálnych noriem',
      'Nový rozvádzač s prúdovým chráničom',
      'Doplnenie zásuviek, vypínačov a svetelných okruhov',
      'Koordinácia s ďalšími remeselníkmi pri prerábke',
    ],
    forWhom: ['Rekonštrukcie panelákových bytov', 'Staršie rodinné domy', 'Chaty a chalupy'],
  },
  {
    slug: 'rozvadzace',
    title: 'Rozvádzače a istenie',
    short: 'Výmena starých poistkových skríň za moderné rozvádzače s ističmi a prúdovým chráničom.',
    icon: 'panel',
    seoTitle: 'Výmena rozvádzača a ističov – elektrikár Považská Bystrica',
    seoDescription:
      'Montáž a výmena domových rozvádzačov, ističov a prúdových chráničov. Bezpečné istenie pre domy a byty v Považskej Bystrici a okolí.',
    intro:
      'Rozvádzač je srdcom elektroinštalácie. Moderný rozvádzač s prúdovým chráničom chráni vás aj vaše spotrebiče a pri poruche rýchlo zistíte, ktorý okruh vypadol.',
    includes: [
      'Výmena starých poistiek za ističe',
      'Doplnenie prúdového chrániča',
      'Prehľadné označenie jednotlivých okruhov',
      'Rozšírenie rozvádzača o nové okruhy',
    ],
    forWhom: ['Byty so starými poistkami', 'Domy pri pridávaní nových spotrebičov', 'Dielne a garáže'],
  },
  {
    slug: 'zasuvky-vypinace-osvetlenie',
    title: 'Zásuvky, vypínače a osvetlenie',
    short: 'Pridanie a výmena zásuviek, vypínačov, montáž svietidiel a LED osvetlenia.',
    icon: 'bulb',
    seoTitle: 'Montáž zásuviek, vypínačov a LED osvetlenia – Považská Bystrica',
    seoDescription:
      'Pridanie nových zásuviek, výmena vypínačov, montáž svietidiel a LED pásikov v domoch a bytoch. Považská Bystrica a okolie.',
    intro:
      'Chýba vám zásuvka pri posteli, v kuchyni alebo na terase? Chcete nové svetlá či LED podsvietenie? Postarám sa o menšie aj väčšie úpravy bez zbytočného neporiadku.',
    includes: [
      'Pridanie nových zásuviek a vypínačov',
      'Výmena vypínačov a zásuviek za nové dizajny',
      'Montáž lustrov, bodových a LED svietidiel',
      'Vonkajšie osvetlenie a zásuvky na terase či v záhrade',
    ],
    forWhom: ['Byty a domy', 'Kuchyne a kúpeľne pri prerábke', 'Terasy, záhrady, garáže'],
  },
];
