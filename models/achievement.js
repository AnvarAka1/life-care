const { model, Schema } = require('mongoose')

const achievementSchema = new Schema({
  doctorNumber: {
    type: Number,
    required: true
  },
  branchNumber: {
    type: Number,
    required: true
  },
  patientNumber: {
    type: Number,
    required: true
  },
  awardNumber: {
    type: Number,
    required: true
  }
})

module.exports = model('Achievement', achievementSchema)
