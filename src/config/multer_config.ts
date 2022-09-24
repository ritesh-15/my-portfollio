import multer from "multer";
import path from "path";

const options: multer.DiskStorageOptions = {
  destination: (req, file, cb) => {
    const destination = path.join(__dirname, "../../public/uploads");
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
};

const storage = multer.diskStorage(options);

const uploadImage = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const regx = /^(image)\/(jpeg|png|jpg)$/;

    if (regx.test(file.mimetype)) {
      cb(null, true);
      return;
    }

    cb(null, false);
  },
});

export default uploadImage;
