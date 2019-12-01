import { Inject, Injectable } from '@nestjs/common';
import { NewsAPI } from 'newsapi';

@Injectable()
export class NewsApiService {
  newsapi: NewsAPI;

  constructor() {
    this.newsapi = new NewsAPI('05faa14d0e1e4a50b19c73dcb6ba0263');
  }

  async getTravelNewsByCountry(country: string): Promise<any> {
    return null;
  }

  async getTechnologyNews(): Promise<any> {
    this.newsapi.v2.sources({
      category: 'technology',
      language: 'en',
      country: 'us'
    }).then(response => {
      return response.sources;
    });
  }

  async getFinancialNews(): Promise<any> {
    return await this.newsapi.v2.sources({
      category: 'technology',
      language: 'en',
      country: 'us'
    });
  }

  async getBusinessNews(): Promise<any> {
    return await this.newsapi.v2.sources({
      category: 'technology',
      language: 'en',
      country: 'us'
    });
  }
}
