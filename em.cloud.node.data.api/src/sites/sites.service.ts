import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateSiteDto } from './dto/create-site.dto';
import { Site } from './interfaces/site.interface';

@Injectable()
export class SitesService {
  constructor(@Inject('SITE_MODEL') private readonly siteModel: Model<Site>) {}

  async create(createSiteDto: CreateSiteDto): Promise<Site> {
    const createdSite = new this.siteModel(createSiteDto);
    return await createdSite.save();
  }

  async findAll(): Promise<Site[]> {
    return await this.siteModel.find().exec();
  }
}
