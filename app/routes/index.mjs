import express from 'express';

import auth from '../middleware/auth/index.mjs';
import { HomeController, UserController, GameController } from '../controller/index.mjs';

const router = express.Router();

const home = new HomeController();
const users = new UserController();
const games = new GameController();

router.get('/unauthorized', home.unauthorized)

// HOME
router.get('/', auth.authenticate, home.index);
// USER ROUTES
router.post('/login', users.login);
router.post('/register', users.register);
router.get('/users', users.getAll);
router.get('/users/me', users.getCurrent); // TODO
// GAME ROUTES

// raíz
router.get('/games', games.listAllGames);
router.post('/games', games.insertGame);

// Búsqueda
router.get('/games/id/:id', games.getGameById);
router.get('/games/name/:name', games.getGameByName);
router.get('/games/category/:category', games.listGamesInCategory);

// Modificar/borrar
router.put('/games/:id', games.editGame);
router.delete('/games/:id', games.deleteGame);

// GAMEPLAY ROUTES
router.get('/gameplays', gameplays.listAllGameplays);

export default router;