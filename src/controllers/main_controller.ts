import { NextFunction, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Prisma from "../helpers/prisma_client"
import { UserService } from "../services"

class MainController {
  /**
   * @route /info
   * @desc Get all info
   * @access Public
   */
  static info = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const userInfo = await UserService.findFirst()

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
        userInfo,
      })
    }
  )
}

export default MainController
