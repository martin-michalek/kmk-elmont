/**
 * ==========================================================
 *  HLAVNÉ NASTAVENIA WEBU – väčšinu údajov meníte iba tu.
 *  Položky označené TODO treba doplniť / skontrolovať.
 * ==========================================================
 */

export const SITE = {
  // TODO: skutočná doména (rovnaká ako v astro.config.mjs)
  url: 'https://martin-michalek.github.io',
  name: 'KMK elmont',
  legalName: 'KMK elmont s. r. o.',
  tagline: 'Elektroinštalácie pre domy a byty',
  owner: 'Michal Kolek',
  ico: '57362491',
  // DIČ / IČ DPH – doplňte, ak chcete zobraziť
  dic: '',
  icdph: '',

  email: 'kmkelmont@gmail.com',
  // TODO: telefón v tvare '+421 9xx xxx xxx'. Kým je prázdny, tlačidlá "Zavolať" sa nezobrazia.
  phone: '',

  city: 'Považská Bystrica',
  postalCode: '017 01',
  region: 'Trenčiansky kraj',
  country: 'SK',

  // TODO: skontrolovať so zákazníkom, kam až dochádza
  serviceArea: [
    'Považská Bystrica',
    'Púchov',
    'Dubnica nad Váhom',
    'Ilava',
    'Bytča',
    'Nemšová',
    'Trenčín',
  ],

  // TODO: pracovný čas
  openingHours: 'Po – Pi: 7:00 – 17:00',
  openingHoursSchema: 'Mo-Fr 07:00-17:00',

  // Kontaktný formulár – bezplatný kľúč z https://web3forms.com (zadajte email kmkelmont@gmail.com)
  // TODO: vložte access key. Bez neho formulár ponúkne odoslanie cez emailového klienta.
  web3formsKey: '',

  // Sociálne siete (nepovinné) – napr. 'https://www.facebook.com/...'
  facebook: '',
  instagram: '',
  // Odkaz na Google Business profil (keď bude vytvorený)
  googleBusiness: '',
};

export const NAV = [
  { href: '/', label: 'Domov' },
  { href: '/sluzby/', label: 'Služby' },
  { href: '/cennik/', label: 'Cenník' },
  { href: '/o-mne/', label: 'O mne' },
  { href: '/kontakt/', label: 'Kontakt' },
];

/**
 * Základná cesta webu. Je '/' pri vlastnej doméne a '/nazov-repozitara/'
 * pri GitHub Pages bez domény (nastavuje sa cez `base` v astro.config.mjs).
 * Všetky interné odkazy preto píšeme cez u('/kontakt/').
 */
export const BASE = import.meta.env.BASE_URL;
export const u = (path = '/') => `${BASE.replace(/\/$/, '')}${path}`;

/** Absolútna URL (pre SEO značky a štruktúrované dáta) */
export const abs = (path = '/') => new URL(u(path), SITE.url).href;
export const BUSINESS_ID = `${abs('/')}#firma`;

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;
