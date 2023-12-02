import debug from 'debug';
import ChapterDao from "../daos/chapter.dao";

const log: debug.IDebugger = debug("app:chapter-service");
class ChapterService {

  async getChapters() {
    return await ChapterDao.getChapters();
  }

  async getChapterById(chapterId: number) {
    return await ChapterDao.getChapterById(chapterId);
  }
}

export default new ChapterService();