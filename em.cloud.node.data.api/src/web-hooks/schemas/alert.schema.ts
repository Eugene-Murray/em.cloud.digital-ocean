import * as mongoose from 'mongoose';

export const AlertSchema = new mongoose.Schema({
  alertGroup: Number,
  timeFrame: String,
  type: String,
  symbol: String,
  name: String,
  direction: String,
  alertTime: String,
});
