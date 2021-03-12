const Blog = require('../models/blog')
const { getPagination } = require('../utils/pagination')
const { getFormattedList } = require('../utils/list')
const { getFormattedItem } = require('../utils/item')

const ITEMS_PER_PAGE = 12

exports.getBlogList = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  let pagination = null

  Blog.find()
    .count()
    .then(count => {
      pagination = getPagination({
        page,
        count
      }, 10)
      return Blog.find()
        .sort({ _id: 'desc' })
        .skip(pagination.skipValue)
        .limit(ITEMS_PER_PAGE)
        .lean()
        .then(list => {
          res.render('blog-list', {
            pageTitle: 'Blogs',
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

exports.getBlogDetail = (req, res, next) => {
  const id = req.params.id
  let recentBlogs = null
  Blog
    .find({ _id: { $ne: id } })
    .sort({ _id: 'desc' })
    .limit(10)
    .lean()
    .then(list => {
      recentBlogs = list
      return Blog.findById(id).lean()
    })
    .then(blog => res.render('blog-detail', {
      recentBlogs: getFormattedList(req.language, recentBlogs),
      blog: getFormattedItem(req.language, blog)
    }))
    .catch(err => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}
