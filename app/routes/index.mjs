import express from 'express';

import auth from '../middleware/auth/index.mjs';
import { HomeController } from '../controller/index.mjs';
import gameRouter from './gameRoutes.mjs';
import gamePlayRouter from './gamePlayRoutes.mjs';
import userRouter from './userRoutes.mjs';

const appRouter = express.Router();
const controller = new HomeController();

appRouter.use('/gameplays', gamePlayRouter);
appRouter.use('/games', auth.authenticate, gameRouter);
appRouter.use('/users', auth.authenticate, userRouter);

appRouter.get('/unauthorized', controller.unauthorized)
appRouter.get('/', auth.authenticate, controller.index);

export default appRouter;