# Manual de uso · Web de Erreka Meet Point

Esta guía explica cómo cambiar la web (carta, horarios, textos…) desde
el panel de administración. **No necesitas saber de informática.**

Si te quedas atascado en algún paso, llámanos.

---

## 1. Entrar al panel

1. Abre el navegador (Chrome, Safari, Firefox…) en el ordenador o el móvil.
2. Escribe esta dirección en la barra de arriba:

   **https://erreka-web.vercel.app/admin/**

3. Verás un botón verde que pone **"Login with GitHub"**. Pulsa.
4. Te pedirá usuario y contraseña — son los que te dimos en el papel/email.
5. La primera vez te pedirá "Authorize" (autorizar). Acepta.

A partir de aquí ves el panel. Te recuerda quién está conectado en la
esquina superior derecha.

---

## 2. Lo que puedes editar

En la barra izquierda hay 4 secciones:

### 🍔 Carta
Los platos de la carta. Cuatro pestañas: Entrantes, Burgers, Novedades, Postres.

### 🗓️ Menú del viernes
El menú del día que se ofrece los viernes.

### 🏪 Datos del restaurante
Teléfono, dirección, horarios y redes sociales.

### ✏️ Textos de la web
Frase principal de la página de inicio, sección "Quiénes somos", etc.
Hay versión castellano y versión euskera. **Si cambias una, acuérdate
de cambiar también la otra.**

---

## 3. Cómo añadir un plato nuevo

1. Pulsa **🍔 Carta**.
2. Pulsa **Carta completa**.
3. Busca la categoría donde quieres añadir el plato (ej. "Burgers").
4. Al final de la lista hay un botón **+ Add burgers**. Púlsalo.
5. Se abre un formulario. Rellena:
   - **ID interno**: un nombre corto sin espacios ni acentos. Ejemplo:
     `pollo-curry`. **Importante: una vez creado, no lo cambies.**
   - **Nombre en castellano**: ej. `Pollo al curry`
   - **Nombre en euskera**: ej. `Oilasko curry-an`. Si el plato es una
     marca y no se traduce, pon el mismo nombre en los dos campos.
   - **Precio**: ej. `12,50 €`
   - **Descripción**: lo que ven los clientes en la web. Castellano y euskera.
   - **Foto** (opcional): pulsa el botón y arrastra una foto del plato.
     Tamaño recomendado: 800×600 píxeles, formato JPG.
   - **Preparación detallada** (opcional): si rellenas esto, el plato se
     vuelve clickable en la web y abre una ventana con la explicación larga.
   - **Alérgenos**: marca los que correspondan.
   - **Plato estrella ★**: marca esta casilla si quieres que aparezca
     en la página de inicio como recomendado.
6. Pulsa **Save** (guardar) en la esquina superior derecha.
7. Para que el cambio se vea en la web, pulsa **Publish → Publish now**.

En 1-2 minutos verás el plato nuevo en `https://erreka-web.vercel.app/es/carta`.

---

## 4. Cómo cambiar un plato existente

1. En la lista, busca el plato que quieres cambiar.
2. Pulsa sobre él para abrirlo.
3. Cambia lo que quieras (precio, descripción, foto…).
4. Pulsa **Save** y luego **Publish → Publish now**.

---

## 5. Cómo borrar un plato

1. Abre el plato como en el punto anterior.
2. Pulsa **Delete entry** (botón rojo abajo del todo).
3. Confirma.
4. **Publish → Publish now** para que desaparezca también de la web.

> Alternativa más segura: si crees que volverás a poner el plato, en
> lugar de borrarlo simplemente quita la marca de "Plato estrella" y
> mueve el plato fuera de la categoría visible. Así no pierdes el texto
> ni la foto.

---

## 6. Cómo cambiar horarios

1. Pulsa **🏪 Datos del restaurante**.
2. Pulsa **Información del restaurante**.
3. Baja hasta la sección **Horarios**.
4. Pulsa el día que quieras editar.
5. Cambia hora de apertura y cierre. Si es un día cerrado, marca
   **"Cerrado este día"**.
6. **Save → Publish now**.

Para vacaciones o cierres puntuales (Navidad, etc.): por ahora no hay
una pantalla específica. Puedes:
- Marcar el día como cerrado temporalmente
- Cambiar el texto de la frase principal a "Cerrado por vacaciones del X al Y"

---

## 7. Cómo cambiar el menú del viernes

Igual que la carta:

1. **🗓️ Menú del viernes** → **Menú del viernes**
2. Cambia el precio si hace falta.
3. En cada apartado (Entrantes, Principales, Postres, Bebidas) puedes
   añadir/quitar/cambiar opciones.
4. **Save → Publish now**.

---

## 8. Cómo cambiar textos de la web

1. **✏️ Textos de la web**
2. Hay dos archivos: **Textos en castellano** y **Textos en euskera**.
   Si cambias uno, acuérdate de cambiar el otro.
3. Cambia lo que quieras. **Save → Publish now**.

---

## Preguntas frecuentes

**¿Y si me equivoco?**
Cada cambio se guarda en GitHub como un "commit". Si necesitas volver
atrás, llámanos: podemos restaurar la versión anterior en 1 minuto.

**¿Puedo editar desde el móvil?**
Sí. El panel funciona en móvil. Para subir fotos te será más cómodo
desde un ordenador, pero todo lo demás se puede hacer desde el teléfono.

**Las fotos pesan mucho.**
Antes de subir, comprime con esta web gratis: <https://tinyjpg.com>.
Arrastra la foto, descarga la versión comprimida y súbela.

**Tamaño ideal de las fotos.**
800 píxeles de ancho × 600 píxeles de alto (4:3). Formato JPG.
Peso menor de 250 KB.

**He cambiado algo y no se ve en la web.**
Los cambios tardan 1-2 minutos en aparecer. Si pasados 5 minutos no se
ven, refresca la página con Ctrl+F5 (Mac: Cmd+Shift+R). Si sigue sin
aparecer, llámanos.

**¿Puede entrar otra persona?**
Sí. Solo tenemos que crearle a esa persona también un acceso. Llámanos
y lo gestionamos.

**¿Está seguro?**
Sí. El usuario que te dimos solo puede tocar la web del Erreka. No puede
acceder a otras cosas. Pero como con cualquier contraseña: no la
compartas por escrito, no la dejes apuntada en un papel a la vista, etc.
