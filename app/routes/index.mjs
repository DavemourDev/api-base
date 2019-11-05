import express from 'express';

import auth from '../middleware/auth';
import { HomeController, UserController } from '../controller';

const router = express.Router();

const home = new HomeController();
const users = new UserController();

// HOME
router.get('/unauthorized', home.unauthorized);
router.get('/', auth.authenticate, home.index);
// USER ROUTES
router.post('/login', users.login);
router.post('/register', users.register);
router.get('/users', users.getAll)

// ERRORS
router.get('/error', (request, response) => {
    response.status(500).send('error');
});

export default router;