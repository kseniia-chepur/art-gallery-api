const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

const { PORT, MONGODB_URL } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .then(() => app.listen(PORT || 8080))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err.errmsg || err);
    process.exit(1);
  });
