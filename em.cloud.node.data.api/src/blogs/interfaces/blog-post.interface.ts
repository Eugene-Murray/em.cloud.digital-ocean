import { Document } from 'mongoose';
import { Site } from '../../sites/interfaces/site.interface';

export interface BlogPost extends Document {
  readonly site: Site;
  readonly title: string;
	readonly slug: string;
	readonly html: string;
}
