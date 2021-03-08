const Blog = require('../models/blog')
const Slideshow = require('../models/slideshow')
const Advantage = require('../models/advantage')
const Service = require('../models/service')
const Achievement = require('../models/achievement')
const Testimonial = require('../models/testimonial')
const Partner = require('../models/partner')
const Treatment = require('../models/treatment')
const { getFormattedItem } = require('../utils/item')
const { getFormattedList } = require('../utils/list')

exports.getIndex = (req, res, next) => {
  let slideshowItems = null
  let advantage = null
  let services = null
  let treatments = null
  let achievement = null
  let testimonials = null
  let blogs = null
  let partners = null
  return Slideshow.find({}).limit(10).lean()
    .then(results => {
      slideshowItems = getFormattedList(req.language, results)
      return Advantage.findOne().lean()
    })
    .then(result => {
      advantage = getFormattedItem(req.language, result)
      return Service.find({}).limit(6).lean()
    })
    .then(results => {
      services = getFormattedList(req.language, results)
      return Treatment.find({}).limit(6).lean()
    })
    .then(results => {
      treatments = getFormattedList(req.language, results)
      return Achievement.findOne().lean()
    })
    .then(result => {
      achievement = getFormattedItem(req.language, result)
      return Testimonial.find({}).limit(10).lean()
    })
    .then(results => {
      testimonials = getFormattedList(req.language, results)
      return Blog.find({}).sort({ _id: 'desc' }).lean().limit(3)
    })
    .then(results => {
      blogs = getFormattedList(req.language, results)
      return Partner.find({}).lean()
    })
    .then(results => {
      partners = getFormattedList(req.language, results)
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
