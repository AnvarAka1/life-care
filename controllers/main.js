const Blog = require('../models/blog')

exports.getIndex = (req, res, next) => {
  return res.render('index')
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
