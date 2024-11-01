// EXPRESS
import { Request, Response } from "express";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// INTERFACE
interface IBodyProps {
  email: string;
  password: string;
}

export const signInValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
  ),
}));

export const signIn = (
  request: Request<{}, {}, IBodyProps>,
  response: Response
) => {
  const { email, password } = request.body;

  return response.status(StatusCodes.OK).json({ user: { email, password } });
};
