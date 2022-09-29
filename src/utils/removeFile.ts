import { Request } from "express";
import fs from "fs/promises";

const removeFiles = async (req: Request) => {
  if (req.files) {
    const files = req.files as Express.Multer.File[];
    await Promise.all(files.map(async (file) => await fs.unlink(file.path)));
  }

  if (req.file) {
    await fs.unlink(req.file.path);
  }
};

export default removeFiles;
