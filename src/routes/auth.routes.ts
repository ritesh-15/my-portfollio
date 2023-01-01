import { Router } from "express"
import { checkSchema } from "express-validator"
import { AuthController } from "../controllers"
import { authenticate, validateRequest } from "../middlewares"
import { addUserValidator, loginValidator } from "../validator/auth_validator"

const authRouter = Router()

authRouter
  .route("/login")
  .post(checkSchema(loginValidator), validateRequest, AuthController.login)

authRouter.route("/me").get(authenticate, AuthController.me)

authRouter.route("/logut").delete(authenticate, AuthController.logout)

authRouter.route("/refresh").get(AuthController.refresh)

authRouter
  .route("/add-user")
  .post(
    checkSchema(addUserValidator),
    validateRequest,
    authenticate,
    AuthController.addUser
  )

export default authRouter
