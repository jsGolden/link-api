import { toXML } from 'jstoxml';
import { IBlingRequest } from '../dtos/blingRequest.dto';

export const convertBlingRequest = (valueRequest: IBlingRequest): string =>
  toXML({
    pedido: {
      cliente: {
        nome: valueRequest.clientName,
      },
      itens: {
        item: {
          codigo: valueRequest.code,
          descricao: valueRequest.description,
          vlr_unit: valueRequest.value,
          qtde: '1',
        },
      },
    },
  });
