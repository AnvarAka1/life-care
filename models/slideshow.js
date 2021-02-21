const { model, Schema } = require('mongoose')

const slideShowSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

})

module.exports = model('Slideshow', slideShowSchema)
