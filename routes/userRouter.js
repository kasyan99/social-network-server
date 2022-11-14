const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

//api/
router.get('/', userController.getAll)
router.get('/find', userController.getOneById)
module.exports = router