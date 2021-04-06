export class Execution {
  id: number;
  name: string;
  image: string;
  sort: number;

  constructor(id: number, name: string, image: string, sort: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.sort = sort;
  }
}
