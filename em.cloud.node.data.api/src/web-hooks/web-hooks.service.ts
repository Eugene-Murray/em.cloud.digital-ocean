import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Alert } from './interfaces/alert.interface';

@Injectable()
export class WebHooksService {
  constructor(@Inject('ALERT_MODEL') private readonly alertModel: Model<CreateAlertDto>) {}

  async create(createAlertDto: CreateAlertDto): Promise<CreateAlertDto> {
    const createdAlert = new this.alertModel(createAlertDto);
    return await createdAlert.save();
  }

  async findAll(): Promise<CreateAlertDto[]> {
    return await this.catModel.find().exec();
  }
}