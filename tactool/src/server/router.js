import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tactool-tasks' })
})

/* GET statistic page */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Tactool-statistic' })
})

export default router
