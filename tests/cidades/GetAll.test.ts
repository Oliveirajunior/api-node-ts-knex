import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {

  it('busca todos os registros', async () => {

    const res1 = await testServer.post('/cidades').send({
      nome: 'Caxias do Sul'
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const res2 = await testServer.get('/cidades').send();

    expect(Number(res2.header['x-total-count'])).toBeGreaterThan(0);
    expect(res2.statusCode).toEqual(StatusCodes.OK);
    expect(res2.body.length).toBeGreaterThan(0);
  });

});