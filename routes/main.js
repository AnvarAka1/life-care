const { Router } = require('express')

const indexController = require('../controllers/index')
const blogController = require('../controllers/blog')
const treatmentController = require('../controllers/treatment')

const router = new Router()

router.get('/', indexController.getIndex)
router.get('/blogs', blogController.getBlogList)
router.get('/blogs/:id', blogController.getBlogDetail)

router.get('/treatments', treatmentController.getTreatmentList)
router.get('/treatments/:id', treatmentController.getTreatmentDetail)

router.post('/appointment', indexController.postAppointment)

module.exports = router
