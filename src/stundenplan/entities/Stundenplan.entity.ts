import { Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('Stundenplan')
export class Stundenplan {
  @PrimaryGeneratedColumn()
  id: bigint;
}
