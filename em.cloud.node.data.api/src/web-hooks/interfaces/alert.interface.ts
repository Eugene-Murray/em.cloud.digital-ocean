import { Document } from 'mongoose';

export interface Alert extends Document {
  readonly alertGroup: number;
  readonly timeFrame: string;
  readonly type: string;
  readonly symbol: string;
  readonly name: string;
  readonly direction: string;
  alertTime: string;
}
