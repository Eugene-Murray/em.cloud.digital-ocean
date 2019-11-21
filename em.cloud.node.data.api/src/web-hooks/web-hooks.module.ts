import { Module } from '@nestjs/common';
import { WebHooksController } from './web-hooks.controller';
import { webHooksProviders } from './web-hooks.providers';
import { WebHooksService } from './web-hooks.service';

@Module({
  imports: [],
  controllers: [WebHooksController],
  providers: [WebHooksService, ...webHooksProviders],
})
export class WebHooksModule {}
