import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidade {
  nome: string;
}

const bodyValidationSchema: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3)
});

const createValidation = validation((getSchema) => ({
  body: getSchema(bodyValidationSchema)
}));

const create = async (req: Request<object, object, ICidade>, res: Response) => {
  return res.status(StatusCodes.CREATED).json(req.body);
};

export { create, createValidation };