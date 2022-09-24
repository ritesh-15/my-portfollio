import { PrismaClient } from "@prisma/client";

class Prisma {
  private static client: PrismaClient | null = null;

  static get(): PrismaClient {
    if (this.client === null) {
      this.client = new PrismaClient();
      return this.client;
    }

    return this.client;
  }
}

export default Prisma;
