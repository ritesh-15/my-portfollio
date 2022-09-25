import { NextFunction, Request, Response } from "express";
import CreateHttpError from "../utils/create_http_error";
import fs from "fs/promises";
import Jimp from "jimp";

const compressImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let files;

  try {
    if (!req.files) return next(CreateHttpError.notFound("Images not found!"));

    if (req.files.length == 0)
      return next(
        CreateHttpError.unprocessableEntity("At least one image is required!")
      );

    files = req.files as Express.Multer.File[];

    await Promise.all(
      files.map(async (file) => {
        const image = await Jimp.read(file.path);
        await image.resize(500, Jimp.AUTO).quality(70).writeAsync(file.path);
      })
    );

    next();
  } catch (error) {
    if (files) {
      await Promise.all(
        files.map(async (file) => {
          await fs.unlink(file.path);
        })
      );
    }

    return next(
      CreateHttpError.internalServerError(
        "Something went wrong at our side, please try again later!"
      )
    );
  }
};

const compressImageIfExits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let files;

  try {
    if (!req.files) {
      next();
      return;
    }

    files = req.files as Express.Multer.File[];

    await Promise.all(
      files.map(async (file) => {
        const image = await Jimp.read(file.path);
        await image.resize(500, Jimp.AUTO).quality(70).writeAsync(file.path);
      })
    );

    next();
  } catch (error) {
    if (files) {
      await Promise.all(
        files.map(async (file) => {
          await fs.unlink(file.path);
        })
      );
    }

    return next(
      CreateHttpError.internalServerError(
        "Something went wrong at our side, please try again later!"
      )
    );
  }
};

export { compressImageIfExits, compressImage };
