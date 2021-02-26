const { model, Schema } = require('mongoose')

const partnerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = model('Partner', partnerSchema)
