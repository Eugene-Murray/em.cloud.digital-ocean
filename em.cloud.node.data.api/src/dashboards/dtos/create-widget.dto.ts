export class CreateWidgetDto {
  readonly name: string;
  readonly widgets: [{ widgetId: string }];
}
