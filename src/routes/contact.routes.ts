import { Router } from "express";
import { checkSchema } from "express-validator";
import { ContactController } from "../controllers";
import { authenticate, validateRequest } from "../middlewares";
import { contactValidator } from "../validator/contact_validator";

const contactRouter = Router();

contactRouter
  .route("/")
  .post(
    checkSchema(contactValidator),
    validateRequest,
    ContactController.newContact
  )
  .get([authenticate], ContactController.getAllContacts);

contactRouter
  .route("/:id")
  .delete([authenticate], ContactController.removeContact);

export default contactRouter;
