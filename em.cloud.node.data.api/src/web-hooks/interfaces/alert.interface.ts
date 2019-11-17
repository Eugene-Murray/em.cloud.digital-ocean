import { Document } from 'mongoose';

export interface Alert extends Document {
  readonly symbol: string;
  readonly chartTimeFrame: string;
  readonly alertTime: string;
}
