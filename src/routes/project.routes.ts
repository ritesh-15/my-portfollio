import { Router } from "express";
import { checkSchema } from "express-validator";
import uploadImage from "../config/multer_config";
import ProjectController from "../controllers/project_controller";
import {
  authenticate,
  compressImage,
  parseBody,
  validateRequest,
} from "../middlewares";
import {
  addProjectValidator,
  addTechStackValidator,
  deleteTechStackValidator,
  getSingleProjectSchema,
  getTechStackByIdValidator,
  removeProjectValidator,
  updateProjectValidator,
  updateTechStackValidator,
} from "../validator/project_validator";

const projectRouter = Router();

projectRouter
  .route("/")
  .post(
    [authenticate, uploadImage.array("image"), compressImage, parseBody],
    checkSchema(addProjectValidator),
    validateRequest,
    ProjectController.addProject
  )
  .get(ProjectController.getAllProjects);

projectRouter
  .route("/single/:id")
  .get(
    [authenticate],
    checkSchema(getSingleProjectSchema),
    validateRequest,
    ProjectController.getProjectById
  );

projectRouter
  .route("/:id")
  .delete(
    [authenticate],
    checkSchema(removeProjectValidator),
    validateRequest,
    ProjectController.removeProject
  )
  .put(
    [authenticate],
    checkSchema(updateProjectValidator),
    validateRequest,
    ProjectController.updateProject
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
  )
  .get(
    authenticate,
    checkSchema(getTechStackByIdValidator),
    validateRequest,
    ProjectController.getTechStackById
  );

export default projectRouter;
