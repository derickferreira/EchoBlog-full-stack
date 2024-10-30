import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
import { StatusCodes } from "http-status-codes";

export const getById = (request: Request, response: Response) => {
  return response.status(StatusCodes.OK).json("getById");
};
