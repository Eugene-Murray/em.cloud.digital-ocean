import { Module } from '@nestjs/common';
import { SitesModule } from './sites/sites.module';
import { WebHooksModule } from './web-hooks/web-hooks.module';
import { DashboardsModule } from './dashboards/dashboards.module';

@Module({
  imports: [SitesModule, WebHooksModule, DashboardsModule],
})
export class ApplicationModule {}
