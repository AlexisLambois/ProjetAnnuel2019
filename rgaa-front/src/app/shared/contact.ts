export class Contact {

  hostname: string;
  email: string;
  phonenumber: string;
  comment: string;

  constructor(hostname: string, email: string, phonenumber: string, comment: string) {
    this.hostname = hostname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.comment = comment;
  }
}
