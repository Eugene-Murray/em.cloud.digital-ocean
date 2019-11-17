import { Document } from 'mongoose';

export interface Alert extends Document {
    readonly symbol: string;
    readonly chart: string;
    alertTime: string;
}
