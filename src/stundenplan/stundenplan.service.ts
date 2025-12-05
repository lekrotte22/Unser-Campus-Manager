import { Injectable } from '@nestjs/common';
import { CreateStundenplanDto } from './dto/create-stundenplan.dto';
import { UpdateStundenplanDto } from './dto/update-stundenplan.dto';

@Injectable()
export class StundenplanService {
  create(createStundenplanDto: CreateStundenplanDto) {
    return 'This action adds a new stundenplan';
  }

  findAll() {
    return `This action returns all stundenplan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stundenplan`;
  }

  update(id: number, updateStundenplanDto: UpdateStundenplanDto) {
    return `This action updates a #${id} stundenplan`;
  }

  remove(id: number) {
    return `This action removes a #${id} stundenplan`;
  }
}
