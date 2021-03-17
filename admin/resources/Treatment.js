const Treatment = require('../../models/treatment')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Treatment,
  options: {
    navigation: contentNavigation,
    properties: {
      _id: {
        isTitle: true
      },
      'description.en': {
        type: 'richtext'
      },
      'description.ru': {
        type: 'richtext'
      }
    }
  }
}
