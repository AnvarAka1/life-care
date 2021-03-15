const { model, Schema } = require('mongoose')

const serviceSchema = new Schema({
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

module.exports = model('Service', serviceSchema)
