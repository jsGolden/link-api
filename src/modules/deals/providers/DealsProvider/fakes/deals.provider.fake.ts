import { IWonDeal } from '../dtos/wonDeal.dto';
import { IDealsProvider } from '../models/deal.provider.model';

export class FakePipedriveProvider implements IDealsProvider {
  async getWonOpportunities(): Promise<IWonDeal[]> {
    const fakeOpportunities = [{} as IWonDeal];

    return fakeOpportunities;
  }
}
