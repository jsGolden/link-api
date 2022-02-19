import { IDealsRepository } from '../models/deals.repository.model';
import { Deal } from '../infra/typeorm/entities/deal.entity';

class FakeDealsRepository implements IDealsRepository {
  private deals: Deal[] = [];

  public async getDeals(): Promise<Deal[]> {
    return this.deals;
  }
}

export { FakeDealsRepository };
