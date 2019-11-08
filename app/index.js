// 3RD PARTY MODULES
import express from 'express';
import bodyParser from 'body-parser';

// PROJECT MODULES
import config from './config/env-config.js';
import router from './routes/index.js';
import errorHandler from './middleware/error/index.js';

// CONSTANTS
const APP_PORT = parseInt(config.APP_PORT)

// APP SETUP
const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);

// APP RUN
app.listen(APP_PORT, _ => {
  
});
