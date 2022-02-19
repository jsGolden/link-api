import { injectable, inject } from 'tsyringe';
import { Deal } from '../infra/typeorm/entities/deal.entity';
import { IDealsRepository } from '../models/deals.repository.model';

@injectable()
class ShowAllDealsService {
  constructor(
    @inject('DealsRepository')
    private dealsRepository: IDealsRepository,
  ) {}

  public async execute(): Promise<Deal[]> {
    return this.dealsRepository.getDeals();
  }
}

export { ShowAllDealsService };
