const { model, Schema } = require('mongoose')

const slideShowSchema = new Schema({
  image: {
    type: String
  },
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

module.exports = model('Slideshow', slideShowSchema)
