import { Test, TestingModule } from '@nestjs/testing';
import { StundenplanController } from './stundenplan.controller';
import { StundenplanService } from './stundenplan.service';

describe('StundenplanController', () => {
  let controller: StundenplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StundenplanController],
      providers: [StundenplanService],
    }).compile();

    controller = module.get<StundenplanController>(StundenplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
