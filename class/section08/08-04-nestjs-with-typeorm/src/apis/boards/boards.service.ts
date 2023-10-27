import { Injectable, Scope } from '@nestjs/common';

//인젝션-스코프 => 1.싱글톤(new 한번)으로할래 ?아니면
//                2.Request 스코프(매 요청마다 new)로할래?

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
