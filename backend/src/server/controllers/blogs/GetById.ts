// express
import { Request, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// INTERFACE
interface IParamsProps {
  id?: number;
}

export const getByIdValidations = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().integer().moreThan(0),
    })
  ),
}));

export const getById = async (
  request: Request<IParamsProps>,
  response: Response
) => {
  return response
    .status(StatusCodes.OK)
    .json({ title: request.params.id, name: "Leighton Buzzard" });
};
