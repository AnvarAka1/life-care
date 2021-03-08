const { model, Schema } = require('mongoose')

const partnerSchema = new Schema({
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
    type: String,
  },
  key: {},
  mimeType: {},
  bucket: {},
  size: {}
}, { timestamps: true })

module.exports = model('Partner', partnerSchema)
