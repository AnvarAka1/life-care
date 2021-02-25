const Service = require('../../models/service')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Service,
  options: {
    navigation: contentNavigation
  }
}
