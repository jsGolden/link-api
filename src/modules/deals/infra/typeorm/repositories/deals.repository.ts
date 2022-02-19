import { ICreateDealDTO } from '@modules/deals/dtos/createDeal.dto';
import { IDealsRepository } from '@modules/deals/models/deals.repository.model';
import { getRepository, Repository } from 'typeorm';
import { Deal } from '../entities/deal.entity';

class DealsRepository implements IDealsRepository {
  private ormRepository: Repository<Deal>;

  constructor() {
    this.ormRepository = getRepository(Deal);
  }

  public async findByTitle(title: string): Promise<Deal> {
    return this.ormRepository.findOne({
      where: { title },
    });
  }

  public async create(data: ICreateDealDTO) {
    const deal = this.ormRepository.create(data);
    await this.ormRepository.save(deal);
    return deal;
  }

  public async getDeals(): Promise<Deal[]> {
    return this.ormRepository.find();
  }
}

export { DealsRepository };
