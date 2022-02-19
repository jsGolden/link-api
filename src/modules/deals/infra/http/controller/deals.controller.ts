import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { ShowAllDealsService } from '@modules/deals/services/showAllDeals.service';

class DealsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showAllDeals = container.resolve(ShowAllDealsService);

    const allDeals = await showAllDeals.execute();

    return response.json(allDeals);
  }
}

export { DealsController };
