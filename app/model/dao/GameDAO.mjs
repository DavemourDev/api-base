import mongo from '../../database/MongoManager.mjs'; 
import GameModel from '../models/GameModel.mjs';

export default class GameDAO {

    constructor() {
        mongo.connect();
    }

    create(data) {
        const game = new GameModel(data);
        return game.save();
    }

    listAll() {
        return GameModel.find().exec();
    }

    findById(id) {
        return GameModel.findById(id);
    }

    findByName(name) {
        return GameModel.findOne({name});
    }

    findByCategory(category) {
        return GameModel.findByCategory(category);
    }

    update(id, data){
        // TODO usar validaciones del schema
        return GameModel.findByIdAndUpdate(id, {
            "$set": data
        }, {
            new: true, 
            useFindAndModify: false
        }).exec();

    }

    remove(id) {
        return GameModel.findByIdAndRemove(id, {
            useFindAndModify: false
        }).exec();
    }

};