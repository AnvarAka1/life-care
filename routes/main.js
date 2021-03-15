const { Router } = require('express')

const indexController = require('../controllers/index')
const blogController = require('../controllers/blog')

const router = new Router()

router.get('/', indexController.getIndex)
router.get('/blogs', blogController.getBlogList)
router.get('/blogs/:id', blogController.getBlogDetail)

router.post('/appointment', indexController.postAppointment)

module.exports = router
