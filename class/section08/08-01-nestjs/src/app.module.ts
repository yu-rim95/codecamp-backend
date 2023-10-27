import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], //의존성주입 new AppController에 AppService넣어줘 라는의미
})
export class AppModule {}
