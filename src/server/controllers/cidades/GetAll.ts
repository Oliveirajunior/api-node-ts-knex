import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const queryValidationSchema: yup.SchemaOf<IQueryProps> = yup.object().shape({
  page: yup.number().notRequired().moreThan(0),
  limit: yup.number().notRequired().moreThan(0),
  filter: yup.string().notRequired()
});

const getAllValidation = validation((getSchema) => ({
  query: getSchema(queryValidationSchema)
}));

const getAll = async (req: Request<object, object, object, IQueryProps>, res: Response) => {
  return res.status(StatusCodes.OK).json(req.query);
};

export { getAll, getAllValidation };