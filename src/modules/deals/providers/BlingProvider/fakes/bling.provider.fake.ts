import axios from 'axios';
import { IBlingProvider } from '../models/bling.provider.model';

import { IBlingRequest } from '../dtos/blingRequest.dto';

export class FakeBlingProvider implements IBlingProvider {
  public async createOrder(blingRequest: IBlingRequest): Promise<null> {
    return null;
  }
}
