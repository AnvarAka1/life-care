const {
  pipe,
  defaultTo
} = require('ramda')

const { getDateFormattedItem } = require('./date')
const { getTranslatedItem } = require('./language')

const getFormattedItem = (language, item) => pipe(
  defaultTo({}),
  getDateFormattedItem,
  newItem => getTranslatedItem(language, newItem)
)(item)

exports.getFormattedItem = getFormattedItem
