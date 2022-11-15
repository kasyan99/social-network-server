const Router = require('express')
const router = new Router()
const AuthController = require('../controllers/authController')

//api/auth
router.get('/', AuthController.checkLogin)
router.get('/me', AuthController.me)
router.post('/', AuthController.login)
router.delete('/', AuthController.logout)

module.exports = router