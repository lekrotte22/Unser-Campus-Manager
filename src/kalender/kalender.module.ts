import { Module } from '@nestjs/common';
import { KalenderService } from './kalender.service';
import { KalenderController } from './kalender.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kalender } from './entities/kalender.entity';
import { KalenderRepository } from './kalender.repository';

@Module({
  controllers: [KalenderController],
  providers: [KalenderService, KalenderRepository],
  imports: [TypeOrmModule.forFeature([Kalender])],
})
export class KalenderModule {}
