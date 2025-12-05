import { Test, TestingModule } from '@nestjs/testing';
import { KalenderController } from './kalender.controller';
import { KalenderService } from './kalender.service';

describe('KalenderController', () => {
  let controller: KalenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KalenderController],
      providers: [KalenderService],
    }).compile();

    controller = module.get<KalenderController>(KalenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
