const Treatment = require('../models/treatment')
const { getFormattedList } = require('../utils/list')
const { getFormattedItem } = require('../utils/item')
const { getPagination } = require('../utils/pagination')

const ITEMS_PER_PAGE = 12

exports.getTreatmentList = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  let pagination = null

  Treatment.find()
    .count()
    .then(count => {
      pagination = getPagination({
        page,
        count
      }, 10)
      return Treatment.find()
        .sort({ _id: 'desc' })
        .skip(pagination.skipValue)
        .limit(ITEMS_PER_PAGE)
        .lean()
        .then(list => {
          res.render('treatment-list', {
            pageTitle: 'Treatments',
            list: getFormattedList(req.language, list),
            pagination: pagination.view
          })
        })
    })

    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}

exports.getTreatmentDetail = (req, res, next) => {
  const id = req.params.id
  let recentTreatments = null
  Treatment
    .find({ _id: { $ne: id } })
    .sort({ _id: 'desc' })
    .limit(10)
    .lean()
    .then(list => {
      recentTreatments = list
      return Treatment.findById(id).lean()
    })
    .then(treatment => res.render('treatment-detail', {
      recentTreatments: getFormattedList(req.language, recentTreatments),
      treatment: getFormattedItem(req.language, treatment)
    }))
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
