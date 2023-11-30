import { PrismaClient } from '@prisma/client';
import debug from 'debug';

const log: debug.IDebugger = debug('app:prisma-service');

class PrismaService {

  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  
  getPrismaClient() {
    return this.prisma;
  }

}

export default new PrismaService();