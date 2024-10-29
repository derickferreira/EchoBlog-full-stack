// express
import { Router } from "express";
// http-status-code
import { StatusCodes } from "http-status-codes";
// controllers
import {
  BlogsController,
  CommentsController,
  UsersController,
} from "../controllers";

// Logic
const router = Router();

// METHODS HTTP
router.get("/", (request, response) => {
  response.status(StatusCodes.OK).send("EcholBlog API");
});

// Blogs

router.post(
  "/blogs",
  BlogsController.createBodyValidation,
  BlogsController.create
);

// router.get("/blogs", BlogsController.getAll);

export { router };
