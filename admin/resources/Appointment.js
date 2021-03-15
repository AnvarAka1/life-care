const Appointment = require('../../models/appointment')
const { contentNavigation } = require('../navigation')

module.exports = {
  resource: Appointment,
  options: {
    navigation: contentNavigation
  }
}
