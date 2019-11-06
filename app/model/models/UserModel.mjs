import mongoose from 'mongoose';

import { UserSchema }  from '../schemas/index.mjs';

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;