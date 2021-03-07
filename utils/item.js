const { pipe } = require('ramda')

const { getDateFormattedItem } = require('./date')
const { getTranslatedItem } = require('./language')

const getFormattedItem = (language, item) => pipe(
  getDateFormattedItem,
  newItem => getTranslatedItem(language, newItem)
)(item)

exports.getFormattedItem = getFormattedItem
