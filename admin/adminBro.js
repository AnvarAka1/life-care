const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const Blog = require('./resources/Blog')
const Advantage = require('./resources/Advantage')
const Slideshow = require('./resources/Slideshow')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBroOptions = {
  resources: [
    Blog,
    Advantage,
    Slideshow
  ],

  dashboard: {
  },
  rootPath: '/admin',
}

const adminBro = new AdminBro(adminBroOptions)

exports.adminBroRouter = AdminBroExpress.buildRouter(adminBro)
exports.adminBro = adminBro
