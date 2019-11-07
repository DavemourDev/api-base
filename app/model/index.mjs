import UserDAO from './dao/UserDAO.mjs';
import GameDAO from './dao/GameDAO.mjs';
import GamePlayDAO from './dao/GamePlayDAO.mjs';

const userDAO = new UserDAO();
const gameDAO = new GameDAO();
const gamePlayDAO = new GamePlayDAO();

export { userDAO, gameDAO, gamePlayDAO };

