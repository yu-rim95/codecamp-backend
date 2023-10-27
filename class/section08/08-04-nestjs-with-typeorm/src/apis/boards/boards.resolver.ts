import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {} // 타입스크립트문법appService는 AppService타입이다
  //private readonly 은 타입스크립트에서 상속받는거말고 이클래스안에서만 읽기만가능 수정안됨

  @Query(() => String)
  getHello(): string {
    return this.boardsService.qqq();
  }
}
