/**
 * Contenido legal — Aviso Legal, Privacidad y Cookies en ES + EU.
 *
 * IMPORTANTE: los marcadores [POR COMPLETAR] deben sustituirse por los datos
 * reales del titular antes de pasar la web a producción. Los datos comerciales
 * (NIF/CIF, registro mercantil si procede) son responsabilidad del cliente.
 *
 * Texto base preparado conforme a:
 *   · LSSI-CE (Ley 34/2002) — Aviso legal art. 10
 *   · RGPD (UE 2016/679) y LOPDGDD (LO 3/2018) — Privacidad
 *   · Guía AEPD sobre uso de cookies (julio 2023) — Cookies
 *
 * Fechas: actualizar 'lastUpdate' cada vez que se modifique algún texto.
 */

export const legalLastUpdate = '2026-05-01';

/* ============================================================
   TITULAR — datos del responsable del sitio
   Sustituir por los datos reales antes de producción.
   ============================================================ */
export const titular = {
  // Nombre comercial mostrado al público
  commercialName: 'Erreka Meet Point',
  // Razón social del titular (autónomo o sociedad)
  legalName: '[POR COMPLETAR — Razón social o nombre completo del titular]',
  // NIF / CIF
  taxId: '[POR COMPLETAR — NIF/CIF]',
  // Domicilio fiscal
  address: 'Usandizaga Eresgille Kalea, 13 — bajo, 48100 Mungia (Bizkaia)',
  // Datos registrales (solo sociedades). Vacío si autónomo.
  registry: '[POR COMPLETAR si es sociedad — Registro Mercantil de Bizkaia, Tomo, Folio, Hoja]',
  // Contacto
  email: 'info@errekameetpoint.example',
  phone: '+34 659 81 31 52',
  website: 'https://erreka-web.vercel.app',
} as const;

/* ============================================================
   AVISO LEGAL
   ============================================================ */
