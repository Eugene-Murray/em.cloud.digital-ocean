import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SitesService } from './sites.service';
import { Site } from './interfaces/site.interface';

@Controller('api/sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async create(@Body() createSiteDto: CreateSiteDto) {
    this.sitesService.create(createSiteDto);
  }

  @Get()
  async findAll(): Promise<Site[]> {
    return this.sitesService.findAll();
  }
}
