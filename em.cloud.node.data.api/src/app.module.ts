import { Module } from '@nestjs/common';
import { SitesModule } from './sites/sites.module';
import { WebHooksModule } from './web-hooks/web-hooks.module';

@Module({
  imports: [SitesModule, WebHooksModule],
})
export class ApplicationModule {}
