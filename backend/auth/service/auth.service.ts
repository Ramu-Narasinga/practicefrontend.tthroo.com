import crypto from "crypto";
import jwt from "jsonwebtoken";
import debug from 'debug';
import { LoginUserDto } from "../dto/login.user.dto";
import loadEnv from "../../common/scripts/loadenv";

loadEnv();

const tokenExpiry = process.env.tokenExpiry;
// @ts-expect-error
const jwtSecret: string = process.env.jwtSecret;

const log: debug.IDebugger = debug("app:auth-service");

type JwtData = {
  userId: number, 
  email: string
}
class AuthService {
  salt: crypto.KeyObject = {} as crypto.KeyObject;

  generateAndGetHash(refreshId: string) {
    log("refreshId", refreshId);
    let hash = crypto
      .createHmac("sha512", this.generateAndGetSalt())
      .update(refreshId)
      .digest("base64");

    return hash;
  }

  generateAndGetSalt() {
    this.salt = crypto.createSecretKey(crypto.randomBytes(16));
    return this.salt;
  }

  generateAndGetRefreshKey() {
    return this.salt.export();
  }

  generateAndGetJwtToken(requestBody: JwtData, jwtSecret: string) {
    return jwt.sign(requestBody, jwtSecret, {
      expiresIn: tokenExpiry,
    });
  }

  generateLoginResponse(reqBody: JwtData) {
    log("reqBody", reqBody, "jwtSecret", jwtSecret);
    const refreshId = reqBody.userId + jwtSecret;
    const hash = this.generateAndGetHash(refreshId);
    const token = this.generateAndGetJwtToken(reqBody, jwtSecret);
    return { 
      accessToken: token, 
      refreshToken: hash
    }
  }
}

export default new AuthService();