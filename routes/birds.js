const express = require('express')
const router = express.Router()
const birds = require('../db/birds')
const app = express()
router.get('/', function(req,res){
  res.render('/routes/welcome')
})
router.get('/', function(req,res){
  res.json(req.body)
})

router.get('/new', function (req, res) {
  res.render('birds/new')
})

router.post('/', function (req, res) {
  birds.push(req.body)
  res.redirect('/birds')
})

router.get('/:id', function (req, res) {
  let id = req.params.id

  res.render('birds/show', { id: id, birds: birds[id - 1] })
})

router.get('/:id/edit', function (req, res) {
  let id = req.params.id

  res.render('birds/edit', { id: id, birds: birds[id - 1] })
})

router.put('/:id', function (req, res) {
  let id = req.params.id
  birds[id - 1] = req.body

  res.redirect('/birds')

})

router.delete('/:id', function (req, res) {
  let id = req.params.id
  birds.splice(id - 1, 1)
  res.redirect('/birds')
})


module.exports = router
