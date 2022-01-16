import { QuestionEntity } from './../../questions/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meetings')
export class Option {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({ type: 'varchar' })
  text: string;
  @Column({ type: 'boolean' })
  isCorrect: boolean;
  @ManyToOne(() => QuestionEntity, (question) => question.options)
  question: QuestionEntity;
}
