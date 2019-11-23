import { Connection } from 'mongoose';
import { SiteSchema } from './schemas/site.schema';

export const sitesProviders = [
  {
    provide: 'SITE_MODEL',
    useFactory: (connection: Connection) => connection.model('Site', SiteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
