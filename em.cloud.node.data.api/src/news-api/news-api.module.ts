import { Module } from '@nestjs/common';
import { NewsApiController } from './news-api.controller';
import { NewsApiService } from './news-api.service';

@Module({
  controllers: [NewsApiController],
  providers: [NewsApiService],
})
export class SitesModule {}
