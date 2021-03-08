const { model, Schema } = require('mongoose')

const advantageSchema = new Schema({
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
  }
}, { timestamps: true })

module.exports = model('Advantage', advantageSchema)
