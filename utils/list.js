const { pipe } = require('ramda')

const { getDateFormattedList } = require('./date')
const { getTranslatedList } = require('./language')

const getFormattedList = (language, list) => pipe(
  getDateFormattedList,
  newList => getTranslatedList(language, newList)
)(list)

exports.getFormattedList = getFormattedList
