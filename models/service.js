const { model, Schema } = require('mongoose')

const serviceSchema = new Schema({
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

module.exports = model('Service', serviceSchema)
