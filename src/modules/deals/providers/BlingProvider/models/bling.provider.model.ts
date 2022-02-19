import { IBlingRequest } from '../dtos/blingRequest.dto';

export interface IBlingProvider {
  createOrder(blingRequest: IBlingRequest): Promise<void>;
}
