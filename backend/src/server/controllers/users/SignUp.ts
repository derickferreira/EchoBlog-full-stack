// EXPRESS
import { Request, Response } from "express";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// MODELS
import {IUser} from "../../database/models"
// INTERFACE
interface IBodyProps extends Omit<IUser, "id">{}

// export const signUpValidation = validation((getSchema) => ({
//   body: getSchema<IBodyProps>(
//     yup.object().shape({
//       name: yup.string(),
//       nickname: yup.string(),
//       email: yup.string().email(),
//       password: yup.string(),

//     })
//   )
// }))

export const SignUp = (request: Request<{}, {}, IBodyProps>, response: Response) => {
  return response.status(StatusCodes.CREATED).json("signup");
};
