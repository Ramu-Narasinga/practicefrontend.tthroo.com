import debug from 'debug';
import ChapterDao, { ChapterSave } from "../daos/chapter.dao";

const log: debug.IDebugger = debug("app:chapter-service");
class ChapterService {

  async getChapters(unit: string) {
    return await ChapterDao.getChapters(unit);
  }

  async getChapterById(chapterId: number, userId: number) {
    return await ChapterDao.getChapterById(chapterId, userId);
  }

  async saveChapterById(chapterId: number, userId: number, data: ChapterSave) {
    return await ChapterDao.saveChapterById(chapterId, userId, data);
  }
}

export default new ChapterService();