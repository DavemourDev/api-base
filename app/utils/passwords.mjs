import bcrypt from 'bcrypt';

import config from '../config/env-config.mjs';


async function encryptPassword(password) {
    return await bcrypt.hash(password, parseInt(config.BCRYPT_N_SALTS));
}

async function comparePasswords(password, hash) {
    return await bcrypt.compare(password, hash);
}

export {encryptPassword, comparePasswords};