const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

const birds = require('./routes/birds')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/birds', birds)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
