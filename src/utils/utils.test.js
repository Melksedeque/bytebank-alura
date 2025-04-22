import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação:', () => {
  test('Que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };
    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });
});

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  const saldo = 1000;
  const rendimento = 0.005;
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * rendimento);
  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(1005);
  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
