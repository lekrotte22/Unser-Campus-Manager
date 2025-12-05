import { Module } from '@nestjs/common';
import { KalenderService } from './kalender.service';
import { KalenderController } from './kalender.controller';

@Module({
  controllers: [KalenderController],
  providers: [KalenderService],
})
export class KalenderModule {}
