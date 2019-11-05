import db from './MongoManager.mjs';
import { UserModel } from '../model';

class DAO {

    constructor() {
        db.connect();
    }

    createUser(data) {
        const user = new UserModel();
        Object.assign(user, data);
        return user.save();
    }

    getAllUsers(){
        return UserModel.find().exec();
    }

};

export default new DAO();