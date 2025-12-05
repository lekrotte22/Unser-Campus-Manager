import { Test, TestingModule } from '@nestjs/testing';
import { StundenplanService } from './stundenplan.service';

describe('StundenplanService', () => {
  let service: StundenplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StundenplanService],
    }).compile();

    service = module.get<StundenplanService>(StundenplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
