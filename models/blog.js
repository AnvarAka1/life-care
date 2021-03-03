const { model, Schema } = require('mongoose')

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  shortDescription: {
    type: String,
    required: true
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

module.exports = model('Blog', blogSchema)
