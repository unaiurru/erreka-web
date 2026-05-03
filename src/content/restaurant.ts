/**
 * Datos del restaurante.
 *
 * Los datos viven en `restaurant.json` para que sean editables desde el
 * panel de admin. Este archivo es solo un wrapper tipado.
 *
 * NUNCA edites este archivo para cambiar horarios o teléfono — edita el
 * JSON o usa el panel de admin.
 */

import data from './restaurant.json';

export const restaurant = data;

export type Restaurant = typeof restaurant;
