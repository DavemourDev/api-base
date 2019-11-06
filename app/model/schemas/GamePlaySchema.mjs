import mongoose from 'mongoose';


// CREATE SCHEMA
const GamePlaySchema = mongoose.Schema({
    userID: ObjectID,
    gameID: ObjectID,
    score: Number,
    grade: Grade,
    dateTime: Date
});

// SCHEMA METHODS
GamePlaySchema.static('findLastMonth', function() {
    // TODO return last month gameplays
});

GamePlaySchema.static('findLastWeek', function() {
    // TODO return last week gameplays
});

GamePlaySchema.static('findToday', function() {
    // TODO return today gameplays
});

GamePlaySchema.static('findByGame', function(gameId) {
    // TODO return all gameplays from a game
});

GamePlaySchema.static('findHighestScoreForGame', function(gameId) {
    // TODO return highest score for a given game
});



export default GamePlaySchema;