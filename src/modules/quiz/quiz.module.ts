import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService],
})
export class QuizModule {}
