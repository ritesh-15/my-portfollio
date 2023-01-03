import Prisma from "../helpers/prisma_client"

export interface ICreateUser {
  about: string
  email: string
  hashPassword: string
}

export interface IUpdateUser {
  about?: string
  email?: string
  heading?: string
  subHeading?: string
  cloudImageId?: string
  contactHeading?: string
  contactSubHeading?: string
}

class UserService {
  static selectOptions = {
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
  }

  static findFirst() {
    return Prisma.get().user.findFirst({
      select: this.selectOptions,
    })
  }

  static findByEmail(email: string, excludePassword: boolean = true) {
    return Prisma.get().user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
      select: {
        ...this.selectOptions,
        password: !excludePassword,
      },
    })
  }

  static createNewUser(data: ICreateUser) {
    const { email, hashPassword, about } = data
    return Prisma.get().user.create({
      data: {
        email,
        password: hashPassword,
        info: {
          create: {
            heading: "",
            subHeading: "",
            about,
          },
        },
      },
    })
  }

  static updateUser(id: string, data: IUpdateUser) {
    return Prisma.get().user.update({
      where: {
        id,
      },
      data: {
        email: data.email,
        info: {
          update: {
            heading: data.heading,
            subHeading: data.subHeading,
            about: data.about,
            contactHeading: data.contactHeading,
            contactSubHeading: data.contactSubHeading,
            cloudImageId: data.cloudImageId,
          },
        },
      },
      select: this.selectOptions,
    })
  }

  static findByID(id: string, excludePassword: boolean = true) {
    return Prisma.get().user.findFirst({
      where: {
        id,
      },
      select: {
        ...this.selectOptions,
        password: !excludePassword,
      },
    })
  }
}

export default UserService
