import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { WidgetSchema } from './schemas/widget.schema';
import { DatabaseModule } from '../database/database.module';
import { dashboardProviders } from './dashboard.providers';

@Module({
    imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'Widget', schema: WidgetSchema }])],
    controllers: [DashboardController],
    providers: [DashboardService, ...dashboardProviders],
})
export class DashboardsModule {
}
