import express from "express";
import { router } from "./routes";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.ENABLE_CORS?.split(";") || [],
  })
);
server.use(express.json());
server.use(router);

export { server };
