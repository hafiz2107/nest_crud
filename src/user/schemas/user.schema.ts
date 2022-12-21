import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    reg_time: { type: Date, default: Date.now },
  },
  { collection: 'user' },
);
