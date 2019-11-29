import * as mongoose from 'mongoose';
import { SiteSchema } from '../../sites/schemas/site.schema';

export const BlogPostSchema = new mongoose.Schema({
  site: SiteSchema,
  title: String,
	slug: String,
	html: String,
});
