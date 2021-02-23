const Slideshow = require('../../models/slideshow')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Slideshow,
  options: {
    navigation: contentNavigation,
    properties: {
      description: {
        type: 'richtext'
      }
    }
  }
}
