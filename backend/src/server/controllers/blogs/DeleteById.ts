// express
import { Request, Response } from "express";
// http-status-codes
import { StatusCodes } from "http-status-codes";
// yup
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";

export const deleteById = async (request: Request, response: Response) => {
  return response.status(StatusCodes.NO_CONTENT).send("deleteById");
};
