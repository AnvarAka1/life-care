const Blog = require('../models/blog')
const Slideshow = require('../models/slideshow')
const Advantage = require('../models/advantage')
const Service = require('../models/service')
const Achievement = require('../models/achievement')
const Testimonial = require('../models/testimonial')
const Partner = require('../models/partner')

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
      return Service.find()
    })
    .then(results => {
      services = results
      return Achievement.findOne()
    })
    .then(result => {
      achievement = result
      return Testimonial.find()
    })
    .then(results => {
      testimonials = results
      return Blog.find()
        .limit(3)
    })
    .then(results => {
      blogs = results
      return Partner.find()
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
  Blog.find()
    .then(list => res.render('blog-list', { list }))
    .catch(err => console.log(err))
}

exports.getBlogDetail = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(blog => res.render('blog-detail', { blog }))
    .catch(err => console.log(err))
}
