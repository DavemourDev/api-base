import { UserModel } from '../model';
import { createToken } from '../utils/tokens.mjs';
import { comparePasswords } from '../utils/passwords.mjs';
import config from '../config/env-config.mjs';
import dao from '../database/dao.mjs';

const usernameField = config.AUTH_USER_FIELD;
const passwordField = config.AUTH_PASS_FIELD;

export default class UserController {

    async login(request, response, next) {

        const { username, password } = request.body;

        if (username && password) {
            // Finds an user matching password
            const user = UserModel.find(
                user => comparePasswords(password, user[passwordField]))
            .then(user => {
                if (user) {
                    const token = createToken(user);
                    response.json({ token });
                } else {
                    response.sendStatus(401);
                }
            });

        } else {
            // Username and/or password not provided. Forbid.
            response.sendStatus(401);
        }

    }

    async register(request, response, next) {

        const { username, password, retypePassword } = request.body;
        // Check passwords
        if (password && retypePassword && password === retypePassword) {
            // Create user
            const props = {};
            props[usernameField] = username;
            props[passwordField] = password;
            dao.createUser(props)
                .then(user => next())
                .catch(error => next(error));
        } else {
            response.status(500).json({'error': 'Incorrect password'});
        }

    }

    async getAll(request, response, next) {
        response.send(dao.getAllUsers());
    }

};