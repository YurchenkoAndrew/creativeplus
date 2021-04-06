import {PortfolioItem} from './portfolio-item';

export class Portfolio {
  id: number;
  name: string;
  sort: number;
  items: PortfolioItem[];

  constructor(id: number, name: string, sort: number, items: PortfolioItem[]) {
    this.id = id;
    this.name = name;
    this.sort = sort;
    this.items = items;
  }
}
