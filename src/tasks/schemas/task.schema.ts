import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  tite: String,
  description: String,
  order: Number,
  complete: Boolean,
})