import { Connection } from 'mongoose';
import { AlertSchema } from './schemas/alert.schema';

export const webHooksProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Alert', AlertSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
