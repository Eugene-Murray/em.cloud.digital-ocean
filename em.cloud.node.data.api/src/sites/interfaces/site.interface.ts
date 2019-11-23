import { Document } from 'mongoose';

export interface Site extends Document {
  readonly name: string;
  readonly url: number;
}
