const Advantage = require('../../models/advantage')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Advantage,
  options: {
    navigation: contentNavigation,
    properties: {
      description: {
        type: 'richtext'
      }
    }
  }

}