export const avisoLegal = {
  es: {
    title: 'Aviso Legal',
    sections: [
      {
        h: '1. Datos identificativos del titular',
        p: [
          `En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos del titular de este sitio web:`,
          `<strong>Titular:</strong> ${titular.legalName} (en adelante, "${titular.commercialName}").`,
          `<strong>NIF / CIF:</strong> ${titular.taxId}.`,
          `<strong>Domicilio:</strong> ${titular.address}.`,
          `<strong>Datos registrales:</strong> ${titular.registry}.`,
          `<strong>Contacto:</strong> ${titular.email} · ${titular.phone}.`,
        ],
      },
      {
        h: '2. Objeto',
        p: [
          `El presente aviso legal regula el uso del sitio web ${titular.website} (en adelante, "la web"), del que es titular ${titular.commercialName}.`,
          `La navegación por la web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este aviso legal en la versión publicada en el momento del acceso.`,
        ],
      },
      {
        h: '3. Condiciones de uso',
        p: [
          `El usuario se compromete a utilizar la web, sus contenidos y servicios conforme a la ley, las buenas costumbres y el orden público. Asimismo, se compromete a no utilizar la web con fines o efectos ilícitos, lesivos de derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar la web o impedir su normal disfrute por otros usuarios.`,
        ],
      },
      {
        h: '4. Propiedad intelectual e industrial',
        p: [
          `Todos los contenidos de la web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de ${titular.commercialName} o de terceros que han autorizado su uso, y están protegidos por la normativa nacional e internacional de propiedad intelectual e industrial.`,
          `Queda prohibida la reproducción, distribución, comunicación pública o transformación, total o parcial, de los contenidos sin autorización expresa y por escrito del titular.`,
        ],
      },
      {
        h: '5. Exclusión de responsabilidad',
        p: [
          `${titular.commercialName} realiza los máximos esfuerzos para evitar errores en los contenidos publicados. Sin embargo, no garantiza la inexistencia de errores ni que el contenido esté permanentemente actualizado.`,
          `${titular.commercialName} no se responsabiliza de los daños derivados del uso de la web ni de cualquier actuación realizada sobre la base de la información publicada.`,
          `Esta web puede contener enlaces a sitios de terceros. ${titular.commercialName} no asume responsabilidad alguna sobre el contenido o las políticas de privacidad de dichos sitios.`,
        ],
      },
      {
        h: '6. Legislación aplicable y jurisdicción',
        p: [
          `Las presentes condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de la web, las partes se someten a los Juzgados y Tribunales del domicilio del titular, salvo que la legislación aplicable disponga otra cosa.`,
        ],
      },
    ],
  },

  eu: {
    title: 'Lege Oharra',
    sections: [
      {
        h: '1. Titularraren datu identifikatzaileak',
        p: [
          `Informazio Gizartearen eta Merkataritza Elektronikoaren Zerbitzuei buruzko 34/2002 Legea (uztailaren 11koa) betez, webgune honen titularraren datu identifikatzaileak ematen dira:`,
          `<strong>Titularra:</strong> ${titular.legalName} (aurrerantzean, "${titular.commercialName}").`,
          `<strong>NAN / IFK:</strong> ${titular.taxId}.`,
          `<strong>Helbidea:</strong> ${titular.address}.`,
          `<strong>Erregistro datuak:</strong> ${titular.registry}.`,
          `<strong>Kontaktua:</strong> ${titular.email} · ${titular.phone}.`,
        ],
      },
      {
        h: '2. Helburua',
        p: [
          `Lege ohar honek ${titular.website} webgunearen erabilera arautzen du (aurrerantzean, "weba"), zeinaren titularra ${titular.commercialName} baita.`,
          `Webean nabigatzeak erabiltzaile-izaera ematen du eta lege ohar honetan jasotako baldintza guztiak osorik eta erreserbarik gabe onartzea dakar.`,
        ],
      },
      {
        h: '3. Erabilera baldintzak',
        p: [
          `Erabiltzaileak konpromisoa hartzen du weba, haren edukiak eta zerbitzuak legearen, ohitura onen eta ordena publikoaren arabera erabiltzeko. Halaber, ez du weba erabiliko helburu edo ondorio ilegalekin, hirugarrenen eskubide eta interesak kaltetzeko, edo edozein modutan weba kaltetu, ezgaitu, gainkargatu edo hondatzeko, ezta beste erabiltzaileek hura behar bezala erabiltzea eragozteko ere.`,
        ],
      },
      {
        h: '4. Jabetza intelektuala eta industriala',
        p: [
          `Webaren eduki guztiak (testuak, irudiak, logotipoak, diseinu grafikoa, iturburu-kodea, eta abar) ${titular.commercialName}-renak edo erabilera baimendu duten hirugarrenenak dira, eta nazioko eta nazioarteko jabetza intelektual eta industrialaren araudiak babesten ditu.`,
          `Debekatuta dago edukiak osorik edo zati batean berregitea, banatzea, jendaurrean jakinaraztea edo eraldatzea, titularraren idatzizko baimen espresik gabe.`,
        ],
      },
      {
        h: '5. Erantzukizuna baztertzea',
        p: [
          `${titular.commercialName}-k ahalegin handiena egiten du argitaratutako edukietan akatsak saihesteko. Hala ere, ez du bermatzen akatsik ez egotea, ezta edukia etengabe eguneratuta egotea ere.`,
          `${titular.commercialName} ez da web honen erabileraren ondorioz sortutako kalteen ezta argitaratutako informazioan oinarrituta egindako edozein jardueraren arduradun.`,
          `Web honek hirugarrenen guneetarako estekak eduki ditzake. ${titular.commercialName}-k ez du inolako erantzukizunik bere gain hartzen gune horien edukiei edo pribatutasun politikei buruz.`,
        ],
      },
      {
        h: '6. Legedi aplikagarria eta jurisdikzioa',
        p: [
          `Baldintza hauek Espainiako legediak arautzen ditu. Webaren erabileraren ondoriozko edozein eztabaidatarako, alderdiek titularraren egoitzako Epaitegi eta Auzitegien mende jartzen dira, legedi aplikagarriak bestelakorik ezartzen ez badu.`,
        ],
      },
    ],
  },
} as const;

/* ============================================================
   POLÍTICA DE PRIVACIDAD
   ============================================================ */
