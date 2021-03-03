const { Router } = require('express')

const indexController = require('../controllers/index')
const blogController = require('../controllers/blog')

const router = new Router()

router.get('/', indexController.getIndex)
router.get('/blogs', blogController.getBlogList)
router.get('/blogs/:id', blogController.getBlogDetail)

module.exports = router
