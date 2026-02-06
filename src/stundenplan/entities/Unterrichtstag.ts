import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stundenplan } from './Stundenplan.entity';

@Entity('Unterrichtstag')
export class Unterrichtstag {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column()
  datum: string;

  @ManyToOne(() => Stundenplan, (a) => a.id)
  @JoinTable()
  stundenplan: Stundenplan;
}
