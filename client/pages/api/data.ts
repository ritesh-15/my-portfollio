import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export default async function data(req: NextApiRequest, res: NextApiResponse) {
  try {
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

    const techStack = await client.techStack.findMany({
      select: {
        image: {
          select: {
            publicId: true,
            url: true,
          },
        },
        name: true,
        id: true,
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

    await client.$disconnect()

    return res.status(200).json({
      success: true,
      user,
      projects,
      techStack,
    })
  } catch (err: any) {
    return res.status(500).json({
      success: false,
    })
  }
}
