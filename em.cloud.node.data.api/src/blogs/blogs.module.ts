import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { blogsProviders } from './blogs.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BlogsController],
  providers: [BlogsService, ...blogsProviders],
})
export class BlogsModule {}
