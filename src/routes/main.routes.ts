import { Router } from "express";
import { MainController } from "../controllers";

const mainRouter = Router();

mainRouter.route("/info").get(MainController.info);

export default mainRouter;
