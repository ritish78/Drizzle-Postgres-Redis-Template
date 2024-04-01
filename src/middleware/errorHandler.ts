import { Request, Response, NextFunction } from "express";
import { GenericError } from "src/utils/error";

export const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  //If there is header, we ignore and go to next middleware
  if (res.headersSent) {
    return next();
  }

  //If the error is of class that we created in `/utils/error.ts` then
  //we can utilize its status code and error message
  if (error instanceof GenericError) {
    return res.status(error.statusCode).send({
      message: error.message,
      stack: process.env.NODE_ENV === "production" ? error.name : error.name
    });
  }

  //If the error is something else that we don't know of
  //we send error of status code 500
  return res.status(500).send({
    message: "Internal Server Error!",
    stack: process.env.NODE_ENV === "production" ? "ServerError" : error
  });
};
