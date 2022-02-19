import axios from 'axios';

import { AppError } from '@errors/app.error';
import { IBlingProvider } from '../models/bling.provider.model';
import { IBlingReturn } from '../dtos/blingResponse.dto';
import { IBlingRequest } from '../dtos/blingRequest.dto';
import { convertBlingRequest } from '../utils/convertBlingRequest';

class BlingProvider implements IBlingProvider {
  private readonly apiKey = process.env.BLING_API_KEY;

  public async createOrder(blingRequest: IBlingRequest): Promise<void> {
    const xml = convertBlingRequest(blingRequest);
    const { data, status: httpStatusCode } = await axios.post<IBlingReturn>(
      `https://bling.com.br/Api/v2/pedido/json?apikey=${this.apiKey}&xml=${xml}`,
    );

    if (data.retorno.erros && data.retorno.erros.length) {
      throw new AppError('This is already registered!');
    }

    if (httpStatusCode < 200 || httpStatusCode > 299)
      throw new AppError(
        'There was a problem trying to register a request in the bling api',
        500,
      );
  }
}

export { BlingProvider };
