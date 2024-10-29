// express
import { Request, Response } from "express";
// HTTP-STATUS-CODE
import { StatusCodes } from "http-status-codes";

export const getAll = async (request: Request, response: Response) => {
  return response.status(StatusCodes.OK).json({ name: "meu ovo esquerdo" });
};
