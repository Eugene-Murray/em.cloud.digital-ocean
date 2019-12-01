import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get('/site/:site')
  async findAllBySite(@Param('site') siteName): Promise<BlogPost[]> {
    console.warn('findAllBySite()', siteName);
    return this.blogsService.findAllBySite(siteName);
  }

  @Get(':id')
  async findById(@Param('id') id): Promise<BlogPost> {
    return this.blogsService.findById(id);
  }

  @Get('/slug/:slug')
  async findAllBySlug(@Param('slug') slug): Promise<BlogPost> {
    console.warn('findAllBySlug()', slug);
    return this.blogsService.findAllBySlug(slug);
  }
}
