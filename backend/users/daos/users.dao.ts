import { CreateUserDto } from "../dto/create.user.dto";
import debug from "debug";
import { PrismaClient } from "@prisma/client";
import prismaService from "../../common/services/prisma.service";

const log: debug.IDebugger = debug("app:in-memory-dao");

class UsersDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of UsersDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async getUserByEmailWithPassword(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  async createUser(userFields: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        ...userFields
      },
    })
  }
}

export default new UsersDao();
