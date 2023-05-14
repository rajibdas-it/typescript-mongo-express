import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersServices } from "./user.services";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);

  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersServices();
  res.status(200).json({
    status: "success",
    data: users,
  });
};
