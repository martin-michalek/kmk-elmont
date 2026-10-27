/**
 * ==========================================================
 *  HLAVNÉ NASTAVENIA WEBU – väčšinu údajov meníte iba tu.
 *  Položky označené TODO treba doplniť / skontrolovať.
 * ==========================================================
 */

export const SITE = {
  // TODO: skutočná doména (rovnaká ako v astro.config.mjs)
  url: 'https://kmkelmont.sk',
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
  phone: '+421 907 409 225',

  street: 'Horný Moštenec 9',
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

  // Telefón dvíha nonstop (havárie), bežné práce po dohode
  openingHours: 'Nonstop – telefonicky a pri haváriách',
  openingHoursNote: 'Zavolať môžete kedykoľvek. Bežné zákazky realizujem po dohode, pri havárii prídem aj mimo pracovného času.',
  openingHoursSchema: 'Mo-Su 00:00-23:59',

  // Kontaktný formulár – access key z https://web3forms.com (správy chodia na kmkelmont@gmail.com)
  web3formsKey: 'c0792997-2dd0-48b3-9dd0-ea575ff53355',

  // Sociálne siete (nepovinné) – napr. 'https://www.facebook.com/...'
  facebook: '',
  instagram: '',
  // Google firemný profil (rovnaké údaje ako tu – názov, adresa, telefón)
  googleBusiness: 'https://www.google.com/maps?cid=4637625176797749613',
};

export const NAV = [
  { href: '/', label: 'Domov' },
  { href: '/sluzby/', label: 'Služby' },
  { href: '/cennik/', label: 'Cenník' },
  { href: '/realizacie/', label: 'Realizácie' },
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
