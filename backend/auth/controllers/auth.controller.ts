import express from "express";
import debug from "debug";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import usersService from "../../users/services/users.service";
import authService from "../service/auth.service";

const log: debug.IDebugger = debug("app:auth-controller");
class AuthController {
  async createJWT(req: express.Request, res: express.Response) {
    try {
      return res.status(201).send(authService.generateLoginResponse(req.body));
    } catch (err) {
      log("createJWT error: %O", err);
      return res.status(500).send();
    }
  }

  async registerUser(req: express.Request, res: express.Response) {
    try {
      let createdUser = await usersService.createUser(req.body);
      log("createdUser:", createdUser);
      req.body.userId = createdUser.id;
      let loginRes = authService.generateLoginResponse(req.body);
      res.status(200).send(loginRes);
    } catch (err) {
      log("createJWT error: %O", err);
      console.log("inside controller error", err);
      return res.status(500).send();
    }
  }
}

export default new AuthController();
