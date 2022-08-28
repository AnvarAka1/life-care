const path = require('path')

const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const i18next = require('./i18next')
const { adminBro, adminBroRouter } = require('./admin/adminBro')
const errorController = require('./controllers/error')
const mainRoutes = require('./routes/main')

const app = express()

Sentry.init({
  dsn: 'https://bfe427a17d184af08ccda88b8721cd84@o1381528.ingest.sentry.io/6695166',
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler())
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler())

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const MONGODB_URI = 'mongodb+srv://anvar_aka:mongodb_password@cluster0.waage.mongodb.net/medela?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(i18next)
app.use(adminBro.options.rootPath, adminBroRouter)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mainRoutes)

app.get('/500', errorController.get500)

app.use(errorController.get404)

app.use(Sentry.Handlers.errorHandler())

app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500'
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('hey, I am running!')
})
