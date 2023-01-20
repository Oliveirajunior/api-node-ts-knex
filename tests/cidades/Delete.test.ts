import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Delete', () => {

  it('apaga registro', async () => {

    const res1 = await testServer.post('/cidades').send({
      id: 3,
      nome: 'Caxias do Sul'
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const res2 = await testServer.delete(`/cidades/${res1.body.id}`).send();

    expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it('tenta apagar um registro que não existe', async () => {
    const res1 = await testServer
      .delete('/cidades/9999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
    
  });

});