const Router = require('express');

const router = new Router();

const userController = require('../controllers/user-controller');

router.post('/user', userController.createUser);
// router.get('/user?name=')
router.get('/user', userController.getUserByName);
router.get('/user/:id', userController.getOneUser);
router.delete('/user/:id', userController.deleteUser);
router.put('/user', userController.updateUser);

module.exports = router;
