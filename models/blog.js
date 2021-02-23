const { model, Schema } = require('mongoose')

const blogSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

})

module.exports = model('Blog', blogSchema)
