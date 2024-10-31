// EXPRESS
import { Request, Response } from "express";
// YUP
import * as yup from "yup";
import { validation } from "../../shared/middlewares/Validations";
// HTTP-STATUS-CODES
import { StatusCodes } from "http-status-codes";
// Models
import { IBlog } from "../../database/models/Blogs";

interface IBodyProps extends Omit<IBlog, "id" | "author" | "like_amout"> {}

export const createBodyValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      title: yup.string().required().min(1).max(100),
      description: yup.string().required().min(5).max(1000),
      image: yup.string().required().url(),
    })
  ),
}));

export const create = async (
  request: Request<{}, {}, IBodyProps>,
  response: Response
) => {
  const { title, description, image } = request.body;

  return response
    .status(StatusCodes.CREATED)
    .json({ blog: { title, description, image } });
};
