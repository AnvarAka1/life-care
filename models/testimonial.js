const { model, Schema } = require('mongoose')

const testimonialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  }
})

module.exports = model('Testimonial', testimonialSchema)
