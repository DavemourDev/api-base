import express from 'express'; 

import { GameController } from '../controller/index.mjs';

const router = express.Router();
const controller = new GameController();

// raíz
router.get('/', controller.listAllGames);
router.post('/', controller.insertGame);
// Búsqueda
router.get('/id/:id', controller.getGameById);
router.get('/name/:name', controller.getGameByName);
router.get('/category/:category', controller.listGamesInCategory);
// Modificar/borrar
router.put('/:id', controller.editGame);
router.delete('/:id', controller.deleteGame);

export default router;