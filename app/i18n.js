import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import moment from 'moment';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ar'];

const options = {
  // order and from where user language should be detected
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .on('languageChanged', (lng) => {
    moment.locale(lng);
  })

  .init({
    lng: 'en',
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    debug: true,
    backend: {
      loadPath: `./locales/{{lng}}/{{ns}}.json`,
    },
    whitelist: availableLanguages,
    detection: options,
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'moment')
          return moment(value.date).locale(lng).format(value.format);
        return value;
      },
    },
  });

export default i18n;
