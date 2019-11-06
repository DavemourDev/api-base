import mongoose from 'mongoose';

import { GameSchema }  from '../schemas/index.mjs';

const GameModel = mongoose.model('Game', GameSchema);

export default GameModel;