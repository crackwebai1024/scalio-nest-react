import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { PostsService } from './posts/posts.service';
import { AppController } from './app.controller';

@Module({
  imports: [PostsModule],
  controllers: [PostsController, AppController],
  providers: [PostsService],
})
export class AppModule {}
