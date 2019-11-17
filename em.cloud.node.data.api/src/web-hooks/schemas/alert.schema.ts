import { Document } from 'mongoose';

import * as mongoose from 'mongoose';

export const AlertSchema = new mongoose.Schema({
    symbol: String,
    chartTimeFrame: String,
    alertTime: String,
});
