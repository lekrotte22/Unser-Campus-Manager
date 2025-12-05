import { PartialType } from '@nestjs/mapped-types';
import { CreateStundenplanDto } from './create-stundenplan.dto';

export class UpdateStundenplanDto extends PartialType(CreateStundenplanDto) {}
