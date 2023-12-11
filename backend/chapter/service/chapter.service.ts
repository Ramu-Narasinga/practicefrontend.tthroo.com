import debug from 'debug';
import ChapterDao, { ChapterSave } from "../daos/chapter.dao";

const log: debug.IDebugger = debug("app:chapter-service");
class ChapterService {

  async getChapters() {
    return await ChapterDao.getChapters();
  }

  async getChapterById(chapterId: number) {
    return await ChapterDao.getChapterById(chapterId);
  }

  async saveChapterById(chapterId: number, userId: number, data: ChapterSave) {
    return await ChapterDao.saveChapterById(chapterId, userId, data);
  }
}

export default new ChapterService();