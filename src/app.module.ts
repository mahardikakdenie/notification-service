import { Module } from '@nestjs/common';
import { NotificationController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [AppService],
})
export class AppModule {}
