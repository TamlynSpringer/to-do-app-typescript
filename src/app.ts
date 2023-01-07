import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes';
import { config } from './config/config';

const app: Express = express();

app.use(cors());
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
})

// mongoose
//   .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//   .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)
//     )
//   )
//   .catch(error => {
//     throw error
//   })

// app.all('*', async (req: Request, res: Response, next: NextFunction) => {
//   return next(new Error('Invalid route'));
// })

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.json({
//     message: err.message || "An unknown error occurred!",
//   });
// });

// const initializeConfig = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/auth');
//     console.log('Connected to MongoDb')
//   } catch (error) {
//     console.log(error)
//   }
// };

// app.listen(PORT, async () => {
//   await initializeConfig()
//   console.log(`App running on port ${PORT}`)
// });

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.85ehy59.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose.set('useFindAndModify', false)



  
