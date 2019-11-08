import express from 'express';

import auth from '../middleware/auth/index.js';
import { HomeController } from '../controller/index.js';
import gameRouter from './gameRoutes.js';
import gamePlayRouter from './gamePlayRoutes.js';
import userRouter from './userRoutes.js';

const appRouter = express.Router();
const controller = new HomeController();

appRouter.use('/gameplays', gamePlayRouter);
appRouter.use('/games', auth.authenticate, gameRouter);
appRouter.use('/users', auth.authenticate, userRouter);

appRouter.get('/unauthorized', controller.unauthorized)
appRouter.get('/', auth.authenticate, controller.index);

export default appRouter;