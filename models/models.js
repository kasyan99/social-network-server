const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   fullName: {
      type: String,
      required: true
   },
   avatar: {
      type: String,
      required: true
   },
   status: {
      type: String,
      default: ''
   },
   location: {
      city: { type: String },
      country: { type: String }
   },
   age: {
      type: String,
      required: true
   },
   contacts: {
      instagram: { type: String },
      twitter: { type: String },
      telegram: { type: String }
   },
   followed: {
      type: Boolean,
      default: false
   }
})

const User = model('user', userSchema)


module.exports = {
   User
}