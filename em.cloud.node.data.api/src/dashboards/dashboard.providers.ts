import { Connection } from 'mongoose';
import { DashboardSchema } from './schemas/dashboard.schema';

export const dashboardProviders = [
  {
    provide: 'DASHBOARD_MODEL',
    useFactory: (connection: Connection) => connection.model('Site', DashboardSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
