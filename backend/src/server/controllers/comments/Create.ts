// express
import { Request, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";

export const create = async (request: Request, response: Response) => {
  return response.status(StatusCodes.CREATED).json("created");
};
