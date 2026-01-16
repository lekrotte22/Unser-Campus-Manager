import { Injectable } from '@nestjs/common';
import { CreateKalenderDto } from './dto/create-kalender.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kalender } from './entities/kalender.entity';

@Injectable()
export class KalenderService {
  constructor(
    @InjectRepository(Kalender)
    private kalenderRepository: Repository<Kalender>,
  ) {}

  create(createKalenderDto: CreateKalenderDto) {
    return this.kalenderRepository.create(createKalenderDto);
  }

  findAll() {
    return this.kalenderRepository.find();
  }

  findOne(id: number) {
    return this.kalenderRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    return this.kalenderRepository.delete(id);
  }
}
