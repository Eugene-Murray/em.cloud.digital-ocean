import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogPost } from './interfaces/blog-post.interface';

@Injectable()
export class BlogsService {
  constructor(@Inject('BLOG_POST_MODEL') private readonly blogPostModel: Model<BlogPost>) {}

  async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    const createdBlogPost = new this.blogPostModel(createBlogPostDto);
    return await createdBlogPost.save();
  }

  async findAll(): Promise<BlogPost[]> {
    return await this.blogPostModel.find().exec();
  }
}
