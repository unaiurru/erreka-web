/**
 * Recibe el callback de GitHub tras la autorización OAuth.
 *
 * GitHub nos llama a este endpoint con un `code` temporal. Lo cambiamos
 * por un access_token contra el endpoint de tokens de GitHub, y devolvemos
 * el token a Decap CMS via postMessage al opener (la ventana del panel).
 *
 * Variables de entorno requeridas en Vercel:
 *   · OAUTH_CLIENT_ID      → Client ID de la GitHub OAuth App
 *   · OAUTH_CLIENT_SECRET  → Client Secret de la misma App
 */

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const code = req.query.code;

  if (!clientId || !clientSecret) {
    return res
      .status(500)
      .send('Faltan OAUTH_CLIENT_ID o OAUTH_CLIENT_SECRET en Vercel.');
  }
  if (!code) {
    return res.status(400).send('Falta el parámetro `code` de GitHub.');
  }

  try {
    // Cambiar el `code` por un access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await tokenRes.json();

    if (data.error || !data.access_token) {
      return res
        .status(400)
        .send(`Error de GitHub: ${data.error_description || data.error}`);
    }

    // Devolver el token a Decap CMS. Decap espera un mensaje muy concreto
    // por window.postMessage en el formato:
    //   "authorization:github:success:{...token payload...}"
    // o, en error:
    //   "authorization:github:error:{...error payload...}"
    const payload = JSON.stringify({
      token: data.access_token,
      provider: 'github',
    });

    const html = `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><title>Autenticando…</title></head>
<body>
<p style="font-family:sans-serif;text-align:center;padding:2rem;">
  Autenticación correcta. Volviendo al panel…
</p>
<script>
  (function() {
    function send(msg) {
      window.opener && window.opener.postMessage(msg, '*');
    }
    // Decap escucha varias veces hasta recibir el mensaje "authorizing"
    // antes de aceptar el "success". Hacemos handshake completo.
    function authorize(e) {
      if (e && e.data && e.data.indexOf && e.data.indexOf('authorizing:github') === 0) {
        send('authorization:github:success:${payload.replace(/'/g, "\\'")}');
        window.removeEventListener('message', authorize);
        setTimeout(function(){ window.close(); }, 800);
      }
    }
    window.addEventListener('message', authorize);
    // Mensaje inicial — Decap responderá con "authorizing:github" y
    // entonces enviamos el éxito.
    send('authorizing:github');
  })();
</script>
</body>
</html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send(`Error interno: ${err.message}`);
  }
}
