import 'dotenv/config';
import express from 'express';
import db from './lib/database/models'

const app = express();

(async function run(){
    /**
     * @title - pattern express
     */
    await require('./lib/express').default(app);

    /**
     * @title - api
     */
    // await require('./api').default(app)


    await require('./lib/express/client').default(app)

    /**
     * @title - handler
     */
    await require('./lib/handler').default(app)

    /**
     * @name Database-Connected
     */
    // await require('./lib/database/index')

    /**
     * STATIC
     */

    /**
     * @default - listener
     * @description app listener change port here
     */
    await require('./lib/express/listen').default(app)
})()