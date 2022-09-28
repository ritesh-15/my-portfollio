import { Router } from "express";
import { checkSchema } from "express-validator";
import { AuthController } from "../controllers";
import { authenticate, validateRequest } from "../middlewares";
import { addUserValidator, loginValidator } from "../validator/auth_validator";

const authRouter = Router();

authRouter.post(
  "/login",
  checkSchema(loginValidator),
  validateRequest,
  AuthController.login
);

authRouter.route("/me").get(authenticate, AuthController.me);

authRouter.delete("/logout", authenticate, AuthController.logout);

authRouter.get("/refresh", AuthController.refresh);

authRouter.post(
  "/add-user",
  checkSchema(addUserValidator),
  validateRequest,
  authenticate,
  AuthController.addUser
);

export default authRouter;
