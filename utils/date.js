const moment = require('moment')
const { map } = require('ramda')

const getDateFormattedItem = item => ({
  ...item,
  createdAt: moment(item.createdAt).format('L'),
  updatedAt: moment(item.updatedAt).format('L')
})

exports.getDateFormattedItem = getDateFormattedItem
exports.getDateFormattedList = map(getDateFormattedItem)
