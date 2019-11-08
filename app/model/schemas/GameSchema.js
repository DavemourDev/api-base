import mongoose from 'mongoose';


// CREATE SCHEMA
const GameSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true,
        unique: true
    },
    "description": {
        type: String,
        default: ''
    },
    "category": {
        type: String,
        enum: ['default', 'math'],
        default: "default"
    },
    "script": {
        type: String,
        required: true
    }
});

// SCHEMA METHODS
GameSchema.static('findByCategory', function(category) {
    return this.find({ category });
});

GameSchema.static('findOneByName', function(name) {
    return this.findOne({ name: name });
});

export default GameSchema;