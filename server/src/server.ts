import express from 'express'
import router from './routes';
import logger from 'morgan'
import {createServer}from 'node:http'
//import db from './config/db';

const app = express()
const server = createServer(app)
/*
async function connectBD () {
    try {
        await db.authenticate()
        db.sync()

        console.log('Connection BD succesfull')
    } catch (error) {
        console.log(error)
        console.log('Connection Error')
    }
}*/

app.use(logger('dev'))
app.use('/chat-js',router);
//connectBD()

export default server;