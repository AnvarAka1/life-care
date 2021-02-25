const Achievement = require('../../models/achievement')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Achievement,
  options: {
    navigation: contentNavigation
  }
}
