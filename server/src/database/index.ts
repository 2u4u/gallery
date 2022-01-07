import mongoose, { ConnectOptions } from 'mongoose';
import { CONFIG } from "../config";
import MONGOOSE_OPTIONS from './options';

//connect to MongoDB
mongoose
  .connect(CONFIG.mongo, MONGOOSE_OPTIONS as ConnectOptions)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err: any) => console.log("MongoDB connection error -> ", err));