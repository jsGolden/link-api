import { container } from 'tsyringe';

import { dealConfig } from '@config/deals';
import { IBlingProvider } from './BlingProvider/models/bling.provider.model';
import { IDealsProvider } from './DealsProvider/models/deal.provider.model';
import { PipedriveProvider } from './DealsProvider/implementations/pipedrive.provider';
import { BlingProvider } from './BlingProvider/implementations/bling.provider';

const providers = {
  pipedrive: PipedriveProvider,
};

container.registerSingleton<IDealsProvider>(
  'DealsProvider',
  providers[dealConfig.platform],
);

container.registerSingleton<IBlingProvider>('BlingProvider', BlingProvider);
