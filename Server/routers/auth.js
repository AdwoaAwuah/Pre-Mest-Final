const router = require('express').Router()

const {signup, login, getUser,logout} = require('../controllers/auth')


router.post('/auth/signup', signup)
router.post('/auth/login', login)
router.get('/auth/user', getUser)
router.post('/auth/logout', logout);

module.exports = router

