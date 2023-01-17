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

interface IBodyProps {
  nome: string;
}

const bodyValidationSchema: yup.SchemaOf<IBodyProps> = yup.object().shape({
  nome: yup.string().required().min(3)
});

const updateValidation = validation((getSchema) => ({
  params: getSchema(paramValidationSchema),
  body: getSchema(bodyValidationSchema)
}));

const update = async (req: Request<IParamProps, object, IBodyProps>, res: Response) => {
  return res.status(StatusCodes.OK).json({
    'id': req.params,
    'cidade': req.body
  });
};

export { update, updateValidation };