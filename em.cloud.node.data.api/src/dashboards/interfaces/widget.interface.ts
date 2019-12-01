import { Document } from 'mongoose';

export interface Widget extends Document {
  readonly name: string;
  readonly location: string;
  readonly staticData: [{}];
  readonly serviceUrl: string;
}
