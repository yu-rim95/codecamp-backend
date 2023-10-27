import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';

@Module({
  imports: [],
  providers: [
    BoardsResolver, //
    BoardsService,
  ], //의존성주입 new AppController에 AppService넣어줘 라는의미
})
export class BoardsModule {}
