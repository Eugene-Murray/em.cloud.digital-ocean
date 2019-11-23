import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateDashboardDto } from './dtos/create-dashboard.dto';
import { CreateWidgetDto } from './dtos/create-widget.dto';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './interfaces/dashboard.interface';
import { Widget } from './interfaces/widget.interface';

@Controller('api/dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post()
  async create(@Body() createCatDto: CreateWidgetDto) {
    await this.dashboardService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Widget[]> {
    return this.dashboardService.findAll();
  }
}
