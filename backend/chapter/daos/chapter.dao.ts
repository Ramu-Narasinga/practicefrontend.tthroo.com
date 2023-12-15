import debug from "debug";
import { PrismaClient } from "@prisma/client";
import prismaService from "../../common/services/prisma.service";

const log: debug.IDebugger = debug("app:chapter-dao");

export type ChapterSave = {
  files: string,
  steps_completed: number
}

class ChapterDao {
  prisma: PrismaClient;

  constructor() {
    log("Created new instance of ChapterDao");
    this.prisma = prismaService.getPrismaClient();
  }

  async getChapters(unit: string) {
    return await this.prisma.chapter.findMany({
      where: {
        unit,
        enabled: true
      }
    });
  }

  async getChapterById(chapterId: number, userId: number) {
    return await this.prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
      include: {
        steps: true,
        userChapters: true
      }
    });
    // return await this.prisma.userChapter.findMany({
    //   where: {
    //     user_id: userId,
    //     chapter_id: chapterId,
    //   },
    //   include: {
    //     // Include any related fields you want in the result
    //     chapter: true,
    //   },
    // });
  }

  async saveChapterById(chapterId: number, userId: number, data: ChapterSave) {
    return await this.prisma.userChapter.upsert({
      where: {
        id: chapterId, // Provide the unique identifier for the existing record
      },
      update: {
        ...data
      },
      create: {
        user_id: userId,
        chapter_id: chapterId,
        ...data
      },
    });
  }
}

export default new ChapterDao();
