import { Injectable } from '@nestjs/common';
import { CreateKalenderDto } from './dto/create-kalender.dto';
import { UpdateKalenderDto } from './dto/update-kalender.dto';

@Injectable()
export class KalenderService {
  create(createKalenderDto: CreateKalenderDto) {
    return 'This action adds a new kalender';
  }

  findAll() {
    return `This action returns all kalender`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kalender`;
  }

  update(id: number, updateKalenderDto: UpdateKalenderDto) {
    return `This action updates a #${id} kalender`;
  }

  remove(id: number) {
    return `This action removes a #${id} kalender`;
  }
}
