import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      //await mongoose.connect('mongodb://localhost/nest'),
      await mongoose.connect('mongodb+srv://cms-user:thedoors@cluster0-v83pi.azure.mongodb.net/eugene?retryWrites=true&w=majority'),
  },
];
