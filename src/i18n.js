import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import eu from './locales/eu.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
  eu: { translation: eu }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
  })

export default i18n
