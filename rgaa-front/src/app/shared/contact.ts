export class ContactFormatage {

  id: number;
  name: string;
  email: string;
  phonenumber: string;

  constructor(id: number, name: string, email: string, phonenumber: string) {
    this.name = name;
    this.email = email;
    this.phonenumber = phonenumber;
  }
}
