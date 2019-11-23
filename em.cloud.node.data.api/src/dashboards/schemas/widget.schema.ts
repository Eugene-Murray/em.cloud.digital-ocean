import * as mongoose from 'mongoose';

export const WidgetSchema = new mongoose.Schema({
  name: String,
  location: String,
  staticData: [{}],
  serviceUrl: String,
});
