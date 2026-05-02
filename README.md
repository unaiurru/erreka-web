# Erreka Meet Point — Web

Web bilingüe (castellano / euskera) para el restaurante Erreka Meet Point en Mungia (Bizkaia).
Construida con [Astro](https://astro.build) + tokens CSS + i18n nativo.

> **Estado**: Demo de portfolio · Estructura base reutilizable para clientes futuros.

---

## Arranque rápido

```bash
# Requiere Node.js 18+
npm install
npm run dev
```

La web estará en `http://localhost:4321`.

| Ruta | Idioma | Descripción |
|------|--------|-------------|
| `/` | — | Redirige según idioma del navegador |
| `/es/` | Castellano | Inicio |
| `/es/carta` | Castellano | Carta con fotos y modales de detalle |
| `/es/sobre-nosotros` | Castellano | Quiénes somos |
| `/es/reservas` | Castellano | Reservas (widget TheFork) |
| `/es/contacto` | Castellano | Mapa Google + horarios |
| `/eu/` | Euskera | Hasiera |
| `/eu/karta` | Euskera | Karta argazkiekin eta xehetasunekin |
| `/eu/gu-nor-garen` | Euskera | Gu nor garen |
| `/eu/erreserbak` | Euskera | Mahaia erreserbatu |
| `/eu/kontaktua` | Euskera | Helbidea, ordutegia |

---

## Estructura

```
erreka-web/
├── src/
│   ├── styles/tokens.css     # ★ Sistema de diseño (colores, fuentes)
│   ├── i18n/
│   │   ├── es.json           # ★ Textos castellano
│   │   ├── eu.json           # ★ Textos euskera
│   │   └── index.ts          # Helpers t(), useArray(), localizedPath()
│   ├── content/
│   │   ├── restaurant.ts     # ★ Datos del negocio
│   │   ├── menu.ts           # ★ Carta (platos, fotos, preparaciones, alérgenos)
│   │   └── friday-menu.ts    # ★ Menú del viernes
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── DishCard.astro    # Plato con foto y botón "ver detalles"
│   │   ├── DishModal.astro   # Modal con preparación y alérgenos
│   │   ├── FridayMenu.astro
│   │   └── WhatsAppFloat.astro
│   ├── layouts/Base.astro
│   └── pages/
│       ├── es/  (index, carta, sobre-nosotros, reservas, contacto)
│       └── eu/  (index, karta, gu-nor-garen, erreserbak, kontaktua)
└── public/
    └── images/dishes/        # Fotos de platos. Nombre = id del plato. Ej: la-de-siempre.jpg
```

---

## Cómo hacer cambios habituales

### Añadir un plato nuevo

Edita `src/content/menu.ts` añadiendo al array correspondiente:

```ts
{
  id: 'mi-plato',                           // sin espacios, sin tildes
  name: 'Mi Plato',
  price: '9,95 €',
  desc: { es: '...', eu: '...' },
  image: '/images/dishes/mi-plato.jpg',     // opcional
  preparation: { es: '...', eu: '...' },    // opcional → abre modal
  allergens: ['gluten', 'lacteos'],         // opcional
  highlight: false,                          // true → estrella + aparece en home
}
```

### Sustituir las fotos placeholder por reales

Pon la foto en `public/images/dishes/` con el mismo nombre que el `id`:

- `la-de-siempre` → `public/images/dishes/la-de-siempre.jpg`
- `gyozas-langostino` → `public/images/dishes/gyozas-langostino.jpg`

Si no hay archivo, el plato muestra un placeholder elegante con su nombre.

**Tamaños recomendados:**
- Cards de carta: **800×600 px** (4:3) JPG, ~150-250 KB.
- Hero pages: **1920×1080 px** mínimo, ~300-500 KB.

### Cambiar mapa

Usa Google Maps embebido **sin API key** mediante `?q=dirección`. Si la dirección
en `src/content/restaurant.ts` es correcta, el mapa funciona automáticamente.

### Sobre el modal "Ver detalles"

Cada plato puede tener un campo `preparation` bilingüe que activa un modal al hacer click.
Es **opcional**: si un plato no tiene `preparation`, el botón no aparece.

El modal muestra: foto grande, nombre, precio, descripción corta, preparación detallada y
alérgenos. Pensado como argumento de venta — posicionar el restaurante como "cocina cuidada".

No todos los platos necesitan preparación detallada — basta con 4-6 platos estrella.

---

## Integración con TheFork

El widget de reservas actual es **una maqueta visual**. Para activar reservas reales:

1. Crea cuenta en TheFork Manager (plan gratuito).
2. Copia el código de embed del widget.
3. Sustituye el contenido del `.reserve-widget` en `src/pages/es/reservas.astro` y
   `src/pages/eu/erreserbak.astro`.

Las reservas que entren por la web no pagan comisión. Solo las que vengan de la app de TheFork.

---

## Despliegue

Recomendado: **Cloudflare Pages** o **Vercel** (gratis).

```bash
npm run build
# /dist/ contiene la web estática
```

---

## Cumplimiento legal (España)

La web incorpora las páginas y mecanismos exigidos por la normativa española y europea:

| Página | Ruta ES | Ruta EU | Base legal |
|--------|---------|---------|-----------|
| Aviso Legal | `/es/aviso-legal` | `/eu/lege-oharra` | LSSI-CE art. 10 |
| Política de Privacidad | `/es/privacidad` | `/eu/pribatutasuna` | RGPD + LOPDGDD |
| Política de Cookies | `/es/cookies` | `/eu/cookieak` | LSSI-CE art. 22.2 + Guía AEPD 2023 |

**Banner de cookies** (`src/components/CookieConsent.astro`): "Aceptar todas",
"Rechazar todas" y "Configurar" con prominencia equivalente, conforme a la guía
AEPD de julio de 2023. Consentimiento granular en cuatro categorías
(necesarias, mapa, analítica, marketing). Por defecto, sin terceros activos.
El consentimiento se guarda 12 meses y luego se vuelve a pedir.

**Mapa con consentimiento previo** (`src/components/MapEmbed.astro`): el iframe
de Google Maps no se carga hasta que el usuario acepta la categoría "mapa".
Mientras tanto se muestra un placeholder con botón explícito.

**Datos pendientes antes de producción**: editar `src/content/legal.ts` y
sustituir los marcadores `[POR COMPLETAR]`:
- Razón social del titular
- NIF / CIF
- Domicilio fiscal definitivo
- Datos registrales (solo si es sociedad)

## Seguridad y anti-bot

**Cabeceras HTTP** (`public/_headers`): se envían desde Cloudflare Pages /
Netlify e incluyen CSP, X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, Permissions-Policy, Strict-Transport-Security y caché de
assets. Si el despliegue se hace en otro proveedor, traducir a su formato
(p.ej. `vercel.json` → `headers`).

**robots.txt** (`public/robots.txt`): bloquea bots conocidos de scraping para
LLMs (GPTBot, ClaudeBot, CCBot, Google-Extended, PerplexityBot, etc.). Quitar
o ajustar según preferencia del cliente.

**Anti-bot en formularios**: el formulario de reservas incluye honeypot
(`input[name="website"]`) + token temporal para descartar envíos automáticos.

**Cuando se conecte el widget real de TheFork** (sustituyendo la maqueta
visual de `reservas.astro` / `erreserbak.astro`), se recomienda añadir
**Cloudflare Turnstile**:

1. Crear sitekey gratuita en `dash.cloudflare.com → Turnstile`.
2. Añadir el script: `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`.
3. Añadir `<div class="cf-turnstile" data-sitekey="..."></div>` dentro del form.
4. Verificar el token en el backend antes de aceptar la reserva.
5. Ampliar la directiva `script-src` y `frame-src` del CSP en `public/_headers`
   añadiendo `https://challenges.cloudflare.com`.

Turnstile no instala cookies de seguimiento ni requiere banner adicional bajo
la guía AEPD, a diferencia de reCAPTCHA.

## Avisos

- Banner inferior "DEMO" mientras se usa como portfolio. Para producción, eliminar de
  `src/layouts/Base.astro`.
- Las traducciones al euskera están como punto de partida; conviene revisarlas con un hablante
  nativo (en Mungia se usa mucho vizcaíno). Lo mismo aplica a los textos legales: revisar
  el euskera de `src/content/legal.ts` antes de pasar a producción.
