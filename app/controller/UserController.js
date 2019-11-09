const createToken = require('../utils/tokens.js').createToken;
const comparePasswords = require('../utils/passwords.js').comparePasswords;
const userDAO = require('../model/index.js').userDAO;

class UserController {

    async login(request, response, next) {

        const { username, password } = request.body;

        if (username && password) {

            userDAO.findByUsername(username)
                .then(user => {
                    if (user && comparePasswords(password, user.password)) {
                        const token = createToken(user);
                        response.status(200).json({ 
                            "message": "Logged in",
                            token 
                        });
                    } else {
                        response.sendStatus(401);
                    }
                    
                })
                .catch(error => next(error));

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
            userDAO.create(data)
                .then(_ => response.status(200).json({'result': 'Registered successfully'}))
                .catch(error => next(error));
        } else {
            response.status(500).json({'error': 'Incorrect password'});
        }

    }

    async getAll(request, response, next) {
        userDAO.listAll()
            .then(users => response.status(200).json(users))
            .catch(error => next(error));
    }

    async getCurrent(request, response, next) {
        // TODO enlace con DAO
        response.status(200).json({'user': 'me'});
    }

    async getUserScores(request, response, next) {

    }

    async editUser(request, response, next) {

    }

    async deleteUser(request, response, next) {

    }

};

module.exports = new UserController();