export const privacidad = {
  es: {
    title: 'Política de Privacidad',
    sections: [
      {
        h: '1. Responsable del tratamiento',
        p: [
          `<strong>Responsable:</strong> ${titular.legalName}.`,
          `<strong>NIF / CIF:</strong> ${titular.taxId}.`,
          `<strong>Domicilio:</strong> ${titular.address}.`,
          `<strong>Email:</strong> ${titular.email}.`,
        ],
      },
      {
        h: '2. Datos que tratamos',
        p: [
          `En este sitio web no se recogen datos personales de forma directa salvo aquellos que nos facilites voluntariamente al ponerte en contacto con nosotros (por teléfono, WhatsApp, email o redes sociales) o al realizar una reserva a través de la plataforma TheFork.`,
          `Datos típicos: nombre, número de teléfono, email, fecha y hora de reserva, número de comensales y, en su caso, observaciones (alergias, preferencias).`,
        ],
      },
      {
        h: '3. Finalidades y base legal',
        p: [
          `<strong>Atender consultas:</strong> tratamos los datos para responder a tus consultas. Base legal: consentimiento del interesado (art. 6.1.a RGPD).`,
          `<strong>Gestionar reservas:</strong> tratamos los datos para reservar mesa y prestar el servicio de restauración. Base legal: ejecución de un contrato (art. 6.1.b RGPD).`,
          `<strong>Cumplimiento legal:</strong> conservamos determinados datos para cumplir obligaciones contables, fiscales y administrativas. Base legal: obligación legal (art. 6.1.c RGPD).`,
        ],
      },
      {
        h: '4. Plazos de conservación',
        p: [
          `Los datos se conservarán mientras dure la relación con el cliente y, posteriormente, durante los plazos legales aplicables (en especial, los plazos fiscales y mercantiles que pueden alcanzar 6 años).`,
        ],
      },
      {
        h: '5. Destinatarios y encargados de tratamiento',
        p: [
          `No cedemos datos a terceros salvo obligación legal. Algunos proveedores acceden a datos como encargados de tratamiento bajo contrato firmado:`,
          `<strong>Hosting:</strong> Cloudflare, Inc. / Vercel, Inc. (dependiendo del despliegue final).`,
          `<strong>Reservas online:</strong> TheFork (Tripadvisor) — cuando se utilice el widget de reservas integrado.`,
          `<strong>Mapa:</strong> Google Ireland Ltd. — al cargar el mapa de Google Maps en la página de contacto, previo consentimiento de cookies.`,
          `<strong>Mensajería:</strong> Meta (WhatsApp Ireland Ltd.) si nos contactas por WhatsApp.`,
          `Algunos de estos proveedores pueden implicar transferencias internacionales de datos fuera del EEE; en tales casos, se realizan al amparo de las garantías previstas en el RGPD (cláusulas contractuales tipo aprobadas por la Comisión Europea).`,
        ],
      },
      {
        h: '6. Tus derechos',
        p: [
          `Puedes ejercer en cualquier momento los derechos de <strong>acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong> escribiendo a <a href="mailto:${titular.email}">${titular.email}</a> con copia de tu DNI o documento equivalente.`,
          `Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).`,
        ],
      },
      {
        h: '7. Seguridad',
        p: [
          `Aplicamos medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, alteración, pérdida o tratamiento no autorizado.`,
        ],
      },
    ],
  },

  eu: {
    title: 'Pribatutasun Politika',
    sections: [
      {
        h: '1. Tratamenduaren arduraduna',
        p: [
          `<strong>Arduraduna:</strong> ${titular.legalName}.`,
          `<strong>NAN / IFK:</strong> ${titular.taxId}.`,
          `<strong>Helbidea:</strong> ${titular.address}.`,
          `<strong>Emaila:</strong> ${titular.email}.`,
        ],
      },
      {
        h: '2. Tratatzen ditugun datuak',
        p: [
          `Webgune honetan ez dira datu pertsonalak zuzenean biltzen, gurekin harremanetan jartzeko (telefonoz, WhatsApp-ez, emailez edo sare sozialez) edo TheFork plataformaren bidez erreserba bat egitean borondatez ematen dizkiguzunak izan ezik.`,
          `Ohiko datuak: izena, telefono zenbakia, emaila, erreserba data eta ordua, mahaikide kopurua eta, hala badagokio, oharrak (alergiak, lehentasunak).`,
        ],
      },
      {
        h: '3. Helburuak eta oinarri legala',
        p: [
          `<strong>Galderak erantzun:</strong> zure galderak erantzuteko erabiltzen ditugu datuak. Oinarri legala: interesdunaren baimena (RGPD 6.1.a art.).`,
          `<strong>Erreserbak kudeatu:</strong> mahaia erreserbatzeko eta jatetxe-zerbitzua emateko erabiltzen ditugu datuak. Oinarri legala: kontratua exekutatzea (RGPD 6.1.b art.).`,
          `<strong>Legezko betebeharrak:</strong> zenbait datu gordetzen ditugu kontabilitatezko, zergetako eta administraziozko betebeharrak betetzeko. Oinarri legala: legezko betebeharra (RGPD 6.1.c art.).`,
        ],
      },
      {
        h: '4. Kontserbazio epeak',
        p: [
          `Datuak bezeroarekiko harremanak irauten duen bitartean kontserbatuko dira eta, ondoren, legezko epeetan zehar (bereziki, zerga eta merkataritza arloko epeak, 6 urtera arte irits daitezkeenak).`,
        ],
      },
      {
        h: '5. Hartzaileak eta tratamenduaren eragileak',
        p: [
          `Ez ditugu datuak hirugarrenei lagatzen, legezko betebeharra ez bada. Hornitzaile batzuek datuetara sartzen dira tratamenduaren eragile gisa, sinatutako kontratuaren arabera:`,
          `<strong>Hosting:</strong> Cloudflare, Inc. / Vercel, Inc. (azken inplementazioaren arabera).`,
          `<strong>Erreserbak online:</strong> TheFork (Tripadvisor) — integratutako erreserben widgeta erabiltzen denean.`,
          `<strong>Mapa:</strong> Google Ireland Ltd. — kontaktu orrian Google Maps mapa kargatzean, cookien aurretiazko baimenarekin.`,
          `<strong>Mezularitza:</strong> Meta (WhatsApp Ireland Ltd.) WhatsApp-ez harremanetan jartzen bazara.`,
          `Hornitzaile horietako batzuek EEEtik kanpoko nazioarteko datu-transferentziak ekar ditzakete; halakoetan, RGPDak aurreikusitako bermeen babesean egiten dira (Europako Batzordeak onartutako kontratu-klausula tipikoak).`,
        ],
      },
      {
        h: '6. Zure eskubideak',
        p: [
          `Edozein unetan baliatu ditzakezu <strong>sarbide, zuzenketa, ezabatze, aurkaritza, tratamendua mugatze eta eramangarritasun</strong> eskubideak, <a href="mailto:${titular.email}">${titular.email}</a> helbidera idatziz, NANaren edo baliokidearen kopia atxikita.`,
          `Tratamendua araudiarekin bat ez datorrela uste baduzu, erreklamazio bat aurkez dezakezu <strong>Datuak Babesteko Espainiako Agentzian</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).`,
        ],
      },
      {
        h: '7. Segurtasuna',
        p: [
          `Datu pertsonalak baimenik gabeko sarbide, aldaketa, galera edo baimenik gabeko tratamenduaren aurka babesteko neurri tekniko eta antolaketa-neurri arrazoizkoak aplikatzen ditugu.`,
        ],
      },
    ],
  },
} as const;

