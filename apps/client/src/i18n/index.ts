import es from './es.json';
import en from './en.json';

type Locale = 'es' | 'en';
const locales = { es, en };

let currentLocale: Locale = 'es';

export function setLocale(locale: Locale) {
  currentLocale = locale;
}

export function t(path: string): string {
  const keys = path.split('.');
  let value: any = locales[currentLocale];
  for (const key of keys) {
    value = value?.[key];
    if (!value) return path; // fallback: devuelve la key si no existe
  }
  return value;
}
