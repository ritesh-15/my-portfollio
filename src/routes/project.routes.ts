import { Router } from "express";
import { checkSchema } from "express-validator";
import uploadImage from "../config/multer_config";
import ProjectController from "../controllers/project_controller";
import { authenticate, validateRequest } from "../middlewares";
import {
  addProjectValidator,
  addTechStackValidator,
  deleteTechStackValidator,
  updateTechStackValidator,
} from "../validator/project_validator";

const projectRouter = Router();

projectRouter
  .route("/")
  .post(
    [authenticate, uploadImage.array("image")],
    checkSchema(addProjectValidator),
    validateRequest,
    ProjectController.addProject
  );

projectRouter
  .route("/tech-stack")
  .post(
    [authenticate, uploadImage.single("image")],
    checkSchema(addTechStackValidator),
    validateRequest,
    ProjectController.addTechStack
  )
  .get(authenticate, ProjectController.getAllTechStacks);

projectRouter
  .route("/tech-stack/:id")
  .put(
    [authenticate, uploadImage.single("image")],
    checkSchema(updateTechStackValidator),
    validateRequest,
    ProjectController.updateTechStack
  )
  .delete(
    authenticate,
    checkSchema(deleteTechStackValidator),
    validateRequest,
    ProjectController.removeTechStack
  );

export default projectRouter;
