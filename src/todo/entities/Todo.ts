import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('newTodo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'boolean' })
  fertig: boolean;

  @Column({ type: 'date' })
  abgabedatum: Date;
}
