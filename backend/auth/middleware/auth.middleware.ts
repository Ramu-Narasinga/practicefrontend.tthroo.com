import express from "express";
import usersService from "../../users/services/users.service";
import * as argon2 from "argon2";
import bcrypt from "bcrypt";
import debug from 'debug';

const log: debug.IDebugger = debug("app:auth-middleware");
class AuthMiddleware {
  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      req.body.email
    );
    if (user) {
      const passwordHash = user.password;

      const isPasswordValid = await bcrypt.compare(req.body.password, passwordHash);

      if (isPasswordValid) {
        req.body = {
          userId: user.id,
          email: user.email
        };
        return next();
      }
    }
    // Giving the same message in both cases
    // helps protect against cracking attempts:
    res.status(400).send({ errors: ["Invalid email and/or password"] });
  }

  async validateSameEmailDoesntExist(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      req.body.email
    );
    log("user", user);
    if (user) {
      res.status(400).send({ errors: ["User already exists, try to sign in"] });
    } else {
      next();
    }
  }

  async hashPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;
      return next();
    } catch(err) {
      res.status(400).send({ errors: "Issue in password encryption" });
    }
  }
}

export default new AuthMiddleware();
