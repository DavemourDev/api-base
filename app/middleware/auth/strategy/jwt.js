import passportJWT from 'passport-jwt';
import config from '../../../config/env-config.js';
import { userDAO } from '../../../model/index.js';

const Strategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_TOKEN,
    usernameField: 'username',
    passwordField: 'password'
};

const strategy = new Strategy(options, (jwtPayload, done) => {

    return userDAO.findById(jwtPayload.id)
        .then(user => done(null, user || false))
        .catch(error => done(error, false));
    
});

export default strategy;