import mongoose from 'mongoose';

import { UserSchema }  from '../schemas/index.js';

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;