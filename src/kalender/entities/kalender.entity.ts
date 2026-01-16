import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('kalender') // Der Name der Tabelle in MariaDB
export class Kalender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bezeichnung: string;

  @Column({ type: 'date' })
  datum: Date;

  @Column({ type: 'text', nullable: true })
  aufgabenBeschreibung: string;
}
