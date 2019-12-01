export class CreateBlogPostDto {
  readonly title: string;
	readonly slug: string;
  readonly html: string;
  readonly siteName: string;
  readonly siteUrl: string;
  dateTime: Date;
}
