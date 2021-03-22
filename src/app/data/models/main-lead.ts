export class MainLead {
  id: number;
  logo: string;
  // tslint:disable-next-line:variable-name
  lead_in: string;
  heading: string;
  // tslint:disable-next-line:variable-name
  btn_text: string;

  // tslint:disable-next-line:variable-name
  constructor(id: number, logo: string, lead_in: string, heading: string, brn_text: string) {
    this.id = id;
    this.logo = logo;
    this.lead_in = lead_in;
    this.heading = heading;
    this.btn_text = brn_text;
  }
}
