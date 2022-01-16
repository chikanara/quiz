import { QuizRepository } from './../quiz/quiz.repository';
import { QuestionEntity } from './entities/question.entity';
import { Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/create-question-request.dto';
import { QuestionRepository } from './question.repository';
import { Quiz } from '../quiz/entity/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly quizRepository: QuizRepository,
  ) {}

  async createQuestion(
    question: QuestionDto,
    quiz: Quiz,
  ): Promise<QuestionEntity> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });
    quiz.questions = [newQuestion, ...quiz.questions];
    await quiz.save();

    return newQuestion;
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, { relations: ['questions'] });
  }
  async findQuestionById(id: number): Promise<QuestionEntity> {
    return await this.questionRepository.findOne(id, {
      relations: ['options', 'quiz'],
    });
  }
}
