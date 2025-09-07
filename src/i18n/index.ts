import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';
import no from './locales/no.json';
import at from './locales/at.json';
import fi from './locales/fi.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  es: { translation: es },
  no: { translation: no },
  at: { translation: at },
  fi: { translation: fi },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false, // Debug disabled
    
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
      caches: [], // Disable localStorage cache to force refresh
    },

    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;