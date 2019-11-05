import dotenv from 'dotenv';

const config = dotenv.config().parsed;


const setDefault = (defaultValues) => {
    Object.keys(config).forEach(prop => {
        if (typeof config[prop] === 'undefined') {
            config[prop] = defaultValues[value];
        };
    });
};

setDefault({
    // Add default values here
    APP_PORT: 3000,
    ENVIRONMENT: 'dev',
    SECRET_TOKEN: 'N0M3L0sT0k3nS',
    MONGODB_URI: 'mongodb://localhost:27017/test',
    BCRYPT_N_SALTS: 13,
    AUTH_USER_FIELD: 'username',
    AUTH_PASS_FIELD: 'password'
});

export default config;