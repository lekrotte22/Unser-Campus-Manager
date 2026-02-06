import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { Unterrichtstag } from './Unterrichtstag';

@Entity('Unterrichtsstunde')
export class Unterrichtsstunde {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column()
  name: string;
  @Column()
  lehrer: string;
  @Column()
  start: string;
  @Column()
  ende: string;
  @Column()
  test: boolean;

  @ManyToOne(() => Unterrichtstag, (u) => u.id)
  @JoinTable()
  unterrichtstag: Unterrichtstag;
}
