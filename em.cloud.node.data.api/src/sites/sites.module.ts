import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import { sitesProviders } from './sites.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SitesController],
  providers: [SitesService, ...sitesProviders],
})
export class SitesModule {}
