const { model, Schema } = require('mongoose')

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = model('Appointment', appointmentSchema)
