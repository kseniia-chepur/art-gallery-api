import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes/artwork.route';

const app = express();
config();

const { PORT, MONGODB_URL } = process.env;

app.use(express.json());
app.use(cors());

app.use('/artworks', router);

mongoose
  .connect(MONGODB_URL!)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT || 8080);
  })
  .catch((err: Error) => console.error('Error connecting to MongoDB:', err.message || err));
