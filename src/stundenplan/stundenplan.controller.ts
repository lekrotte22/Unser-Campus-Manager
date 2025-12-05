import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StundenplanService } from './stundenplan.service';
import { CreateStundenplanDto } from './dto/create-stundenplan.dto';
import { UpdateStundenplanDto } from './dto/update-stundenplan.dto';

@Controller('stundenplan')
export class StundenplanController {
  constructor(private readonly stundenplanService: StundenplanService) {}

  @Post()
  create(@Body() createStundenplanDto: CreateStundenplanDto) {
    return this.stundenplanService.create(createStundenplanDto);
  }

  @Get()
  findAll() {
    return this.stundenplanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stundenplanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStundenplanDto: UpdateStundenplanDto) {
    return this.stundenplanService.update(+id, updateStundenplanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stundenplanService.remove(+id);
  }
}
