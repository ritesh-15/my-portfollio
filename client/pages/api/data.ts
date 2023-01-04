import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import IUser from "../../interfaces/user_interface"
import { IProject } from "../../interfaces/project_interface"

const client = new PrismaClient()

export default async function data(req: NextApiRequest, res: NextApiResponse) {
  try {
    await client.$connect()

    const user = await client.user.findFirst({
      select: {
        id: true,
        email: true,
        password: false,
        info: {
          select: {
            heading: true,
            subHeading: true,
            about: true,
            image: {
              select: {
                publicId: true,
                url: true,
                id: true,
              },
            },
            contactHeading: true,
            contactSubHeading: true,
          },
        },
      },
    })

    const projects = await client.project.findMany({
      where: {
        isFeatured: true,
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

    return res.status(200).json({
      success: true,
      user,
      projects,
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
    })
  }
}
