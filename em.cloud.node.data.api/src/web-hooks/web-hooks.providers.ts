import { Connection } from 'mongoose';
import { AlertSchema } from './schemas/alert.schema';

export const webHooksProviders = [
  {
    provide: 'WEB_HOOK_MODEL',
    useFactory: (connection: Connection) => connection.model('Alert', AlertSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
