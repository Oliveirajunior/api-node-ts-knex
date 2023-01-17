import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();

router.get('/', (_, res) => {
  return res.status(StatusCodes.ACCEPTED).send('Olá, DEV!');
});

router.post(
  '/cidades',
  CidadesController.createValidation,
  CidadesController.create
);

router.get(
  '/cidades',
  CidadesController.getAllValidation,
  CidadesController.getAll
);

router.get(
  '/cidades/:id',
  CidadesController.getByIdValidation,
  CidadesController.getById
);

router.delete(
  '/cidades/:id',
  CidadesController.removeValidation,
  CidadesController.remove
);

router.put(
  '/cidades/:id',
  CidadesController.updateValidation,
  CidadesController.update
);


export { router };