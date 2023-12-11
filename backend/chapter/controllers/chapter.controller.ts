import express from "express";
import debug from "debug";
import chapterService from "../service/chapter.service";

const log: debug.IDebugger = debug("app:chapter-controller");
class ChapterController {

  async getChapters(req: express.Request, res: express.Response) {
      try {
        let chapters = await chapterService.getChapters();
        log("fetched chapter successfully:");
        res.status(200).send(chapters);
      } catch (err) {
        log("getChapter error: %O", err);
        return res.status(500).send();
      }
  }

  async getChapterById(req: express.Request, res: express.Response) {
    try {
      const chapterId = parseInt(req.params.chapterId);
      let chapter = await chapterService.getChapterById(chapterId);
      log("fetched chapter successfully:");

      if (!chapter) {
        return res.status(404).json({ error: 'Chapter not found' });
      }

      res.status(200).send(chapter);
    } catch (err) {
      log("getChapter error: %O", err);
      return res.status(500).send();
    }
  }

  async saveChapterById(req: express.Request, res: express.Response) {
    try {
      const chapterId = parseInt(req.params.chapterId);
      const { userId } = res.locals.jwt;
      const {
        files,
        steps_completed
      } = req.body;
      
      await chapterService.saveChapterById(chapterId, userId, { files, steps_completed });
      log("saved chapter successfully:");

      res.status(200).send();
    } catch (err) {
      log("getChapter error: %O", err);
      return res.status(500).send();
    }
  }
}

export default new ChapterController();
