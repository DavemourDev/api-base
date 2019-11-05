import passportJWT from 'passport-jwt';
import config from '../../../config/env-config.mjs';
import { UserModel } from '../../../model';

const Strategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.SECRET_TOKEN,
    usernameField: config.AUTH_USER_FIELD,
    passwordField: config.AUTH_PASS_FIELD
};

const strategy = new Strategy(options, (jwtPayload, done) => {

    UserModel.findOne({
        _id: jwtPayload.id 
    }, (error, user) => {
        if (error) {
            return done(error, false);
        }
        return done(null, user || false);
    });

});

export default strategy;