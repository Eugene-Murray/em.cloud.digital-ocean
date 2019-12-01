import { Document } from 'mongoose';

export interface Dashboard extends Document {
  readonly name: string;
  readonly widgets: [{ widgetId: string }];
}
