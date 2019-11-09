const router = require('express').Router();
const controller = require('../controller/index.js').UserController;
const auth = require('../middleware/auth/index.js');

// USER ROUTES
router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/', auth.authenticate, controller.getAll);
router.get('/me', controller.getCurrent); // TODO

module.exports = router;