/* ============================================================
   POLÍTICA DE COOKIES
   ============================================================ */

// Lista de cookies declarada al usuario (mantener sincronizada con la realidad)
export const cookieList = [
  {
    name: 'erreka_cookie_consent',
    provider: 'Erreka Meet Point',
    purpose: {
      es: 'Almacena tus preferencias de consentimiento de cookies.',
      eu: 'Cookien baimenari buruzko zure hobespenak gordetzen ditu.',
    },
    duration: { es: '12 meses', eu: '12 hilabete' },
    type: 'technical',
  },
] as const;

export const cookies = {
  es: {
    title: 'Política de Cookies',
    sections: [
      {
        h: '1. ¿Qué son las cookies?',
        p: [
          `Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo cuando los visitas. Permiten recordar información sobre tu visita, como el idioma o las preferencias de visualización, y se utilizan también con fines técnicos, analíticos o publicitarios.`,
        ],
      },
      {
        h: '2. ¿Qué cookies utilizamos?',
        p: [
          `Esta web utiliza únicamente cookies <strong>técnicas estrictamente necesarias</strong> para guardar tus preferencias de consentimiento. No utilizamos cookies analíticas ni publicitarias propias.`,
          `Sin embargo, al cargar contenidos embebidos de terceros (Google Maps en la página de contacto, fuentes web), pueden instalarse cookies de esos terceros bajo sus respectivas políticas.`,
        ],
      },
      {
        h: '3. Cookies de terceros',
        p: [
          `<strong>Google Maps (Google Ireland Ltd.)</strong>: si das tu consentimiento, al cargar el mapa de la página de contacto se instalarán cookies de Google. Más información: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.`,
          `<strong>Google Fonts (Google Ireland Ltd.)</strong>: las tipografías se cargan desde servidores de Google. No se instalan cookies, pero la conexión revela tu IP a Google. Más información en el enlace anterior.`,
          `Estos servicios no se cargan hasta que aceptes la categoría correspondiente en el banner de cookies.`,
        ],
      },
      {
        h: '4. Gestión y revocación del consentimiento',
        p: [
          `Puedes aceptar, rechazar o configurar las cookies desde el banner que aparece al entrar en la web. Si quieres modificar tus preferencias, pulsa el enlace "Configurar cookies" del pie de página.`,
          `Adicionalmente, puedes bloquear o eliminar las cookies desde la configuración de tu navegador. Cada navegador permite hacerlo de forma distinta — consulta la ayuda de tu navegador para más detalles.`,
        ],
      },
      {
        h: '5. Más información',
        p: [
          `Para más información sobre el tratamiento de tus datos personales, consulta nuestra <a href="/es/privacidad">Política de Privacidad</a>.`,
        ],
      },
    ],
    table: {
      caption: 'Cookies utilizadas',
      headers: ['Nombre', 'Proveedor', 'Finalidad', 'Duración', 'Tipo'],
      typeLabels: {
        technical: 'Técnica · Necesaria',
        analytics: 'Analítica',
        marketing: 'Marketing',
      } as Record<string, string>,
    },
  },

  eu: {
    title: 'Cookien Politika',
    sections: [
      {
        h: '1. Zer dira cookieak?',
        p: [
          `Cookieak webguneek bisitatzen dituzunean zure gailuan jartzen dituzten testu fitxategi txikiak dira. Zure bisitari buruzko informazioa gogoratzeko balio dute (hizkuntza edo bistaratze hobespenak, esaterako), eta helburu tekniko, analitiko edo publizitarioekin ere erabiltzen dira.`,
        ],
      },
      {
        h: '2. Zein cookie erabiltzen ditugu?',
        p: [
          `Web honek <strong>guztiz beharrezkoak diren cookie teknikoak</strong> baino ez ditu erabiltzen, zure baimen-hobespenak gordetzeko. Ez dugu cookie analitiko edo publizitario propiorik erabiltzen.`,
          `Hala ere, hirugarrenen edukiak kargatzean (Google Maps kontaktu orrian, web-letra-tipoak), hirugarren horien cookieak instala daitezke beren politika propioen arabera.`,
        ],
      },
      {
        h: '3. Hirugarrenen cookieak',
        p: [
          `<strong>Google Maps (Google Ireland Ltd.)</strong>: zure baimena ematen baduzu, kontaktu orriko mapa kargatzean Google-ren cookieak instalatuko dira. Informazio gehiago: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.`,
          `<strong>Google Fonts (Google Ireland Ltd.)</strong>: letra-tipoak Google-ren zerbitzarietatik kargatzen dira. Ez dira cookieak instalatzen, baina konexioak zure IP-a erakusten dio Google-ri. Informazio gehiago aurreko estekan.`,
          `Zerbitzu hauek ez dira kargatuko zuk dagokion kategoria onartu arte cookien banneretik.`,
        ],
      },
      {
        h: '4. Baimena kudeatzea eta atzera botatzea',
        p: [
          `Cookieak onartu, baztertu edo konfiguratu ditzakezu webean sartzean agertzen den banneretik. Zure hobespenak aldatu nahi badituzu, sakatu orri-oineko "Cookieak konfiguratu" esteka.`,
          `Era berean, cookieak blokeatu edo ezabatu ditzakezu zure nabigatzailearen ezarpenetatik. Nabigatzaile bakoitzak modu desberdinean egiten du — kontsultatu zure nabigatzailearen laguntza xehetasun gehiagorako.`,
        ],
      },
      {
        h: '5. Informazio gehiago',
        p: [
          `Zure datu pertsonalen tratamenduari buruzko informazio gehiago lortzeko, kontsultatu gure <a href="/eu/pribatutasuna">Pribatutasun Politika</a>.`,
        ],
      },
    ],
    table: {
      caption: 'Erabilitako cookieak',
      headers: ['Izena', 'Hornitzailea', 'Helburua', 'Iraupena', 'Mota'],
      typeLabels: {
        technical: 'Teknikoa · Beharrezkoa',
        analytics: 'Analitikoa',
        marketing: 'Marketina',
      } as Record<string, string>,
    },
  },
} as const;
