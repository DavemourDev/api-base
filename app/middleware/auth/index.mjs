import passport from 'passport';

import strategy from './strategy/jwt.mjs';

const options = { 
    failureRedirect: '/unauthorized',
    session: false 
};
// SET STRATEGIES
passport.use(strategy);

passport.initialize();

// EXPORT AUTHENTICATION FUNCTION
export default {
    initialize: passport.initialize,
    authenticate: passport.authenticate('jwt', options)
};
