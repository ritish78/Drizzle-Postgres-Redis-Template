import { Request, Response, NextFunction } from "express";
import { AuthError } from "src/utils/error";

export const onlyIfLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  //First lets check if the user has session id stored in cookie
  //If the user is not signed in, we throw AuthError
  if (!req.session || !req.session.userId) {
    throw new AuthError("Not logged in! Please login to continue");
  }
  next();
};
