import mongoose from 'mongoose';

import config from '../../config/env-config.mjs';
import { encryptPassword } from '../../utils/passwords.mjs'

// DEFINE SCHEMA PROPERTIES
const props = {
    username: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }
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
UserSchema.pre('save', async function() {
    this.password = await encryptPassword(this.password);
    return this;
});


export default UserSchema;