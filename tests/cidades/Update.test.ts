import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Upadate', () => {

  it('atualiza registro', async () => {

    const res1 = await testServer.post('/cidades').send({
      id: 2,
      nome: 'Caxias do Sul'
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const res2 = await testServer.put(`/cidades/${res1.body.id}`).send({ nome: 'Caxias' });

    expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT);
  
  });

  it('tenta atualizar um registro que não existe', async () => {
    const res1 = await testServer
      .put('/cidades/9999')
      .send({ nome: 'Caxias' });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
    
  });

});