// EXPRESS
import { Request, Response } from "express";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";

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
  const { comment } = request.body;
  return response.status(StatusCodes.CREATED).json({ comment });
};
