import mongoose from 'mongoose';

import config from '../config/env-config.mjs';


const options = {
    MONGODB_URI: config.MONGODB_URI
};

class MongoManager {
    
    constructor(config){
        this._config = config;
    }
    
    getConnectionURL(){
        return this._config.MONGODB_URI;
    }

    isConnected() {
        mongoose.connection.on('connected',_=> true);
    }
    
    connect() {
        return mongoose.connect(this.getConnectionURL(), { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
      }
    
    disconnect(){
        mongoose.disconnect();
    }
}


export default new MongoManager(options);