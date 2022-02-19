import { container } from 'tsyringe';

import { dealConfig } from '@config/deals';

import { IDealsProvider } from './models/deal.provider.model';
import { PipedriverProvider } from './implementations/pipedriver.provider';

const providers = {
  pipedrive: PipedriverProvider,
};

container.registerSingleton<IDealsProvider>(
  'DealsProvider',
  providers[dealConfig.platform],
);
