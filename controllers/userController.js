const { User } = require('../models/models')
const ObjectId = require('mongoose').Types.ObjectId;

class UserController {
   async getAll(req, res) {
      let { _page, _limit, fullName_like, followed } = req.query

      _page = _page || 1
      _limit = _limit || 2

      let offset = _page * _limit - _limit

      let users = []
      let totalCount = 0

      let followedValue = null

      if (followed && followed === 'true') {
         followedValue = true
      } else if (followed === 'false') {
         followedValue = false
      }

      if (fullName_like && !followed) {
         users = await User.find({ fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
         totalCount = (await User.find({ fullName: { $regex: fullName_like, $options: 'i' } })).length
      }
      else if (!fullName_like && followed) {
         users = await User.find({ followed: followedValue }).skip(offset).limit(_limit)
         totalCount = (await User.find({ followed: followedValue })).length
      }
      else if (fullName_like && followed) {
         users = await User.find({ followed: followedValue, fullName: { $regex: fullName_like, $options: 'i' } }).skip(offset).limit(_limit)
         totalCount = (await User.find({ followed: followedValue, fullName: { $regex: fullName_like, $options: 'i' } })).length
      }
      else {
         users = await User.find().skip(offset).limit(_limit)
         totalCount = (await User.find()).length
      }

      return res.json({ users, totalCount })
   }

   async getOneById(req, res) {
      const { _id } = req.query

      const user = await User.findOne(new ObjectId(_id))

      return res.json(user)
   }

   async updateProfile(req, res) {
      const { _id } = req.query

      const { followed, status, fullName, age, location, contacts } = req.body

      let update

      //to subscribe/unsubscribe
      if (followed !== undefined) {
         update = { followed }
      }
      //to change status
      else if (status) {
         update = { status }
      }
      //to change profile info
      else {
         update = { fullName, age, location, contacts }
      }

      const user = await User.findByIdAndUpdate({ _id: new ObjectId(_id) }, update)
      return res.json(user)
   }
}

module.exports = new UserController()