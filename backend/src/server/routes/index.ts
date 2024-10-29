import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (request, response) => {
  response.status(StatusCodes.OK).send("EcholBlog API");
});

export { router };
