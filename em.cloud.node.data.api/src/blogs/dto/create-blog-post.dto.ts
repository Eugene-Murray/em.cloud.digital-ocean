import { CreateSiteDto } from '../../sites/dto/create-site.dto';

export class CreateBlogPostDto {
  readonly site: CreateSiteDto;
  readonly title: string;
	readonly slug: string;
  readonly html: string;
  dateTime: Date;
}
