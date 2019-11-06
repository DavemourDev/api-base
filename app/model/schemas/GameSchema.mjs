import mongoose from 'mongoose';


// CREATE SCHEMA
const GameSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    script: String
});

// SCHEMA METHODS
GameSchema.static('findByCategory', function(category) {
    return this.find({ category });
});

export default GameSchema;