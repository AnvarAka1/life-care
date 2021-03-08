const Advantage = require('../../models/advantage')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Advantage,
  options: {
    navigation: contentNavigation,
    actions: {
      new: { isVisible: false },
      delete: { isVisible: false },
      filter: { isVisible: false },
      show: { isVisible: false },
      bulkDelete: { isVisible: false }
    }
  }

}
