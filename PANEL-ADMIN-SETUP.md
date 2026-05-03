# Panel de administración — Setup técnico

> Este documento es para **ti** (desarrollador), no para el cliente.

El panel `/admin/` permite que el equipo del Erreka edite la carta, los
horarios, los textos, etc. sin tocar código. Está construido con
[Decap CMS](https://decapcms.org).

## Cómo funciona el flujo

```
Cliente entra a /admin
    ↓
Pulsa "Login with GitHub"
    ↓
Le abrimos popup → GitHub login
    ↓
GitHub vuelve a /api/callback con un `code`
    ↓
/api/callback intercambia el code por un access_token
    ↓
postMessage al opener con el token
    ↓
Decap usa el token para leer/escribir el repo
    ↓
Cada cambio = un commit en GitHub
    ↓
Vercel detecta el push y redepliega en 1 minuto
```

## Pasos para activarlo (una sola vez)

### 1 · Crear una cuenta de GitHub para el cliente

- Email recomendado: `erreka.cocina@gmail.com` (o el que prefiera el cliente).
  Si no tienen email, créaselo tú primero en Gmail.
- En GitHub: registro normal, password fuerte.
- Apúntate las credenciales en un sitio seguro.

### 2 · Dar acceso al repo al cliente

1. En GitHub: tu repo `erreka-web` → Settings → Collaborators
2. Add people → email del cliente
3. Permiso: **Write** (no Admin — no queremos que toquen settings).
4. El cliente acepta la invitación desde su email.

### 3 · Crear la GitHub OAuth App

1. GitHub → Tu perfil → **Settings → Developer settings → OAuth Apps**
2. **New OAuth App**
3. Rellenar:
   - **Application name**: `Erreka Meet Point — Admin`
   - **Homepage URL**: `https://erreka-web.vercel.app`
   - **Authorization callback URL**: `https://erreka-web.vercel.app/api/callback`
4. **Register application**
5. Apúntate el **Client ID** (se ve directamente).
6. Pulsa **Generate a new client secret** y apunta el **Client Secret**
   (solo se muestra una vez).

### 4 · Configurar variables de entorno en Vercel

1. Vercel → tu proyecto → **Settings → Environment Variables**
2. Añade dos variables (Production + Preview + Development):

   | Nombre | Valor |
   |---|---|
   | `OAUTH_CLIENT_ID` | El Client ID del paso 3 |
   | `OAUTH_CLIENT_SECRET` | El Client Secret del paso 3 |

3. **Redeploy** el proyecto para que las cojan.

### 5 · Cambiar el `repo` en el config de Decap

Edita `public/admin/config.yml` línea 18:

```yml
repo: tu-usuario-github/erreka-web
```

Sustituye `tu-usuario-github` por el dueño del repo (probablemente `unaiurru`).

Commit + push.

### 6 · Probar

1. Entra a `https://erreka-web.vercel.app/admin/` con la cuenta del cliente.
2. Pulsa "Login with GitHub" → autoriza la app.
3. Si sale el panel con las colecciones (Carta, Viernes, Restaurante, Textos),
   ¡funciona!
4. Cambia el precio de un plato → "Save and Publish". Vercel redespliega
   en ~1 minuto y ves el cambio en la web pública.

## Enseñar al cliente

- Date una vuelta entera con ellos: cómo entrar, cómo añadir un plato,
  cómo subir una foto, cómo desactivar un plato (p.ej. quitando la
  estrella o eliminándolo).
- Imprímeles el `MANUAL-USUARIO.md` (en este mismo proyecto).
- Diles que **no toquen el campo "ID interno"** una vez creado un plato.
- Diles que las imágenes deben ser **800×600 px**, JPG, peso < 250 KB.

## Si algo va mal

| Síntoma | Causa probable |
|---|---|
| "Failed to load config.yml" al entrar | Error YAML en `config.yml`. Validar online. |
| Login se queda en blanco | OAuth App URLs mal configuradas (paso 3) |
| "Bad credentials" | Client ID o Secret mal copiados en Vercel |
| Login OK pero no carga colecciones | Repo en `config.yml` mal escrito o cliente sin permisos |
| Cambios no aparecen en la web | Mira Vercel Deployments — algún build ha fallado |

## Coste

**0 €.** GitHub OAuth es gratis. Decap CMS es OSS gratis. Vercel Functions
están en el plan free hasta 100.000 invocaciones/mes (este endpoint se
usa solo cuando alguien hace login, despreciable).
