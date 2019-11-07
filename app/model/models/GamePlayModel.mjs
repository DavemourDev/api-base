import mongoose from 'mongoose';

import { GamePlaySchema }  from '../schemas/index.mjs';

const GamePlayModel = mongoose.model('GamePlay', GamePlaySchema);

export default GamePlayModel;