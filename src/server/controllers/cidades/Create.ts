import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IBodyProps {
  nome: string;
}

const bodyValidationSchema: yup.SchemaOf<IBodyProps> = yup.object().shape({
  nome: yup.string().required().min(3)
});

const createValidation = validation((getSchema) => ({
  body: getSchema(bodyValidationSchema)
}));

const create = async (req: Request<object, object, IBodyProps>, res: Response) => {
  return res.status(StatusCodes.CREATED).json(req.body);
};

export { create, createValidation };