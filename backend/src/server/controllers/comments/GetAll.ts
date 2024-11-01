// express
import { Request, response, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// INTERFACE
interface IQueryProps {
  limit?: number;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(
    yup.object().shape({
      limit: yup.number().integer().min(1).max(100), // default is 10
    })
  ),
}));

export const getAll = async (
  request: Request<{}, {}, {}, IQueryProps>,
  response: Response
) => {
  const { limit } = request.query;

  return response.status(StatusCodes.OK).json(limit);
};
