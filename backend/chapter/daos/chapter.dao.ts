import debug from "debug";
import { PrismaClient } from "@prisma/client";
import prismaService from "../../common/services/prisma.service";

const log: debug.IDebugger = debug("app:chapter-dao");

class ChapterDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of ChapterDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async getChapters() {
    return await this.prisma.chapter.findMany();
  }

  async getChapterById(chapterId: number) {
    return await this.prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
      include: {
        steps: true
      }
    });
  }
}

export default new ChapterDao();
