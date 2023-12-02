import app from '../../app';
import supertest from 'supertest';
import { expect } from 'chai';
import { PrismaClient } from "@prisma/client";
import prismaService from '../../common/services/prisma.service';

const testUserBody = {
    email: `test@gmail.com`,
    password: 'test1234',
};

let accessToken = '';
let refreshToken = '';
const prisma: PrismaClient = prismaService.getPrismaClient();;

describe('[Auth]', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });
    after(function (done) {
        // shut down the Express.js server, close our Prisma connection, then
        // tell Mocha we're done:
        app.close(() => {
          prisma.$disconnect();
          done();
        });
    });

    describe('[Login]', function () {

      it.skip('[/auth/login]::[Login-With-Wrong-Credentials]', async function() {

        const payload = {...testUserBody};
        payload.password = 'wrongpassword'
        const res = await request.post('/auth/login').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0]).to.equal(
            'Invalid email and/or password'
        );
      });

      it('[/auth/login]::[Login-With-Missing-Password]', async () => {

        const payload = {email: 'test@gmail.com'};
        const res = await request.post('/auth/login').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0].msg).to.equal("Invalid value");
        expect(res.body.errors[0].param).to.equal("password");
      });

      it('[/auth/login]::[Login-With-Missing-Email]', async () => {

        const payload = {password: 'test@gmail.com'};
        const res = await request.post('/auth/login').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0].msg).to.equal("Invalid value");
        expect(res.body.errors[0].param).to.equal("email");
      });

      it('[/auth/login]::[Login-With-Invalid-Email]', async () => {

        const payload = {email: 'test@', password: 'test1234'};
        const res = await request.post('/auth/login').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0].msg).to.equal("Invalid value");
        expect(res.body.errors[0].param).to.equal("email");
      });

      it.skip('[/auth/login]::[Successful-Login]', async function() {
        const res = await request.post('/auth/login').send(testUserBody);
        expect(res.status).to.equal(201);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
        expect(res.body.accessToken).to.be.a('string');
        accessToken = res.body.accessToken;
        refreshToken = res.body.refreshToken;
      });
    });

    describe('[Refresh-Token]', function () {

      it.skip('[/auth/refresh-token]::[Successful-token-refresh]', async function () {

        const payload = {
          refreshToken
        }
        const res = await request
          .post('/auth/refresh-token')
          .set({ Authorization: `Bearer ${accessToken}` })
          .send(payload);
        expect(res.status).to.equal(201);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.an('object');
        expect(res.body.accessToken).to.be.a('string');

        accessToken = res.body.accessToken;
        refreshToken = res.body.refreshToken;
      });

      it.skip('[/auth/refresh-token]::[Invalid-refresh-token-provided]', async function () {

        const payload = {
          refreshToken: refreshToken+'$$'
        }
        const res = await request
          .post('/auth/refresh-token')
          .set({ Authorization: `Bearer ${accessToken}` })
          .send(payload);
        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0]).to.equal("Invalid refresh token");
      });

      it('[/auth/refresh-token]::[Missing-jwt-header-token]', async function () {

        const payload = {
          refreshToken: refreshToken+'$$'
        }
        const res = await request
          .post('/auth/refresh-token')
          .send(payload);

        expect(res.status).to.equal(401);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0]).to.equal("Missing jwt token");
      });
    });

    describe('[Signup]', function () {
      it.skip('[/auth/signup]::[Existing-User-Signup]', async function() {

        const payload = {
          "email": "test@gmail.com",
          "password": "test1234",
          "confirmPassword": "test1234",
          "isVerified": false
        };
        const res = await request.post('/auth/signup').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0]).to.equal("User already exists, try to sign in");
      });

      it('[/auth/signup]::[Missing-Password]', async function() {

        const payload = {
          "email": "test@gmail.com",
          "confirmPassword": "test1234",
          "isVerified": false
        };
        const res = await request.post('/auth/signup').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(2);
        expect(res.body.errors[0].msg).to.equal("Must include password (8+ characters)");
        expect(res.body.errors[0].param).to.equal("password");
        expect(res.body.errors[1].msg).to.equal("Passwords do not match");
        expect(res.body.errors[1].param).to.equal("confirmPassword");
      });

      it('[/auth/signup]::[Invalid-Email]', async function() {

        const payload = {
          "email": "test@",
          "password": "test1234",
          "confirmPassword": "test1234",
          "isVerified": false
        };
        const res = await request.post('/auth/signup').send(payload);

        expect(res.status).to.equal(400);
        expect(res.body.errors).to.be.an('array');
        expect(res.body.errors).to.have.length(1);
        expect(res.body.errors[0].msg).to.equal("Invalid value");
        expect(res.body.errors[0].param).to.equal("email");
      });
    });
});