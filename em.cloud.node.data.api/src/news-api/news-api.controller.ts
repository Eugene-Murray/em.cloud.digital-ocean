import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountryNewsDto } from './dto/country-news.dto';
import { TechnologyNewsDto } from './dto/technology-news.dto';
import { FinancialNewsDto } from './dto/financial-news.dto';
import { BusinessNewsDto } from './dto/business-news.dto';
import { NewsApiService } from './news-api.service';


@Controller('api/news')
export class NewsApiController {
  constructor(private readonly newsApiService: NewsApiService) {}

  @Get()
  async getTravelNewsByCountry(country: string): Promise<CountryNewsDto[]> {
    return this.newsApiService.getTravelNewsByCountry(country);
  }

  @Get()
  async getTechnologyNews(): Promise<TechnologyNewsDto[]> {
    return this.newsApiService.getTechnologyNews();
  }

  @Get()
  async getFinancialNews(): Promise<FinancialNewsDto[]> {
    return this.newsApiService.getFinancialNews();
  }

  @Get()
  async getBusinessNews(): Promise<BusinessNewsDto[]> {
    return this.newsApiService.getBusinessNews();
  }
}
