const { model, Schema } = require('mongoose')

const treatmentSchema = new Schema({
  title: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  image: {
    type: String
  },
  description: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  key: {},
  mimeType: {},
  bucket: {},
  size: {}

}, { timestamps: true })

module.exports = model('Treatment', treatmentSchema)
