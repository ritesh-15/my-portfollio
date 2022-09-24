import { ConfigOptions, v2 as Cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUD_NAME,
} from "../constants";

class CloudinaryHelper {
  private static _config: ConfigOptions | null = null;

  static cloudinary() {
    if (this._config === null) {
      this._config = Cloudinary.config({
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET,
        cloud_name: CLOUD_NAME,
        secure: true,
      });
    }

    return Cloudinary;
  }

  static uploadImage(filePath: string) {
    return this.cloudinary().uploader.upload(filePath, {
      folder: "portfolio",
    });
  }

  static deleteImageByPublicId(publicId: string) {
    return this.cloudinary().uploader.destroy(`portfolio/${publicId}`);
  }
}

export default CloudinaryHelper;
