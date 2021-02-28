const { model, Schema } = require('mongoose')

const advantageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

}, { timestamps: true })

module.exports = model('Advantage', advantageSchema)
