import { Deal } from '../infra/typeorm/entities/deal.entity';

export interface IDealsRepository {
  getDeals(): Promise<Deal[]>;
}
