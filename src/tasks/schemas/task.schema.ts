import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    order: Number,
    complete: Boolean,
  },
  { timestamps: true },
);
