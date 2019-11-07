import express from 'express';

import { UserController } from '../controller/index.mjs';

const router = express.Router();
const controller = new UserController();

// USER ROUTES
router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/', controller.getAll);
router.get('/me', controller.getCurrent); // TODO

export default router;