import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Prisma from "../helpers/prisma_client";
import CreateHttpError from "../utils/create_http_error";

class ContactController {
  /**
   * @route contact/
   * @desc New contact
   * @access Public
   */
  static newContact = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name, email, message } = req.body;

      await Prisma.get().contacts.create({
        data: {
          name,
          email,
          message,
        },
      });

      res.status(201).json({
        success: true,
        message: "Thanks for reaching out to me!",
      });
    }
  );

  /**
   * @route contact/
   * @desc Get all contacts
   * @access Private
   */
  static getAllContacts = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const contacts = await Prisma.get().contacts.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

      res.json({
        success: true,
        contacts,
      });
    }
  );

  /**
   * @route contact/
   * @desc Delete contact
   * @access Private
   */
  static removeContact = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const contact = await Prisma.get().contacts.findUnique({
        where: { id },
      });

      if (!contact) return next(CreateHttpError.notFound("No contact found!"));

      await Prisma.get().contacts.delete({
        where: { id },
      });

      res.json({
        success: true,
        message: "Contact removed successfully!",
      });
    }
  );
}

export default ContactController;
