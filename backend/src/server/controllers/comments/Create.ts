import { Request, Response } from "express";

import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
import { StatusCodes } from "http-status-codes";

interface IBodyProps {
  comment: string;
}

export const createCommentValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      comment: yup.string().required().min(3).max(100),
    })
  ),
}));

export const create = async (
  request: Request<{}, {}, IBodyProps>,
  response: Response
) => {
  const comment = request.body.comment;
  return response.status(StatusCodes.CREATED).json({ comment });
};
