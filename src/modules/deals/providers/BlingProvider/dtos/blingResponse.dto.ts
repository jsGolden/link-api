export interface IBlingReturn {
  retorno: {
    erros: [
      {
        erro: {
          msg: string;
          cod: 29 | 30 | 31 | 32 | 34;
        };
      },
    ];
    pedidos: [
      {
        pedido: {
          idPedido: number;
          numero: string;
        };
      },
    ];
  };
}
