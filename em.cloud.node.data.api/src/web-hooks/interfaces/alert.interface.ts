import { Document } from 'mongoose';

export interface Alert extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
