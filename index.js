require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 3200

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

const start = async () => {
   try {
      mongoose.connect('mongodb+srv://admin:admin@cluster0.ft4lrx6.mongodb.net/social-network').then(() => {
         app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}/`))
      })

   } catch (error) {

   }
}

start()