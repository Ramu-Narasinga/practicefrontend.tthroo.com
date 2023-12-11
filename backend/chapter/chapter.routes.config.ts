import { CommonRoutesConfig } from '../common/common.routes.config';
import chapterController from './controllers/chapter.controller';
import express from 'express';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

import loadEnv from '../common/scripts/loadenv';

loadEnv();

export class ChapterRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ChapterRoutes');
    }

    configureRoutes(): express.Application {

        this.app.get('/chapters',
          chapterController.getChapters
        );

        this.app.get('/chapter/:chapterId',
          jwtMiddleware.validJWTNeeded,
          chapterController.getChapterById
        );

        this.app.post(
          '/chapter/:chapterId',
          jwtMiddleware.validJWTNeeded,
          chapterController.saveChapterById
        )

        return this.app;
    }
}
