const { pipe, fromPairs, toPairs, map, is } = require('ramda')

const getTranslatedItem = (lang, item) =>
  pipe(
    toPairs,
    map(([key, value]) =>
      is(Object, value) && key !== '_id'
        ? [key, value[lang]]
        : [key, value]
    ),
    fromPairs
  )(item)

const getTranslatedList = (lang, list) => map(obj => getTranslatedItem(lang, obj), list)

exports.getTranslatedItem = getTranslatedItem
exports.getTranslatedList = getTranslatedList
