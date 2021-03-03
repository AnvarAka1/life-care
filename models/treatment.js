const { model, Schema } = require('mongoose')

const treatmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  key: {},
  mimeType: {},
  bucket: {},
  size: {}

}, { timestamps: true })

module.exports = model('Treatment', treatmentSchema)
