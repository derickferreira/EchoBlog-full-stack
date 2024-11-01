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

interface IBodyProps {
  name?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3).max(10),
    })
  ),
  params: getSchema<IParamsProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
}));

export const updateById = async (request: Request<IParamsProps, {}, IBodyProps>, response: Response) => {
  return response.status(StatusCodes.NO_CONTENT).json("updateById");
};
