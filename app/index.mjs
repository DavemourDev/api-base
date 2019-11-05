// 3RD PARTY MODULES
import express from 'express';
import bodyParser from 'body-parser';

// PROJECT MODULES
import config from './config/env-config.mjs';
import router from './routes';
import errorHandler from './middleware/error';

// CONSTANTS
const APP_PORT = parseInt(config.APP_PORT)

// APP SETUP
const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler)
// APP RUN
app.listen(APP_PORT, _ => {
    console.log(`Listening to port ${APP_PORT}`);
});