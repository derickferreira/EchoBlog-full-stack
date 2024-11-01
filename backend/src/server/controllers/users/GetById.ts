// EXPRESS
import { Request, Response } from "express";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// INTERFACE
interface IParamsProps {
  id?: number;
}

export const getByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().required(),
    })
  ),
}));

export const getById = (request: Request<IParamsProps>, response: Response) => {
  const { id } = request.params;
  return response.status(StatusCodes.OK).json(id);
};
