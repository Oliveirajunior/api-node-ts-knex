import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2).max(2).trim()
});

const create = async (req: Request<object, object, ICidade>, res: Response) => {
  let validationData: ICidade | undefined  = undefined;

  try {
    validationData = await bodyValidation.validate(req.body, { abortEarly: false });
    return res.json(validationData);

  } catch (err) {
    const yupError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach(error => {
      if(!error.path) return;
      errors[error.path] = error.message; 
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    });
  }

};

export { create };