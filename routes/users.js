const router = require("express").Router();


router.post('/newUser',require('../controllers/Users/createUser'))
router.post('/login',require('../controllers/Users/Login'))

module.exports = router