import { container } from 'tsyringe';
import { DealsRepository } from '@modules/deals/infra/typeorm/repositories/deals.repository';
import { IDealsRepository } from '../../modules/deals/models/deals.repository.model';

container.registerSingleton<IDealsRepository>(
  'DealsRepository',
  DealsRepository,
);
