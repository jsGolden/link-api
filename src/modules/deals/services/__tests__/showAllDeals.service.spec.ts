import { FakeDealsRepository } from '@modules/deals/fakes/deals.repository.fake';
import { ShowAllDealsService } from '../showAllDeals.service';

let fakeDealsRepository: FakeDealsRepository;

let showAllDeals: ShowAllDealsService;

describe('ShowAllDeals', () => {
  beforeEach(() => {
    fakeDealsRepository = new FakeDealsRepository();
    showAllDeals = new ShowAllDealsService(fakeDealsRepository);
  });

  it('should be able to return array of deals', async () => {
    const allDeals = await showAllDeals.execute();

    expect(allDeals).toBeTruthy();
    expect(Array.isArray(allDeals)).toBe(true);
  });
});
