import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
import { StatusCodes } from "http-status-codes";

interface IBodyProps {
  title: string;
}

export const createBodyValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      title: yup.string().required().min(3).max(10),
    })
  ),
}));

export const create = async (
  request: Request<{}, {}, IBodyProps>,
  response: Response
) => {
  console.log(request.body.title);

  return response.status(StatusCodes.CREATED).json("create");
};
