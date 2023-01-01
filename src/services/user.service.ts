import { inspect } from "util"
import Prisma from "../helpers/prisma_client"

class UserService {
  static findUserByIdOrEmail(payload: string, excludePassword: boolean = true) {
    return Prisma.get().user.findFirst({
      where: {
        OR: [
          {
            id: payload,
          },
          {
            email: {
              mode: "insensitive",
              equals: payload,
            },
          },
        ],
      },
      select: {
        id: true,
        email: true,
        password: !excludePassword,
        about: {
          select: {
            name: true,
            about: true,
          },
        },
      },
    })
  }
}

export default UserService
