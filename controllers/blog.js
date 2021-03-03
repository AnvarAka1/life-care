const Blog = require('../models/blog')
const { getPagination } = require('../utils/pagination')
const { getDateFormattedList, getDateFormattedItem } = require('../utils/date')

const ITEMS_PER_PAGE = 12

exports.getBlogList = (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  let pagination = null

  Blog.find()
    .count()
    .then(count => {
      pagination = getPagination({ page, count }, 10)
      return Blog.find()
        .sort({ _id: 'desc' })
        .skip(pagination.skipValue)
        .limit(ITEMS_PER_PAGE)
        .lean()
        .then(list => {
          res.render('blog-list', {
            pageTitle: 'Blogs',
            list: getDateFormattedList(list),
            pagination: pagination.view
          })
        })
    })

    .catch(err => console.log(err))
}

exports.getBlogDetail = (req, res, next) => {
  Blog.findById(req.params.id)
    .lean()
    .then(blog => res.render('blog-detail', { blog: getDateFormattedItem(blog) }))
    .catch(err => console.log(err))
}
