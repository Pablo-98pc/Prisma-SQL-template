const router = require("express").Router();

router.post('/newPost',require('../controllers/Posts/createPost'))
router.get('/userPosts/:id',require('../controllers/Posts/getPostByUser'))
router.patch('/updatePost',require('../controllers/Posts/updatePost'))

module.exports = router