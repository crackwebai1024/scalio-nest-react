import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PostDto } from 'src/posts/posts.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/posts (GET)', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .then((res) => {
        let data: PostDto[] = JSON.parse(res.text);
        let str: string =
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
        expect(data.length).toBe(10);
        expect(data[0].id).toBe(1);
        expect(data[0].userId).toBe(1);
        expect(data[0].title).toBe(str);
      });
  });

  it('/posts/:id (GET)', () => {
    let str: string =
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    return request(app.getHttpServer())
      .get('/posts/1')
      .then((res) => {
        let data: PostDto = JSON.parse(res.text);
        expect(data.id).toBe(1);
        expect(data.userId).toBe(1);
        expect(data.title).toBe(str);
      });
  });

  it('/posts/:id (GET)', () => {
    let str: string =
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    return request(app.getHttpServer())
      .get('/posts/30')
      .then((res) => {
        let data = JSON.parse(res.text);
        expect(data.message).toBe('Not Found');
      });
  });
});
