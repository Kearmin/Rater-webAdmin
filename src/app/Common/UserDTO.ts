export class UserDTO {
  accountName: string;
  password: string;

  constructor(acc: string, pass: string) {
    this.accountName = acc;
    this.password = pass;
  }
}
