import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  name: string;
  fertig: boolean;
  abgabedatum: Date;
}
