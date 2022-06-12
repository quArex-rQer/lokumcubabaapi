import express from 'express';

import dotenv from 'dotenv';

import mongoose from 'mongoose';

import cookieParser from 'cookie-parser';

import applicationRoutes from './routes/application.js';

import adminRoutes from './routes/admin.js';

import auth from './routes/auth.js';

import cors from 'cors';

const app = express();

dotenv.config();

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODBKEY);
    console.log('Connected to mongodb');
  } catch (err) {
    throw err;
  }
};

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(applicationRoutes);
app.use(adminRoutes);
app.use(auth);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || 'Something you write must be wrong ! ';
  return res
    .status(errorStatus)
    .json({
      message: errorMsg,
      status: errorStatus,
      stack: err.stack,
      success: false,
    });
});

app.listen(8800, () => {
  mongooseConnect();
});
