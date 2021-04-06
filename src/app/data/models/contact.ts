export class Contact {
  id: number;
  email: string;
  phone: string;
  mobile_phone: string;
  site: string;
  whatsapp: string;
  instagram: string;

  constructor(id: number, email: string, phone: string, mobile_phone: string, site: string, whatsapp: string, instagram: string) {
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.mobile_phone = mobile_phone;
    this.site = site;
    this.whatsapp = whatsapp;
    this.instagram = instagram;
  }
}
