import { Router } from "express"
import { checkSchema } from "express-validator"
import uploadImage from "../config/multer_config"
import { AuthController } from "../controllers"
import { authenticate, validateRequest } from "../middlewares"
import {
  addUserValidator,
  loginValidator,
  updateUserValidator,
} from "../validator/auth_validator"

const authRouter = Router()

authRouter
  .route("/login")
  .post(checkSchema(loginValidator), validateRequest, AuthController.login)

authRouter.route("/me").get(authenticate, AuthController.me)

authRouter.route("/logout").delete(authenticate, AuthController.logout)

authRouter.route("/refresh").get(AuthController.refresh)

authRouter
  .route("/update-user/:id")
  .patch(
    authenticate,
    uploadImage.single("image"),
    checkSchema(updateUserValidator),
    validateRequest,
    AuthController.updateUser
  )

authRouter
  .route("/add-user")
  .post(
    authenticate,
    checkSchema(addUserValidator),
    validateRequest,
    AuthController.addUser
  )

export default authRouter
