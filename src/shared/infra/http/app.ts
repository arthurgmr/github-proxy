import "reflect-metadata";
import express, { Request, Response, NextFunction }  from "express";
import "express-async-errors";

import "../../container";

import { router } from "./routes";
import { AppError } from "../../errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.get("/", (request, response) => {
    return response.json({ message: "Hello world!" });
  });

export { app };