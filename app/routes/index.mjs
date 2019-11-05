import express from 'express';

import auth from '../middleware/auth';
import { HomeController, UserController } from '../controller';
import errorHandler from '../middleware/error';

const router = express.Router();

const home = new HomeController();
const users = new UserController();

// HOME
router.get('/', auth.authenticate, home.index);
// USER ROUTES
router.post('/login', users.login);
router.post('/register', users.register);
router.get('/users', users.getAll)


export default router;