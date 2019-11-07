import mongoose from 'mongoose';

// CREATE SCHEMA
const GamePlaySchema = mongoose.Schema({
    userID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    gameID: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 0
    },
    grade: {
        type: String,
        enum: ['S', 'A', 'B', 'C', 'D', 'E'],
        required: true
    },
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

GamePlaySchema.static('findByPlayer', function(playerId) {
    // TODO return highest score for a given game
});

// Middleware
GamePlaySchema.pre('save', async function() {
    // TODO: Establecer fechas de partida como fecha actual
})

export default GamePlaySchema;