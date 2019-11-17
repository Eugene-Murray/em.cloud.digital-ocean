import { Module } from '@nestjs/common';
import { WebHooksController } from './web-hooks.controller';

@Module({
  imports: [],
  controllers: [WebHooksController],
  providers: [],
})
export class WebHooksModule {}