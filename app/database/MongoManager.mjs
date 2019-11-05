import mongoose from 'mongoose';

import config from '../config/env-config.mjs';

class MongoManager {
    
    constructor(config){
        this._config = config;
    }
    
    getConnectionURL(){
        return this._config.MONGODB_URI;
    }
    
    connect() {
        console.log(this.getConnectionURL());

        return mongoose.connect(this.getConnectionURL(), { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    }
    
    disconnect(){
        mongoose.disconnect();
    }
}

export default new MongoManager({ MONGODB_URI: config.MONGODB_URI });