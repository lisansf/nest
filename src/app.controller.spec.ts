import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getTesting', () => {
    it('Should return /testing!', () => {
      expect(appController.getTesting()).toBe('Halo testing');
    });
  });

  describe('getTesting2', () => {
    it('Should return /testing/v1', () => {
      expect(appController.getTesting2()).toBe('Halo testing/v1');
    });
  });
});
