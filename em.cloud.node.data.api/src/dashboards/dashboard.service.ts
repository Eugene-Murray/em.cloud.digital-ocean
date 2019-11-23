import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Widget } from './interfaces/widget.interface';
import { CreateWidgetDto } from './dtos/create-widget.dto';

@Injectable()
export class DashboardService {
  constructor(@InjectModel('Widget') private readonly widgetModel: Model<Widget>) {}

  async create(createWidgetDto: CreateWidgetDto): Promise<Widget> {
    const createdWidget = new this.widgetModel(createWidgetDto);
    return await createdWidget.save();
  }

  async findAll(): Promise<Widget[]> {
    return await this.widgetModel.find().exec();
  }
}
