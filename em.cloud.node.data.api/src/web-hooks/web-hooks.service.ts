import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAlertDto } from './dto/create-alert.dto';
import { Alert } from './interfaces/alert.interface';
import * as moment from 'moment';

@Injectable()
export class WebHooksService {
  constructor(@Inject('WEB_HOOK_MODEL') private readonly alertModel: Model<Alert>) {}

  async create(createAlertDto: CreateAlertDto): Promise<Alert> {
    const createdAlert = new this.alertModel(createAlertDto);
    createdAlert.alertTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    return await createdAlert.save();
  }

  async findAll(): Promise<Alert[]> {
    return await this.alertModel.find().exec();
  }
}
