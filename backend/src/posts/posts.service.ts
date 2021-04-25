import { HttpException, Injectable } from '@nestjs/common';
import { POSTS } from './posts.mock';

@Injectable()
export class PostsService {
  private posts = POSTS;
  public async getPosts() {
    return this.posts;
  }

  public async getPostById(id: number) {
    let post = this.posts.find((item) => item.id === Number(id));
    if (!post) {
      throw new HttpException('Not Found', 404);
    }
    return post;
  }
}
