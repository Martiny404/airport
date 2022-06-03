const Router = require('express');

const router = new Router();

const postsController = require('../controllers/posts-controller');

router.post('/posts', postsController.createPost);
router.get('/posts', postsController.getPostByName);
router.get('/posts/:id', postsController.getOnePost);
router.delete('/posts/:id', postsController.deletePost);
router.put('/posts', postsController.updatePost);

module.exports = router;
