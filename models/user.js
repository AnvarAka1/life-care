const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  encryptedPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'restricted'],
    required: true
  }
})

module.exports = model('User', userSchema)
