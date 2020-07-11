export class CreateContactDTO {
    readonly id: number;
    readonly name: string;
    readonly surname: string;
    readonly createdDate:Date;
    readonly modifiedDate:Date;
    readonly homeNum: string;
    readonly workNum: string;
    readonly mobileNum: string;
}