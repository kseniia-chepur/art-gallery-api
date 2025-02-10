import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes/artwork.route';

const app = express();
config();

const { PORT, FE_URL, MONGODB_URL } = process.env;

app.use(express.json());
app.use(cors({  
  origin: FE_URL,
  credentials: true,
}));

app.use('/artworks', router);

mongoose
  .connect(MONGODB_URL!)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT || 8080);
  })
  .catch((err: Error) => console.error('Error connecting to MongoDB:', err.message || err));
