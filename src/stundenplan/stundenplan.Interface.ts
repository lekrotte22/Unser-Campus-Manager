import { Unterrichtsstunde } from './entities/Unterrichtsstunde';

export class CreateStundenplanDto {
  id: number;
  tag: string;
  stunden: Unterrichtsstunde[];
}