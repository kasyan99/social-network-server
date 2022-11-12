const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

//api/user
router.get('/', userController.getAll)

module.exports = router