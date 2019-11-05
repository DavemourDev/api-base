import { createToken } from '../utils/tokens.mjs';
import { comparePasswords } from '../utils/passwords.mjs';
import config from '../config/env-config.mjs';
import { userDAO } from '../model';

const usernameField = config.AUTH_USER_FIELD;
const passwordField = config.AUTH_PASS_FIELD;

export default class UserController {

    async login(request, response, next) {

        const { username, password } = request.body;

        if (username && password) {

            userDAO.findByUsername(username)
                .then(user => {
                    if (user && comparePasswords(password, user.password)) {
                        const token = createToken(user);
                        response.json({ token });
                    } else {
                        response.sendStatus(401);
                    }
                    
                })
                .catch(response.sendStatus(404));

        } else {
            // Username and/or password not provided. Forbid.
            response.sendStatus(401);
        }

    }

    async register(request, response, next) {

        const { username, password, retypePassword } = request.body;
        // Check passwords
        if (password && retypePassword && password === retypePassword) {
            const data = {
                username, password
            };
            userDAO.create(data);
        } else {
            response.status(500).json({'error': 'Incorrect password'});
        }

    }

    async getAll(request, response, next) {
        return response.send(userDAO.listAll());
    }

};