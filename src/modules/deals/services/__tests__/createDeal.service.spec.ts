import { FakeDealsRepository } from '@modules/deals/fakes/deals.repository.fake';
import { AppError } from '@shared/errors/app.error';
import { CreateDealService } from '../createDeal.service';

let fakeDealsRepository: FakeDealsRepository;
let createDeal: CreateDealService;

describe('CreateDeal', () => {
  beforeEach(() => {
    fakeDealsRepository = new FakeDealsRepository();
    createDeal = new CreateDealService(fakeDealsRepository);
  });

  it('should be able to create a new deal', async () => {
    const deal = await createDeal.execute({
      person_name: 'John doe',
      currency: '1',
      title: 'John doe Deal',
      value: 200,
    });

    expect(deal).toBeTruthy();
  });

  it('should not be able to create a new deal with same title', async () => {
    await createDeal.execute({
      person_name: 'John doe',
      currency: '1',
      title: 'John doe Deal',
      value: 200,
    });

    await expect(
      createDeal.execute({
        person_name: 'John doe',
        currency: '1',
        title: 'John doe Deal',
        value: 200,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
