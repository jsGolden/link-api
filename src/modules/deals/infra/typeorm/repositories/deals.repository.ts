import { IDealsRepository } from '@modules/deals/models/deals.repository.model';
import { getRepository, Repository } from 'typeorm';
import { Deal } from '../entities/deal.entity';

class DealsRepository implements IDealsRepository {
  private ormRepository: Repository<Deal>;

  constructor() {
    this.ormRepository = getRepository(Deal);
  }

  public async getDeals(): Promise<Deal[]> {
    return this.ormRepository.find();
  }
}

export { DealsRepository };
