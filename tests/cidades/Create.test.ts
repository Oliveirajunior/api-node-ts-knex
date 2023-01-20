import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Create', () => {

  it('cria registro', async () => {
    const res1 = await testServer.post('/cidades').send({ nome: 'Osasco' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('object');
  });

  it('tenta criar um registro com nome muito curto', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Os' });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('errors.body.nome');
    
  });

});