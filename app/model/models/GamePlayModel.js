import mongoose from 'mongoose';

import { GamePlaySchema }  from '../schemas/index.js';

const GamePlayModel = mongoose.model('GamePlay', GamePlaySchema);

export default GamePlayModel;