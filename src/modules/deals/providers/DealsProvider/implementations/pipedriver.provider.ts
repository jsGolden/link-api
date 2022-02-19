import 'dotenv/config';

import axios from 'axios';
import { AppError } from '../../../../../shared/errors/app.error';

import { IWonDeal } from '../dtos/wonDeal.dto';
import { IDealsProvider } from '../models/deal.provider.model';

interface IResponse {
  data: IWonDeal[];
}

class PipedriverProvider implements IDealsProvider {
  private readonly apiKey = process.env.PIPEDRIVE_KEY;

  private readonly linkAPI = process.env.PIPEDRIVE_LINK_API;

  public async getWonOpportunities(): Promise<IWonDeal[]> {
    try {
      const {
        data: { data },
      } = await axios.get<IResponse>(`${this.linkAPI}/deals`, {
        params: { api_token: this.apiKey, status: 'won' },
      });

      const filteredWonDealsData = data.map(deal => ({
        id: deal.id,
        title: deal.title,
        person_name: deal.person_name,
        value: deal.value,
        currency: deal.currency,
        update_time: deal.update_time,
        status: deal.status,
      }));

      return filteredWonDealsData;
    } catch (error) {
      console.error(error);
      throw new AppError('Error while fetching data on pipedrive', 500);
    }
  }
}

export { PipedriverProvider };
