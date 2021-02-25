const Blog = require('../models/blog')
const Slideshow = require('../models/slideshow')
const Advantage = require('../models/advantage')
const Service = require('../models/service')
const Achievement = require('../models/achievement')

exports.getIndex = (req, res, next) => {
  let slideshowItems = null
  let advantage = null
  let services = null
  let achievement = null

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
      return Promise.resolve()
    })
    .then(() => {
      return res.render('index', {
        slideshowItems,
        advantage,
        services,
        achievement
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
