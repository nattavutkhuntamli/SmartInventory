const router = require('express').Router()
const UserCtl = require('../controller/frontend/UserController')

router.get('/', UserCtl.homepages)

router.get('/about', UserCtl.aboutpages)

router.get('/register', UserCtl.registerpages)

router.get('/login', UserCtl.loginpages)

module.exports = router