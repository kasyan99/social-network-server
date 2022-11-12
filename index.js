require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const path = require('path')

const PORT = process.env.PORT || 3200

const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.static(path.resolve(__dirname, 'static')))
// app.use(fileUpload({}))
app.use('/', router)
// app.use(errorHandler)

const start = async () => {
   try {
      // mongoose.connect('mongodb+srv://admin:admin@cluster0.3thhb8k.mongodb.net/online-store').then(() => {
      //    app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))
      // })
      mongoose.connect('mongodb+srv://admin:admin@cluster0.ft4lrx6.mongodb.net/social-network').then(() => {
         app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))
      })

      // app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))
   } catch (error) {

   }
}

start()