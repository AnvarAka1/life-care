const Testimonial = require('../../models/testimonial')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Testimonial,
  options: {
    navigation: contentNavigation
  }
}
