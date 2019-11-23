import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { WidgetSchema } from './schemas/widget.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Widget', schema: WidgetSchema }])],
    controllers: [DashboardController],
    providers: [DashboardService],
})
export class DashboardsModule {
}
