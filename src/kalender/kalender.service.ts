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
    const res = this.kalenderRepository.create(createKalenderDto);
    this.kalenderRepository.save(createKalenderDto);
    return res;
  }

  findAll() {
    return this.kalenderRepository.find();
  }

  findOne(id: number) {
    return this.kalenderRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    const obj = this.kalenderRepository.delete(id);
    return obj;
  }
}
