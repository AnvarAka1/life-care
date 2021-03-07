const path = require('path')

const i18next = require('i18next')
const Backend = require('i18next-node-fs-backend')
const i18nextMiddleware = require('i18next-http-middleware')

i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, 'locales', '{{lng}}', 'translation.json')
    },
    // debug: true,
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    },
    keySeparator: 'false',
    fallbackLng: 'ru',
    preload: ['en', 'ru'],
    saveMissing: true,
  })

module.exports = i18nextMiddleware.handle(i18next)
