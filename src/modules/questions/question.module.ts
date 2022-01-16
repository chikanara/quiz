import { QuizRepository } from './../quiz/quiz.repository';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './question.service';

import { Module } from '@nestjs/common';
import { QuestionRepository } from './question.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepository, QuizRepository])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
