const Blog = require('../models/blog')
const Slideshow = require('../models/slideshow')
const Advantage = require('../models/advantage')
const Service = require('../models/service')
const Achievement = require('../models/achievement')
const Testimonial = require('../models/testimonial')
const Partner = require('../models/partner')
const { getPagination } = require('../utils/pagination')

const ITEMS_PER_PAGE = 12

exports.getIndex = (req, res, next) => {
  let slideshowItems = null
  let advantage = null
  let services = null
  let achievement = null
  let testimonials = null
  let blogs = null
  let partners = null

  Slideshow.find()
    .then(results => {
      slideshowItems = results

      return Advantage.findOne()
    })
    .then(result => {
      advantage = result
      return Service.find().lean()
    })
    .then(results => {
      services = results
      return Achievement.findOne().lean()
    })
    .then(result => {
      achievement = result
      return Testimonial.find().lean()
    })
    .then(results => {
      testimonials = results
      return Blog.find().lean()
        .limit(3)
    })
    .then(results => {
      blogs = results
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
        achievement,
        testimonials,
        partners,
        blogs
      })
    })
    .catch(error => console.log(error))
}

exports.getBlogList = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  let pagination = null

  Blog.find()
    .count()
    .then(count => {
      pagination = getPagination({ page, count }, 10)
      return Blog.find()
        .skip(pagination.skipValue)
        .limit(ITEMS_PER_PAGE)
        .lean()
        .then(list => {
          res.render('blog-list', {
            pageTitle: 'Blogs',
            list,
            pagination: pagination.view
          })
        })
    })

    .catch(err => console.log(err))
}

exports.getBlogDetail = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => res.render('blog-detail', { blog }))
    .catch(err => console.log(err))
}
