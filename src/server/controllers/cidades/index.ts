import * as create from './Create';
import * as getAll from './GetAll';

const CidadesController = {
  ...create,
  ...getAll
};

export { CidadesController };