export class CreateAlertDto {
    readonly alertGroup: number;
    readonly timeFrame: string;
    readonly type: string;
    readonly symbol: string;
    readonly name: string;
    readonly direction: string;
}
