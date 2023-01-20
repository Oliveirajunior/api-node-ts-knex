import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IParamProps {
  id?: number;
}

const paramValidationSchema: yup.SchemaOf<IParamProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),
});

const removeValidation = validation((getSchema) => ({
  params: getSchema(paramValidationSchema)
}));

const remove = async (req: Request<IParamProps>, res: Response) => {

  // Para fins de teste automatizado
  if(Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};

export { remove, removeValidation };