const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const i18next = require('./i18next')
const { adminBro, adminBroRouter } = require('./admin/adminBro')
const errorController = require('./controllers/error')
const mainRoutes = require('./routes/main')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const MONGODB_URI = 'mongodb+srv://root:e2XHOSxPuEcj7nnb@medellacluster.rrkyv.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(i18next)
app.use(adminBro.options.rootPath, adminBroRouter)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mainRoutes)

app.get('/500', errorController.get500)

app.use(errorController.get404)

app.use((error, req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500'
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('hey, I am running!')
})
