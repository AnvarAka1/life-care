const { Router } = require('express')

const mainController = require('../controllers/main')

const router = new Router()

router.get('/', mainController.getIndex)
router.get('/blogs', mainController.getBlogList)
router.get('/blogs/:id', mainController.getBlogDetail)

module.exports = router
