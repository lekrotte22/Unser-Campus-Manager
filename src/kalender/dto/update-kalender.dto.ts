import { PartialType } from '@nestjs/mapped-types';
import { CreateKalenderDto } from './create-kalender.dto';

export class UpdateKalenderDto extends PartialType(CreateKalenderDto) {}
