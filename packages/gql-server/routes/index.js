const router = require('express').Router()
const homeRout = require('./home')

router.get('/', homeRout)

module.exports = router
