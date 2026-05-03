/**
 * Carta del restaurante.
 *
 * Los datos están en `menu.json` para que sean editables desde el panel
 * de admin (Decap CMS). Este archivo es un wrapper que aplica los tipos
 * y exporta los helpers que usan los componentes.
 *
 * NUNCA edites este archivo para añadir/quitar platos — edita `menu.json`
 * directamente o usa el panel de admin.
 */

import data from './menu.json';

export type DishDescription = {
  es: string;
  eu: string;
};

/**
 * El nombre del plato puede ser:
 *  · un único string — nombres-marca o internacionalismos que no se traducen
 *    (p. ej. "El Padrino", "Smash Burger", "Lotus Burger", "Quesadilla").
 *  · un objeto { es, eu } — nombres descriptivos traducibles
 *    (p. ej. { es: "Patatas caseras", eu: "Etxeko patatak" }).
 *
 * Usa el helper `getDishName(dish, lang)` para obtener la versión correcta.
 */
export type DishName = string | DishDescription;

export type Allergen =
  | 'gluten' | 'lacteos' | 'huevo' | 'pescado' | 'mariscos'
  | 'frutos_secos' | 'soja' | 'sesamo' | 'mostaza' | 'apio' | 'sulfitos';

export type Dish = {
  id: string;
  name: DishName;
  price: string;
  desc?: DishDescription;
  /** Ruta a la imagen del plato. Ej: '/images/dishes/la-de-siempre.jpg' */
  image?: string;
  /** Texto largo explicando preparación, origen, técnicas. Bilingüe. */
  preparation?: DishDescription;
  /** Alérgenos detectados según RD 126/2015. */
  allergens?: Allergen[];
  highlight?: boolean;
};

export type MenuCategory = {
  id: 'starters' | 'burgers' | 'novelties' | 'desserts';
  dishes: Dish[];
};

/** Devuelve el nombre del plato en el idioma indicado. */
export function getDishName(dish: { name: DishName }, lang: 'es' | 'eu'): string {
  return typeof dish.name === 'string' ? dish.name : dish.name[lang];
}

// Cast del JSON a los tipos correctos. El JSON está diseñado para ser
// estructuralmente compatible con Dish[].
export const starters = data.starters as Dish[];
export const burgers = data.burgers as Dish[];
export const novelties = data.novelties as Dish[];
export const desserts = data.desserts as Dish[];

/**
 * Devuelve los platos marcados como destacados de todas las categorías.
 * Usado en la home para "lo más pedido".
 */
export function getHighlights(): Dish[] {
  return [...starters, ...burgers, ...novelties].filter(d => d.highlight);
}
