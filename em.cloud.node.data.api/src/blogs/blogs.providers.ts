import { Connection } from 'mongoose';
import { BlogPostSchema } from './schemas/blog-post.schema';

export const blogsProviders = [
  {
    provide: 'BLOG_POST_MODEL',
    useFactory: (connection: Connection) => connection.model('BlogPost', BlogPostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
