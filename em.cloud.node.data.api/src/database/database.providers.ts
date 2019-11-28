import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://admin:Thedoors1#@178.128.161.183:27017/data?authSource=admin&w=1', { useNewUrlParser: true }),
      //await mongoose.connect('mongodb://user-data:dataPass1@178.128.161.183:27017/data?authSource=data&w=1', { useNewUrlParser: true }),
      //await mongoose.connect('mongodb+srv://cms-user:thedoors@cluster0-v83pi.azure.mongodb.net/digital-ocean?retryWrites=true&w=majority'),
  },
];
