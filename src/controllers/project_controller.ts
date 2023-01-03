import { NextFunction, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import CloudinaryHelper from "../helpers/cloudinary_helper"
import Prisma from "../helpers/prisma_client"
import CreateHttpError from "../utils/create_http_error"
import fs from "fs/promises"
import removeFiles from "../utils/removeFile"

class ProjectController {
  /**
   * @route project/
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
      } = req.body

      const files: any = req.files

      if (!files?.length) {
        return next(
          CreateHttpError.unprocessableEntity("Project images are required!")
        )
      }

      const images = await Promise.all(
        files.map(async (file: Express.Multer.File) => {
          const uploadedImage = await CloudinaryHelper.uploadImage(file.path)
          await fs.unlink(file.path)
          return uploadedImage
        })
      )

      const project = await Prisma.get().project.create({
        data: {
          title,
          description,
          demoLink,
          gitHubLink: gitHubRepo,
          tagsId: techStack.map((id: string) => {
            return id
          }),
          isMobileApplication,
        },
      })

      await Promise.all(
        images.map(async (image) => {
          return await Prisma.get().cloudImage.create({
            data: {
              publicId: image.public_id,
              url: image.secure_url,
              projectId: project.id,
            },
          })
        })
      )

      res.status(201).json({
        success: true,
        message: "Project added successfully!",
      })
    }
  )

  /**
   * @route project/:id
   * @desc Get Project By ID
   * @access Private
   */
  static getProjectById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const project = await Prisma.get().project.findUnique({
        where: {
          id: id,
        },
        include: {
          images: {
            select: {
              publicId: true,
              url: true,
            },
          },
          tags: {
            select: {
              name: true,
              image: {
                select: {
                  url: true,
                  publicId: true,
                },
              },
            },
          },
        },
      })

      if (!project)
        return next(
          CreateHttpError.notFound("Project with given id is not found!")
        )

      res.json({
        success: true,
        project: project,
      })
    }
  )

  /**
   * @route project/
   * @desc Get all projects
   * @access Public
   */
  static getAllProjects = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const projects = await Prisma.get().project.findMany({
        include: {
          images: {
            select: {
              publicId: true,
              url: true,
            },
          },
          tags: {
            select: {
              name: true,
              image: {
                select: {
                  url: true,
                  publicId: true,
                },
              },
            },
          },
        },
      })

      res.json({
        success: true,
        projects,
      })
    }
  )

  /**
   * @route project/:id
   * @desc Remove project
   * @access Private
   */
  static removeProject = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params

      const project = await Prisma.get().project.findUnique({
        where: { id },
      })

      if (!project)
        return next(
          CreateHttpError.notFound("Project not found with given id!")
        )

      await Prisma.get().project.delete({ where: { id } })

      res.json({
        success: true,
        message: "Project removed successfully!",
      })
    }
  )

  /**
   * @route project/:id
   * @desc Update project
   * @access Private
   */
  static updateProject = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { title, description, gitHubRepo, demoLink, tags } = req.body
      const { id } = req.params

      const project = await Prisma.get().project.findUnique({ where: { id } })

      if (!project)
        return next(
          CreateHttpError.notFound("Project not found with given id!")
        )

      const updatedProject = await Prisma.get().project.update({
        where: {
          id,
        },
        data: {
          title,
          demoLink,
          description,
          gitHubLink: gitHubRepo,
          tagsId: {
            push: tags,
          },
        },
        include: {
          images: {
            select: {
              publicId: true,
              url: true,
            },
          },
          tags: {
            select: {
              name: true,
              image: {
                select: {
                  publicId: true,
                  url: true,
                },
              },
            },
          },
        },
      })

      res.json({
        success: true,
        message: "Project updated successfully!",
        project: updatedProject,
      })
    }
  )

  /**
   * @route project/tech-stack
   * @desc Add tech stack
   * @access Private
   */
  static addTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { name } = req.body
      const image = req.file

      if (!image) return next(CreateHttpError.notFound("Image not found!"))

      const isTechStackExits = await Prisma.get().techStack.findFirst({
        where: {
          name: {
            equals: name,
            mode: "insensitive",
          },
        },
      })

      // if tech stack already exits then delete the uploaded file
      if (isTechStackExits) {
        await removeFiles(req)
        return next(
          CreateHttpError.badRequest(
            "Tech stack with given name is already exits!"
          )
        )
      }

      const uploadedImage = await CloudinaryHelper.uploadImage(image.path)

      // if not uploaded successfully then delete the uploaded files from storage
      if (!uploadedImage) {
        await removeFiles(req)
        return next(
          CreateHttpError.internalServerError(
            "Something went wrong while uploading image please try again later!"
          )
        )
      }

      // delete files after successfully upload to cloudinary
      await removeFiles(req)

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
      })

      res.status(201).json({
        success: true,
        message: "Tech stack added successfully!",
        techStack,
      })
    }
  )

  /**
   * @route project/tech-stack/:id
   * @desc Remove tech stack
   * @access Private
   */
  static removeTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params

      const techStack = await Prisma.get().techStack.findUnique({
        where: {
          id,
        },
      })

      if (!techStack)
        return next(CreateHttpError.notFound("Tech stack not found!"))

      await Prisma.get().techStack.delete({
        where: {
          id,
        },
      })

      res.json({
        success: true,
        message: "Tech stack deleted!",
      })
    }
  )

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
      })

      res.json({
        success: true,
        techStacks,
      })
    }
  )

  /**
   * @route project/tech-stack/:id
   * @desc Update tech stack
   * @access Private
   */
  static updateTechStack = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params
      const { name } = req.body
      const image = req.file

      const isExits = await Prisma.get().techStack.findUnique({
        where: {
          id,
        },
      })

      if (!isExits)
        return next(CreateHttpError.notFound("Tech stack not found!"))

      let cloudImageId = null

      if (image) {
        // if image is present then update the cloud image
        const uploadedImage = await CloudinaryHelper.uploadImage(image.path)

        if (!uploadedImage)
          return next(
            CreateHttpError.internalServerError(
              "Something went wrong while uploading image please try again later!"
            )
          )

        await fs.unlink(image.path)

        const cloudImage = await Prisma.get().cloudImage.create({
          data: {
            publicId: uploadedImage.public_id,
            url: uploadedImage.secure_url,
          },
        })

        cloudImageId = cloudImage.id
      }

      const techStack = await Prisma.get().techStack.update({
        where: {
          id: isExits.id,
        },
        data: {
          name: name ? name : isExits.name,
          cloudImageId: cloudImageId ? cloudImageId : isExits.cloudImageId,
        },
      })

      if (cloudImageId) {
        await Prisma.get().cloudImage.delete({
          where: {
            id: isExits.cloudImageId,
          },
        })
      }

      res.json({
        success: true,
        message: "Tech stack updated successfully!",
        techStack,
      })
    }
  )

  /**
   * @route project/tech-stack/:id
   * @desc Get single tech stack
   * @access Private
   */
  static getTechStackById = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.params

      const techStack = await Prisma.get().techStack.findUnique({
        where: {
          id,
        },
        select: {
          image: {
            select: {
              url: true,
            },
          },
          name: true,
          id: true,
        },
      })

      if (!techStack)
        return next(
          CreateHttpError.notFound("Tech stack with given id not found!")
        )

      res.json({
        success: true,
        techStack,
      })
    }
  )
}

export default ProjectController
