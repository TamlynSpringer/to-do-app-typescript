import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import corsOptions from './config/corsOptions';
import todoRoutes from './routes';
import { config } from './config/config';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(todoRoutes);

mongoose
.connect(config.mongo.url, { retryWrites: true, w: 'majority' })
.then(() => {
  console.log('Connected to Mongo')
})
.then(() => app.listen(config.server.port, () => console.log(`Server running on http://localhost:${config.server.port}`)
))
.catch(error => {
  console.log(error)
});
