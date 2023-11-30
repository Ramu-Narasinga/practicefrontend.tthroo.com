import { CommonRoutesConfig } from '../common/common.routes.config';
import authController from './controllers/auth.controller';
import authMiddleware from './middleware/auth.middleware';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware';
import { body } from 'express-validator';
import jwtMiddleware from './middleware/jwt.middleware';

import dotenv from 'dotenv';

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
    throw dotenvResult.error;
}

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/auth/login`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.verifyUserPassword,
            authController.createJWT,
        ]);

        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            authController.createJWT,
        ]);

        this.app.post(`/auth/signup`, [            
            body('email').isEmail(),
            body('password')
                .isLength({ min: 8 })
                .withMessage('Must include password (8+ characters)'),
            body('confirmPassword')
              .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match');
                }
                return true;
            }),
            body('isVerified'),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.validateSameEmailDoesntExist,
            authMiddleware.hashPassword,
            authController.registerUser
        ]);

        return this.app;
    }
}
