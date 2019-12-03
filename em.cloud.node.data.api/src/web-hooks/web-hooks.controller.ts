import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import * as moment from 'moment';
import { WebHooksService } from './web-hooks.service';

@Controller('api/web-hooks')
export class WebHooksController {
  // tslint:disable-next-line: no-empty
  constructor(private readonly webHooksService: WebHooksService) {}

  @Post()
  async create(@Body() createAlertDto: CreateAlertDto) {
    this.webHooksService.create(createAlertDto);
  }

  @Get()
  async findAll(): Promise<CreateAlertDto[]> {
    return this.webHooksService.findAll();
  }
}
