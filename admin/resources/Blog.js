const Blog = require('../../models/blog')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Blog,
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
