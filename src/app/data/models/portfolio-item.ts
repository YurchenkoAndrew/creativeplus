export class PortfolioItem {
  id: number;
  // tslint:disable-next-line:variable-name
  portfolio_block_id: number;
  name: string;
  image: string;
  sort: number;
  description: string;

  // tslint:disable-next-line:variable-name
  constructor(id: number, portfolio_block_id: number, name: string, image: string, sort: number, description: string) {
    this.id = id;
    this.portfolio_block_id = portfolio_block_id;
    this.name = name;
    this.image = image;
    this.sort = sort;
    this.description = description;
  }
}
