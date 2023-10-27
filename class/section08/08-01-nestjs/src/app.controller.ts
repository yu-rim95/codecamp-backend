import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { profile } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // 타입스크립트문법appService는 AppService타입이다
  //private readonly 은 타입스크립트에서 상속받는거말고 이클래스안에서만 읽기만가능 수정안됨

  @Get('/products/buy')
  getHello(): string {
    const qqq = 3;

    return this.appService.qqq();
  }
}
