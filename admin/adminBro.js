const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const bcrypt = require('bcrypt')

const { hideEditTimestamps, withImage } = require('./utils')
const User = require('./resources/User')
const Blog = require('./resources/Blog')
const Advantage = require('./resources/Advantage')
const Slideshow = require('./resources/Slideshow')
const Service = require('./resources/Service')
const Achievement = require('./resources/Achievement')
const Testimonial = require('./resources/Testimonial')
const Partner = require('./resources/Partner')
const Treatment = require('./resources/Treatment')
const Appointment = require('./resources/Appointment')

const UserModel = require('../models/user')

AdminBro.registerAdapter(AdminBroMongoose)

const withAuth = true

const resources = [
  hideEditTimestamps(User),
  withImage(hideEditTimestamps(Blog)),
  hideEditTimestamps(Advantage),
  withImage(hideEditTimestamps(Slideshow)),
  withImage(hideEditTimestamps(Service)),
  withImage(hideEditTimestamps(Treatment)),
  hideEditTimestamps(Achievement),
  withImage(hideEditTimestamps(Testimonial)),
  withImage(hideEditTimestamps(Partner)),
  hideEditTimestamps(Appointment),
]

const adminBroOptions = {
  resources,
  dashboard: {
    // component: AdminBro.bundle('./components/dashboard')
  },
  rootPath: '/admin',
}

const adminBro = new AdminBro(adminBroOptions)

const authRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await UserModel.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'something-like-this123'
})

const simpleRouter = AdminBroExpress.buildRouter(adminBro)

exports.adminBroRouter = withAuth ? authRouter : simpleRouter

exports.adminBro = adminBro
