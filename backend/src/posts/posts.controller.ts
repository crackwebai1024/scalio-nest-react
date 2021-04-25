import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('')
  public getPosts() {
    return this.postsService.getPosts();
  }

  @Get(':id')
  public getPostId(@Param('id') id: number) {
    return this.postsService.getPostById(id);
  }
}
