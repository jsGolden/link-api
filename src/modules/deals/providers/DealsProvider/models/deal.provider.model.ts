import { IWonDeal } from '../dtos/wonDeal.dto';

export interface IDealsProvider {
  getWonOpportunities(): Promise<IWonDeal[]>;
}
