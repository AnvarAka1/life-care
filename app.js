const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const { adminBro, adminBroRouter } = require('./adminBro')
const mainRoutes = require('./routes/main')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const MONGODB_URI = 'mongodb+srv://anvar_aka:mongodb_password@cluster0.waage.mongodb.net/medela?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(adminBro.options.rootPath, adminBroRouter)

app.use(mainRoutes)

app.listen(3001, () => {
  console.log('hey, I am running!')
})
