import * as mongoose from 'mongoose';

export const BlogPostSchema = new mongoose.Schema({
  title: String,
	slug: String,
  html: String,
  siteName: String,
  siteUrl: String,
  dateTime: Date,
});
