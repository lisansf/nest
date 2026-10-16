import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('GET /testing should return Halo testing', () => {
    return request(app.getHttpServer())
      .get('/testing')
      .expect(200)
      .expect('Halo testing');
  });

  it('GET /testing/v1 should return Halo testing/v1', () => {
    return request(app.getHttpServer())
      .get('/testing/v1')
      .expect(200)
      .expect('Halo testing/v1');
  });

  afterEach(async () => {
    await app.close();
  });
});
