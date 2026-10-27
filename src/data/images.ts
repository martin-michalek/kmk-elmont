/**
 * Fotografie použité na webe. Ležia v src/assets/, takže ich Astro
 * automaticky zmenší a prevedie do WebP (optimalizácia pre mobil a SEO).
 *
 * Pridanie novej fotky:
 *   1. ulož ju do src/assets/ (ideálne max 2000 px, do ~500 kB)
 *   2. pridaj import a záznam do PHOTOS s popisom (alt) v slovenčine
 *   3. pridaj kľúč do GALLERY (poradie na /realizacie/)
 */
import drazkovanie from '../assets/drazkovanie.jpeg';
import novaElektrina from '../assets/nova-elektrina.jpeg';
import nova from '../assets/nova.jpeg';
import noveZasuvky from '../assets/nove-zasuvky.jpg';
import rekonstrukcia2 from '../assets/rekonstrukcia-2.jpeg';
import rekonstrukcia3 from '../assets/rekonstrukcia-3.jpeg';
import rekonstrukcia from '../assets/rekonstrukcia.jpeg';
import rozvadzac1 from '../assets/rozvadzac-1.jpeg';
import rozvadzac2 from '../assets/rozvadzac-2.jpeg';
import svetlaStropne from '../assets/svetla-stropne.jpeg';
import uvod from '../assets/uvod.jpeg';
import vypinace from '../assets/vypinace.jpg';
import zasuvky from '../assets/zasuvky.jpg';

export const PHOTOS = {
  uvod: { src: uvod, alt: 'Zapojený rozvádzač s prehľadne vedenou kabelážou – práca KMK elmont' },
  rozvadzac1: { src: rozvadzac1, alt: 'Domový rozvádzač s ističmi a prúdovými chráničmi pred zakrytím' },
  rozvadzac2: { src: rozvadzac2, alt: 'Hotový domový rozvádzač s prehľadne označenými okruhmi' },
  nova: { src: nova, alt: 'Nová elektroinštalácia – rozvody a inštalačné krabice pripravené v novostavbe' },
  novaElektrina: { src: novaElektrina, alt: 'Nové elektrické rozvody vedené po strope a v drážkach pripravenej miestnosti' },
  noveZasuvky: { src: noveZasuvky, alt: 'Osadené inštalačné krabice pre zásuvky v murive novostavby' },
  drazkovanie: { src: drazkovanie, alt: 'Vydrážkované steny s novými rozvodmi a krabicami pripravenými na zásuvky' },
  rekonstrukcia: { src: rekonstrukcia, alt: 'Rekonštrukcia elektroinštalácie – nové rozvody v odkrytom murive pri prerábke bytu' },
  rekonstrukcia2: { src: rekonstrukcia2, alt: 'Nové rozvody a inštalačné krabice v murive kúpeľne počas rekonštrukcie' },
  rekonstrukcia3: { src: rekonstrukcia3, alt: 'Kompletná výmena elektroinštalácie v byte počas rekonštrukcie' },
  svetlaStropne: { src: svetlaStropne, alt: 'Zapojené stropné bodové svetlá v sadrokartónovom podhľade' },
  zasuvky: { src: zasuvky, alt: 'Osadený rámček so zásuvkami a dátovými zásuvkami po dokončení elektroinštalácie' },
  vypinace: { src: vypinace, alt: 'Vypínač a zásuvka s USB nabíjaním osadené v stene' },
} as const;

/** Fotka pre jednotlivé služby (podľa slug-u v src/data/services.ts). */
export const SERVICE_PHOTOS: Record<string, keyof typeof PHOTOS | undefined> = {
  'nove-elektroinstalacie': 'nova',
  'rekonstrukcia-elektroinstalacie': 'rekonstrukcia',
  rozvadzace: 'rozvadzac1',
  'zasuvky-vypinace-osvetlenie': 'zasuvky',
};

/** Galéria realizácií – poradie na stránke /realizacie/. */
export const GALLERY: { key: keyof typeof PHOTOS; caption: string }[] = [
  { key: 'rozvadzac2', caption: 'Hotový rozvádzač s označenými okruhmi' },
  { key: 'rozvadzac1', caption: 'Domový rozvádzač s ističmi a prúdovými chráničmi' },
  { key: 'uvod', caption: 'Zapojený rozvádzač s prehľadne vedenou kabelážou' },
  { key: 'zasuvky', caption: 'Zásuvky a dátové zásuvky po dokončení' },
  { key: 'vypinace', caption: 'Vypínač a zásuvka s USB nabíjaním' },
  { key: 'svetlaStropne', caption: 'Zapojené stropné bodové svetlá' },
  { key: 'nova', caption: 'Nová elektroinštalácia v novostavbe' },
  { key: 'novaElektrina', caption: 'Nové rozvody po strope a v drážkach' },
  { key: 'noveZasuvky', caption: 'Osadené krabice pre zásuvky v novostavbe' },
  { key: 'drazkovanie', caption: 'Vydrážkované steny s novými rozvodmi' },
  { key: 'rekonstrukcia', caption: 'Rekonštrukcia rozvodov pri prerábke bytu' },
  { key: 'rekonstrukcia2', caption: 'Nové rozvody v murive kúpeľne' },
  { key: 'rekonstrukcia3', caption: 'Kompletná výmena elektroinštalácie v byte' },
];

/** Fotky v ukážke na domovskej stránke. */
export const GALLERY_TEASER: (keyof typeof PHOTOS)[] = ['rozvadzac2', 'svetlaStropne', 'zasuvky', 'drazkovanie'];
