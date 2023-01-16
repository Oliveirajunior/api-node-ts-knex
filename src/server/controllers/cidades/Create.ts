import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidationSchema: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2).max(2).trim()
});

interface IFilter {
  filter: string;
}

const queryValidationSchema: yup.SchemaOf<IFilter> = yup.object().shape({
  filter: yup.string().required().min(3)
});

const createValidation = validation((getSchema) => ({
  body: getSchema(bodyValidationSchema),
  query: getSchema(queryValidationSchema)
}));

const create = async (req: Request<object, object, ICidade>, res: Response) => {
  return res.status(StatusCodes.CREATED).json(req.body);
};

export { create, createValidation };