import es from './es.json';
import eu from './eu.json';

export type Lang = 'es' | 'eu';

const dictionaries = { es, eu } as const;

export const defaultLang: Lang = 'es';
export const supportedLangs: Lang[] = ['es', 'eu'];

/**
 * Obtiene el diccionario completo para un idioma
 */
export function getDict(lang: Lang) {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

/**
 * Función traductora con notación punteada: t('home.hero.tagline')
 */
export function useTranslations(lang: Lang) {
  const dict = getDict(lang);
  return function t(key: string): string {
    const parts = key.split('.');
    let cur: any = dict;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) {
        cur = cur[p];
      } else {
        // Fallback al diccionario por defecto si no existe la clave
        let fallback: any = dictionaries[defaultLang];
        for (const fp of parts) {
          if (fallback && typeof fallback === 'object' && fp in fallback) {
            fallback = fallback[fp];
          } else {
            return key; // Si tampoco hay fallback, devolvemos la clave
          }
        }
        return typeof fallback === 'string' ? fallback : key;
      }
    }
    return typeof cur === 'string' ? cur : key;
  };
}

/**
 * Devuelve un array (para listas en JSON)
 */
export function useArray(lang: Lang) {
  const dict = getDict(lang);
  return function arr(key: string): string[] {
    const parts = key.split('.');
    let cur: any = dict;
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
      else return [];
    }
    return Array.isArray(cur) ? cur : [];
  };
}

/**
 * Construye una ruta con prefijo de idioma
 */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean === '/' ? '' : clean}`;
}
