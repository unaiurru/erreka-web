/**
 * Datos del restaurante. Edita aquí para cambiar información comercial.
 * En el siguiente cliente, este es uno de los pocos archivos que tocas.
 */

export const restaurant = {
  name: 'Erreka Meet Point',
  shortName: 'Erreka',
  since: 2021,
  phone: '+34659813152',
  phoneDisplay: '659 81 31 52',
  whatsapp: '34659813152',
  email: 'info@errekameetpoint.example',
  address: {
    street: 'Usandizaga Eresgille Kalea, 13 — bajo',
    city: 'Mungia',
    province: 'Bizkaia',
    postalCode: '48100',
    country: 'ES',
    // Coordenadas aproximadas de Mungia (revísalas si quieres precisión exacta)
    lat: 43.3552,
    lng: -2.8451,
  },
  social: {
    instagram: 'https://www.instagram.com/errekameetpoint',
  },
  hours: [
    { day: 'mon', open: '12:30', close: '23:30', closed: false },
    { day: 'tue', open: '12:30', close: '23:30', closed: false },
    { day: 'wed', open: '12:30', close: '23:30', closed: false },
    { day: 'thu', open: '12:30', close: '23:30', closed: false },
    { day: 'fri', open: '12:30', close: '00:30', closed: false },
    { day: 'sat', open: '12:30', close: '00:30', closed: false },
    { day: 'sun', open: '', close: '', closed: true },
  ],
} as const;

export type Restaurant = typeof restaurant;
