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

const getSlideshows = () => Slideshow.find({}).limit(10).lean()
const getAdvantage = () => Advantage.findOne().lean()
const getServices = () => Service.find({}).limit(6).lean()
const getTreatments = () => Treatment.find({}).limit(6).lean()
const getAchievement = () => Achievement.findOne().lean()
const getTestimonial = () => Testimonial.find({}).limit(10).lean()
const getBlogs = () => Blog.find({}).sort({ _id: 'desc' }).lean().limit(3)
const getPartners = () => Partner.find({}).lean()

exports.getIndex = (req, res, next) => {
  return Promise.all([
    getSlideshows(),
    getAdvantage(),
    getServices(),
    getTreatments(),
    getAchievement(),
    getTestimonial(),
    getBlogs(),
    getPartners()
  ])
    .then(([
      slideshows,
      advantageItems,
      serviceItems,
      treatmentItems,
      achievementItem,
      testimonialItems,
      blogItems,
      partnersItems
    ]) => {
      const slideshowItems = getFormattedList(req.language, slideshows)
      const advantage = getFormattedItem(req.language, advantageItems)
      const services = getFormattedList(req.language, serviceItems)
      const treatments = getFormattedList(req.language, treatmentItems)
      const achievement = getFormattedItem(req.language, achievementItem)
      const testimonials = getFormattedList(req.language, testimonialItems)
      const blogs = getFormattedList(req.language, blogItems)
      const partners = getFormattedList(req.language, partnersItems)

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
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
