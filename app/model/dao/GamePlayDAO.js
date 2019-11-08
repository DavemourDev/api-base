import mongo from '../../database/MongoManager.js'; 
import GamePlayModel from '../models/GamePlayModel.js';

export default class GamePlayDAO {

    constructor() {
        mongo.connect();
    }

    create(data) {
        const game = new GamePlayModel(data);
        return game.save();
    }

    listAll() {
        return GamePlayModel.find().exec();
    }

    findById(id) {
        return GamePlayModel.findById(id);
    }

    findByGame(id) {
        return GamePlayModel.findByGame(id);
    }

    findByPlayer(id) {
        return GamePlayModel.findByPlayer(id);
    }

    findLastMonth() {
        return GamePlayModel.findLastMonth();
    }

    findLastWeek() {
        return GamePlayModel.findLastWeek();
    }

    findToday() {
        return GamePlayModel.findToday();
    }

    update(id, data){
        return GamePlayModel.findByIdAndUpdate(id, data, {
            new: true, 
            useFindAndModify: false
        }).exec();
    }

    remove(id) {
        return GamePlayModel.findByIdAndRemove(id, {
            useFindAndModify: false
        }).exec();
    }

};