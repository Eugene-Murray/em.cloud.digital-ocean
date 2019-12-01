import { Document } from 'mongoose';

export interface BlogPost extends Document {
  readonly title: string;
	readonly slug: string;
  readonly html: string;
  readonly siteName: string;
  readonly siteUrl: string;
  dateTime: Date;
}
