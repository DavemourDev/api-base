import UserDAO from './dao/UserDAO.js';
import GameDAO from './dao/GameDAO.js';
import GamePlayDAO from './dao/GamePlayDAO.js';

const userDAO = new UserDAO();
const gameDAO = new GameDAO();
const gamePlayDAO = new GamePlayDAO();

export { userDAO, gameDAO, gamePlayDAO };

