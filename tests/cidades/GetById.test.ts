import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetById', () => {

  it('busca registro por id', async () => {

    const res1 = await testServer.post('/cidades').send({
      id: 1,
      nome: 'Caxias do Sul'
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const res2 = await testServer.get(`/cidades/${res1.body.id}`).send();

    expect(res2.statusCode).toEqual(StatusCodes.OK);
    expect(res2.body).toHaveProperty('nome');
  });

  it('tenta buscar um registro que não existe', async () => {
    const res1 = await testServer
      .get('/cidades/9999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
    
  });

});