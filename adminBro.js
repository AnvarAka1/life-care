const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const Blog = require('./models/blog')
const Advantage = require('./models/advantage')
const Slideshow = require('./models/slideshow')

AdminBro.registerAdapter(AdminBroMongoose)

const contentNavigation = {
  name: 'main',
  icon: 'Star',
}

const adminBroOptions = {
  resources: [
    { resource: Blog, options: { navigation: contentNavigation } },
    { resource: Advantage, options: { navigation: contentNavigation } },
    { resource: Slideshow, options: { navigation: contentNavigation } },
  ],
  rootPath: '/admin',
}

const adminBro = new AdminBro(adminBroOptions)

exports.adminBroRouter = AdminBroExpress.buildRouter(adminBro)
exports.adminBro = adminBro
