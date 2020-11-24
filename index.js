const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const HistoryRoute = require('./api/route/HistoryRoute')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/history', HistoryRoute)

const PORT = process.env.PORT || 3000

const DB_URL = `mongodb://127.0.0.1:27017/weather`

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database connected successfully...')
  })
})
