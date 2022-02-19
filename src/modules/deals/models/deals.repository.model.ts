import { ICreateDealDTO } from '../dtos/createDeal.dto';
import { Deal } from '../infra/typeorm/entities/deal.entity';

export interface IDealsRepository {
  getDeals(): Promise<Deal[]>;
  create(data: ICreateDealDTO): Promise<Deal>;
  findByTitle(title: string): Promise<Deal | undefined>;
}
