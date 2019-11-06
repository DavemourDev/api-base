import express from 'express';

import auth from '../middleware/auth/index.mjs';
import { HomeController, UserController } from '../controller/index.mjs';

const router = express.Router();

const home = new HomeController();
const users = new UserController();

router.get('/unauthorized', home.unauthorized)

// HOME
router.get('/', auth.authenticate, home.index);
// USER ROUTES
router.post('/login', users.login);
router.post('/register', users.register);
router.get('/users', users.getAll)


export default router;