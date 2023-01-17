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

const getByIdValidation = validation((getSchema) => ({
  params: getSchema(paramValidationSchema)
}));

const getById = async (req: Request<IParamProps>, res: Response) => {
  return res.status(StatusCodes.OK).json(req.params);
};

export { getById, getByIdValidation };