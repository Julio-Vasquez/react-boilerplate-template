import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { EN, ES } from './resources'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    fallbackLng: 'es',
    lng: 'es',
    resources: {
        en: { translation: EN },
        es: { translation: ES },
    },
})

export default i18n
