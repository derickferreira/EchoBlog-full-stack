import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
import { StatusCodes } from "http-status-codes";

export const SignUp = (request: Request, response: Response) => {
  return response.status(StatusCodes.CREATED).json("signup");
};
