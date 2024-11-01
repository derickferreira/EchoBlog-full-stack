// express
import { Request, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// INTERFACE
interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  params: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().notRequired().moreThan(0).nonNullable(),
      limit: yup.number().notRequired().moreThan(0).nonNullable(),
      filter: yup.string().notRequired().nonNullable(),
    })
  ),
}));

export const getAll = async (
  request: Request<{}, {}, {}, IQueryProps>,
  response: Response
) => {
  response.setHeader("access-control-expose-headers", "x-total-count");
  response.setHeader("x-total-count", 1);

  return response.status(StatusCodes.OK).json({ title: "getAll" });
};
