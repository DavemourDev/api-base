import mongoose from 'mongoose';

import config from '../../config/env-config.mjs';
import { encryptPassword } from '../../utils/passwords.mjs'

// DEFINE SCHEMA PROPERTIES
const props = {};
props[config.AUTH_USER_FIELD] = {
    type: String,
    required: true
};
props[config.AUTH_PASS_FIELD] = {
    type: String,
    required: true
};

// CREATE SCHEMA
const UserSchema = mongoose.Schema(props);

// SCHEMA METHODS
UserSchema.static('findByName', function(username, then) {
    return then(this.findOne({ username }));
});

UserSchema.static('findById', function(id, then) {
    return then(this.findOne({ '_id': id }));
});

// MIDDLEWARE
UserSchema.pre('save', async function(next) {
    this.password = await encryptPassword(this.password);
    next();
});


export default UserSchema;