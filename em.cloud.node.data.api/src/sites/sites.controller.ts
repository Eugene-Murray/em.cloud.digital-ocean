import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSiteDto } from './dto/create-site.dto';
import { SitesService } from './sites.service';
import { Site } from './interfaces/site.interface';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  async create(@Body() createSiteDto: CreateSiteDto) {
    console.warn(createSiteDto);
    this.sitesService.create(createSiteDto);
  }

  @Get()
  async findAll(): Promise<Site[]> {
    return this.sitesService.findAll();
  }
}
