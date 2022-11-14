const { Auth, AuthMe } = require('../models/models')

class AuthController {
   async me(req, res) {
      const [data] = await AuthMe.find()

      return res.json(data.me)
   }

   async checkLogin(req, res) {
      const { password, email } = req.query

      const user = await Auth.find({ email, password })

      return res.json(user)
   }

   async login(req, res) {
      const { isAuth, me } = req.body
      const auth = await AuthMe.findOneAndUpdate({}, { isAuth, me })

      return res.json(auth)
   }

   async logout(req, res) {
      const auth = await AuthMe.findOneAndUpdate({}, {
         isAuth: false, me: {
            id: null,
            login: null,
            email: null,
         }
      })

      return res.json(auth)
   }
}

module.exports = new AuthController()