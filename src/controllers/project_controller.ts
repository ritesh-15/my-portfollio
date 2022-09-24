import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import CloudinaryHelper from "../helpers/cloudinary_helper";
import Prisma from "../helpers/prisma_client";
import ApiHttpError from "../utils/api_http_error";
import fs from "fs/promises";

class ProjectController {
  /**
   * @route project/add-project
   * @desc Add project
   * @access Private
   */
  static addProject = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const {
        title,
        description,
        techStack,
        isMobileApplication,
        gitHubRepo,
        demoLink,
      } = req.body;
    }
  );

  /**
   * @route project/tech-stack
   * @desc Add tech stack
   * @access Private
   */
  static addTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name } = req.body;
      const image = req.file;

      if (!image) return next(ApiHttpError.notFound("Image not found!"));

      const isTechStackExits = await Prisma.get().techStack.findFirst({
        where: {
          name: {
            equals: name,
            mode: "insensitive",
          },
        },
      });

      if (isTechStackExits)
        return next(
          ApiHttpError.badRequest(
            "Tech stack with given name is already exits!"
          )
        );

      const uploadedImage = await CloudinaryHelper.uploadImage(image.path);

      if (!uploadedImage)
        return next(
          ApiHttpError.internalServerError(
            "Something went wrong while uploading image please try again later!"
          )
        );

      await fs.unlink(image.path);

      const techStack = await Prisma.get().techStack.create({
        data: {
          name,
          image: {
            create: {
              publicId: uploadedImage.public_id,
              url: uploadedImage.secure_url,
            },
          },
        },
      });

      res.status(201).json({
        success: true,
        message: "Tech stack added successfully!",
        techStack,
      });
    }
  );

  /**
   * @route project/tech-stack/:id
   * @desc Remove tech stack
   * @access Private
   */
  static removeTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;

      const techStack = await Prisma.get().techStack.findUnique({
        where: {
          id,
        },
      });

      if (!techStack)
        return next(ApiHttpError.notFound("Tech stack not found!"));

      await Prisma.get().techStack.delete({
        where: {
          id,
        },
      });

      res.json({
        success: true,
        message: "Tech stack deleted!",
      });
    }
  );

  /**
   * @route project/tech-stack
   * @desc Get all tech stacks
   * @access Private
   */
  static getAllTechStacks = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const techStacks = await Prisma.get().techStack.findMany({
        select: {
          image: {
            select: {
              url: true,
            },
          },
          name: true,
          id: true,
        },
      });

      res.json({
        success: true,
        techStacks,
      });
    }
  );

  /**
   * @route project/tech-stack/:id
   * @desc Update tech stack
   * @access Private
   */
  static updateTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params;
      const { name } = req.body;
      const image = req.file;

      const isExits = await Prisma.get().techStack.findUnique({
        where: {
          id,
        },
      });

      if (!isExits) return next(ApiHttpError.notFound("Tech stack not found!"));

      let cloudImageId = null;

      if (image) {
        // if image is present then update the cloud image
        const uploadedImage = await CloudinaryHelper.uploadImage(image.path);

        if (!uploadedImage)
          return next(
            ApiHttpError.internalServerError(
              "Something went wrong while uploading image please try again later!"
            )
          );

        await fs.unlink(image.path);

        const cloudImage = await Prisma.get().cloudImage.create({
          data: {
            publicId: uploadedImage.public_id,
            url: uploadedImage.secure_url,
          },
        });

        cloudImageId = cloudImage.id;
      }

      const techStack = await Prisma.get().techStack.update({
        where: {
          id: isExits.id,
        },
        data: {
          name: name ? name : isExits.name,
          cloudImageId: cloudImageId ? cloudImageId : isExits.cloudImageId,
        },
      });

      if (cloudImageId) {
        await Prisma.get().cloudImage.delete({
          where: {
            id: isExits.cloudImageId,
          },
        });
      }

      res.json({
        success: true,
        message: "Tech stack updated successfully!",
        techStack,
      });
    }
  );
}

export default ProjectController;
