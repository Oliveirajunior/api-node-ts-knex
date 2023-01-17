import * as create from './Create';
import * as remove from './Delete';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as update from './Update';

const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...remove,
  ...update
};

export { CidadesController };