import mongoose from 'mongoose';

import { GameSchema }  from '../schemas/index.js';

const GameModel = mongoose.model('Game', GameSchema);

export default GameModel;