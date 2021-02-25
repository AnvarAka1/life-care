const bcrypt = require('bcrypt')

const User = require('../../models/user')
const { adminNavigation } = require('../navigation')

module.exports = {
  resource: User,
  options: {
    navigation: adminNavigation,
    properties: {
      encryptedPassword: {
        isVisible: false
      },
      password: {
        type: 'password',
        isVisible: {
          list: false, edit: true, filter: false, show: false
        }
      }
    },
    actions: {
      new: {
        before: async request => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(request.payload.password, 10),
              password: undefined
            }
          }
          return request
        }
      }
    }
  }
}
