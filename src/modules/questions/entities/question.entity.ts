import { Option } from './../../options/entities/option.entity';
import { Quiz } from './../../quiz/entity/quiz.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('questions')
export class QuestionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  readonly id!: number;
  @Column({
    type: 'varchar',
  })
  question: string;
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
