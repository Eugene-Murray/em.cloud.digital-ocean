import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { WebHooksModule } from './web-hooks/web-hooks.module';

@Module({
  imports: [CatsModule, WebHooksModule],
})
export class ApplicationModule {}
