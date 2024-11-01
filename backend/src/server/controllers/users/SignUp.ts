// EXPRESS
import { Request, Response } from "express";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// MODELS
import { IUser } from "../../database/models";
// INTERFACE
interface IBodyProps extends Omit<IUser, "id" | "create_at" | "blogs"> {}

export const signUpValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(2).max(50),
      nickname: yup.string().required().min(2).max(50),
      email: yup.string().email().required(),
      password: yup.string().required().min(8).max(100),
      profile_url: yup.string().url().optional(),
    })
  ),
}));

export const SignUp = (
  request: Request<{}, {}, IBodyProps>,
  response: Response
) => {
  const { name, nickname, email, password, profile_url } = request.body;

  return response
    .status(StatusCodes.CREATED)
    .json({ user: { name, nickname, email, password, profile_url } });
};
