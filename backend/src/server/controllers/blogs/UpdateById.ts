// express
import { Request, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";

export const updateById = async (request: Request, response: Response) => {
  return response.status(StatusCodes.NO_CONTENT).json("updateById");
};
