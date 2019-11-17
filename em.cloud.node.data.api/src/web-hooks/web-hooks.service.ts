import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Alert } from './interfaces/alert.interface';

@Injectable()
export class WebHooksService {
  constructor(@Inject('ALERT_MODEL') private readonly alertModel: Model<Alert>) {}

  async create(createAlertDto: CreateAlertDto): Promise<Alert> {
    const createdAlert = new this.alertModel(createAlertDto);
    return await createdAlert.save();
  }

  async findAll(): Promise<CreateAlertDto[]> {
    return await this.alertModel.find().exec();
  }
}