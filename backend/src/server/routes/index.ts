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
router.get("/blogs", BlogsController.getAllValidation, BlogsController.getAll);

router.get("/blogs/:id", BlogsController.getById, BlogsController.getById);

router.post(
  "/blogs",
  BlogsController.createBodyValidation,
  BlogsController.create
);

router.put(
  "/blogs/:id",
  BlogsController.updateByIdValidation,
  BlogsController.updateById
);

router.delete(
  "/blogs/:id",
  BlogsController.deleteByIdValidation,
  BlogsController.deleteById
);

// Commments
router.post(
  "/comments/:id",
  CommentsController.createCommentValidation,
  CommentsController.create
);

router.get("/blogs/:id/comments", CommentsController.getAll);

// users
router.get(
  "/users/:id",
  UsersController.getByIdValidation,
  UsersController.getById
);

router.post(
  "/auth/register",
  UsersController.signUpValidation,
  UsersController.SignUp
);

router.post(
  "/auth/login",
  UsersController.signInValidation,
  UsersController.signIn
);

export { router };
