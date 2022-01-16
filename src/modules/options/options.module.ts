import { OptionsRepository } from './options.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';
import { QuestionRepository } from '../questions/question.repository';
import { QuestionService } from '../questions/question.service';
import { QuizRepository } from '../quiz/quiz.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OptionsRepository,
      QuestionRepository,
      QuizRepository,
    ]),
  ],
  controllers: [OptionsController],
  providers: [OptionsService, QuestionService],
})
export class OptionsModule {}
