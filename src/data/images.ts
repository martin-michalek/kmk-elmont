/**
 * Fotografie použité na webe. Ležia v src/assets/, takže ich Astro
 * automaticky zmenší a prevedie do WebP (optimalizácia pre mobil a SEO).
 * Keď pribudne nová fotka, stačí ju sem pridať a doplniť popis (alt).
 */
import nova from '../assets/nova.jpeg';
import rekonstrukcia from '../assets/rekonstrukcia.jpeg';
import rozvadzac1 from '../assets/rozvadzac-1.jpeg';
import rozvadzac2 from '../assets/rozvadzac-2.jpeg';
import uvod from '../assets/uvod.jpeg';

export const PHOTOS = {
  uvod: { src: uvod, alt: 'Zapojený rozvádzač s prehľadne vedenou kabelážou – práca KMK elmont' },
  nova: { src: nova, alt: 'Nová elektroinštalácia – rozvody a inštalačné krabice pripravené v novostavbe' },
  rekonstrukcia: { src: rekonstrukcia, alt: 'Rekonštrukcia elektroinštalácie – nové rozvody v odkrytom murive pri prerábke bytu' },
  rozvadzac1: { src: rozvadzac1, alt: 'Domový rozvádzač s ističmi a prúdovými chráničmi pred zakrytím' },
  rozvadzac2: { src: rozvadzac2, alt: 'Hotový domový rozvádzač s prehľadne označenými okruhmi' },
} as const;

/** Fotka pre jednotlivé služby (podľa slug-u v src/data/services.ts). */
export const SERVICE_PHOTOS: Record<string, keyof typeof PHOTOS | undefined> = {
  'nove-elektroinstalacie': 'nova',
  'rekonstrukcia-elektroinstalacie': 'rekonstrukcia',
  rozvadzace: 'rozvadzac1',
  // pre zásuvky a osvetlenie zatiaľ fotka chýba – zobrazí sa zástupný obrázok
  'zasuvky-vypinace-osvetlenie': undefined,
};
