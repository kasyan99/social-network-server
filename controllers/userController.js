const { User } = require('../models/models')
const ObjectId = require('mongoose').Types.ObjectId;

class UserController {
   async getAll(req, res) {
      let { _page, _limit, fullName_like, followed } = req.query

      _page = _page || 1
      _limit = _limit || 2

      let offset = _page * _limit - _limit

      let users = []

      let followedValue = null

      if (followed && followed === 'true') {
         followedValue = true
      } else if (followed === 'false') {
         followedValue = false
      }

      if (fullName_like && !followed) {
         users = await User.find({ fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
      }
      else if (!fullName_like && followed) {
         users = await User.find({ followed: followedValue }).skip(offset).limit(_limit)
      }
      else if (fullName_like && followed) {
         users = await User.find({ followed: followedValue, fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
      }
      else {
         users = await User.find().skip(offset).limit(_limit)
      }

      return res.json(users)
   }

   async getOneById(req, res) {
      const { _id } = req.query

      const user = await User.findOne(new ObjectId(_id))

      return res.json(user)
   }

   async updateProfile(req, res) {
      const { _id } = req.query

      const { status, fullName, age, location, contacts } = req.body

      let update

      if (status) {
         update = { status }
      } else {
         update = { fullName, age, location, contacts }
      }

      const user = await User.findByIdAndUpdate({ _id: new ObjectId(_id) }, update)
      return res.json(user)
   }
}

module.exports = new UserController()