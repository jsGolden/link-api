import { IDealsRepository } from '../models/deals.repository.model';
import { Deal } from '../infra/typeorm/entities/deal.entity';
import { ICreateDealDTO } from '../dtos/createDeal.dto';

class FakeDealsRepository implements IDealsRepository {
  private deals: Deal[] = [];

  public async getDeals(): Promise<Deal[]> {
    return this.deals;
  }

  public async findByTitle(title: string): Promise<Deal> {
    const deal = this.deals.find(findDeal => findDeal.title === title);
    return deal;
  }

  public async create({
    currency,
    person_name,
    title,
    value,
  }: ICreateDealDTO): Promise<Deal> {
    const deal = new Deal();

    Object.assign(deal, { currency, person_name, title, value });

    this.deals.push(deal);

    return deal;
  }
}

export { FakeDealsRepository };
