import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { BlogsService } from './blogs.service';
import { BlogPost } from './interfaces/blog-post.interface';

@Controller('api/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  async create(@Body() createBlogsPostDto: CreateBlogPostDto) {
    this.blogsService.create(createBlogsPostDto);
  }

  @Get()
  async findAll(): Promise<BlogPost[]> {
    return this.blogsService.findAll();
  }
}
