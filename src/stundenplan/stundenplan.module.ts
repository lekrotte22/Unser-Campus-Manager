import { Module } from '@nestjs/common';
import { StundenplanService } from './stundenplan.service';
import { StundenplanController } from './stundenplan.controller';

@Module({
  controllers: [StundenplanController],
  providers: [StundenplanService],
})
export class StundenplanModule {}
