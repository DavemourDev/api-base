import UserDAO from './dao/UserDAO.mjs';
import GameDAO from './dao/GameDAO.mjs';

const userDAO = new UserDAO();
const gameDAO = new GameDAO();

export { userDAO, gameDAO };

