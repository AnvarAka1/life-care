const Partner = require('../../models/partner')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Partner,
  options: {
    navigation: contentNavigation
  }
}
