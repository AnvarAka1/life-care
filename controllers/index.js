const i18next = require('i18next')

const Blog = require('../models/blog')
const Slideshow = require('../models/slideshow')
const Advantage = require('../models/advantage')
const Service = require('../models/service')
const Achievement = require('../models/achievement')
const Testimonial = require('../models/testimonial')
const Partner = require('../models/partner')
const Treatment = require('../models/treatment')
const { getDateFormattedList } = require('../utils/date')

exports.getIndex = (req, res, next) => {
  console.log('req.i18n', req.language, req.languages)
  let slideshowItems = null
  let advantage = null
  let services = null
  let treatments = null
  let achievement = null
  let testimonials = null
  let blogs = null
  let partners = null

  Slideshow.find()
    .then(results => {
      slideshowItems = results

      return Advantage.findOne().lean()
    })
    .then(result => {
      advantage = result
      return Service.find().limit(6).lean()
    })
    .then(results => {
      services = results
      return Treatment.find().limit(6).lean()
    })
    .then(results => {
      treatments = results
      return Achievement.findOne().lean()
    })
    .then(result => {
      achievement = result
      return Testimonial.find().lean()
    })
    .then(results => {
      testimonials = results
      return Blog.find().sort({ _id: 'desc' }).lean().limit(3)
    })
    .then(results => {
      blogs = getDateFormattedList(results)
      return Partner.find().lean()
    })
    .then(results => {
      partners = results
      return Promise.resolve()
    })
    .then(() => {
      return res.render('index', {
        slideshowItems,
        advantage,
        services,
        treatments,
        achievement,
        testimonials,
        partners,
        blogs
      })
    })
    .catch(error => console.log(error))
}
