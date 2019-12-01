import * as mongoose from 'mongoose';

export const DashboardSchema = new mongoose.Schema({
  name: String,
  widgets: [{ widgetId: String }],
});
