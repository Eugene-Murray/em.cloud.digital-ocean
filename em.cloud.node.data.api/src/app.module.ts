import { Module } from '@nestjs/common';
import { SitesModule } from './sites/sites.module';
import { WebHooksModule } from './web-hooks/web-hooks.module';
import { BlogsModule } from './blogs/blogs.module';
//import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [SitesModule, WebHooksModule, BlogsModule],
})
export class ApplicationModule {}
