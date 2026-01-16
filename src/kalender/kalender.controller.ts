import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { KalenderService } from './kalender.service';
import { CreateKalenderDto } from './dto/create-kalender.dto';
import 'reflect-metadata';

@Controller('kalender')
export class KalenderController {
  constructor(private readonly kalenderService: KalenderService) {}

  @Post()
  create(@Body() createKalenderDto: CreateKalenderDto) {
    return this.kalenderService.create(createKalenderDto);
  }

  @Get()
  findAll() {
    return this.kalenderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kalenderService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kalenderService.remove(+id);
  }
}
