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

const authSchema = new Schema({
   login: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   id: {
      type: Schema.Types.ObjectId,
      required: true
   },
})

const Auth = model('auth', authSchema)

const authMeSchema = new Schema({
   me: {
      login: {
         type: String,
         required: true,
         unique: true
      },
      email: {
         type: String,
         required: true,
         unique: true
      },
      id: {
         type: Schema.Types.ObjectId,
         required: true
      },
   },
   isAuth: {
      type: Boolean,
      default: false
   }
})

const AuthMe = model('authMe', authMeSchema)


module.exports = {
   User,
   Auth,
   AuthMe
}