import '@shared/container';

import { BlingProvider } from '@modules/deals/providers/BlingProvider/implementations/bling.provider';

import { container } from 'tsyringe';
import { IDeal } from '../dtos/deal.dto';

const blingProvider = new BlingProvider();

export interface Job {
  key: string;
  options?: any;
  handle: (data: any) => Promise<void>;
}

export const InsertDealsJob: Job = {
  key: 'InsertDealsJob',
  async handle({ data }: { data: IDeal[] }) {
    // const saveOpportunity = container.resolve(SaveOpportunityService);

    await Promise.all(
      data.map(async (deal: IDeal) => {
        await blingProvider
          .createOrder({
            clientName: deal.title,
            code: deal.id,
            description: deal.title,
            value: deal.value,
          })
          .then(async () => {
            console.log('done!');
          });
      }),
    );
  },
};
