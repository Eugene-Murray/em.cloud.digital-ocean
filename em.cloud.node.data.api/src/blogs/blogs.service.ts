import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './interfaces/blog-post.interface';

@Injectable()
export class BlogsService {
  constructor(@Inject('BLOG_POST_MODEL') private readonly blogPostModel: Model<BlogPost>) {}

  async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    createBlogPostDto.dateTime = new Date();
    const createdBlogPost = new this.blogPostModel(createBlogPostDto);
    return await createdBlogPost.save();
  }

  async findAll(): Promise<BlogPost[]> {
    return await this.blogPostModel.find().exec();
  }

  async findAllBySite(siteName: string): Promise<BlogPost[]> {
    return await this.blogPostModel.find({ siteName }).exec();
  }

  async findById(id: any): Promise<BlogPost> {
    return await this.blogPostModel.findById(id).exec();
  }

  async findAllBySlug(slug: string): Promise<BlogPost> {
    return await this.blogPostModel.findOne({ slug });
  }
}
