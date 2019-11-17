import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateAlertDto } from './dto/create-alert.dto';
import * as moment from 'moment';

@Controller('api/web-hooks')
export class WebHooksController {
  list: CreateAlertDto[] = [];
  // tslint:disable-next-line: no-empty
  constructor() {}

  @Post()
  async create(@Body() createAlertDto: CreateAlertDto) {
    console.warn(createAlertDto);
    createAlertDto.alertTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.list.push(createAlertDto);
  }

  @Get()
  async findAll(): Promise<CreateAlertDto[]> {
    return this.list;
  }
}
