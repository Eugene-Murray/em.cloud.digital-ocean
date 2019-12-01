export class CreateDashboardDto {
  readonly name: string;
  readonly widgets: [{ widgetId: string }];
}
