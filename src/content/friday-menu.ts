/**
 * Menú del día (viernes). Bilingüe.
 *
 * Los datos viven en `friday-menu.json` para que sean editables desde el
 * panel de admin. Este archivo es solo un wrapper tipado.
 *
 * NUNCA edites este archivo para añadir/quitar platos — edita el JSON
 * directamente o usa el panel de admin.
 */

import data from './friday-menu.json';
import type { Allergen } from './menu';

export type FridayDish = {
  id: string;
  name: { es: string; eu: string };
  image?: string;
  desc?: { es: string; eu: string };
  preparation?: { es: string; eu: string };
  allergens?: Allergen[];
};

export type FridayCourseKey = 'starter' | 'main' | 'dessert' | 'drink';

export const fridayMenu = {
  price: data.price,
  starter: data.starter as FridayDish[],
  main: data.main as FridayDish[],
  dessert: data.dessert as FridayDish[],
  drink: data.drink as FridayDish[],
};

/** Devuelve todos los platos del menú del viernes en un único array. */
export function getFridayDishes(): FridayDish[] {
  return [
    ...fridayMenu.starter,
    ...fridayMenu.main,
    ...fridayMenu.dessert,
    ...fridayMenu.drink,
  ];
}
