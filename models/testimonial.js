const { model, Schema } = require('mongoose')

const testimonialSchema = new Schema({
  name: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  position: {
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
    required: true
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
  review: {
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

module.exports = model('Testimonial', testimonialSchema)
