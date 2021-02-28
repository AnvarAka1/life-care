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
}, { timestamps: true })

module.exports = model('Partner', partnerSchema)
