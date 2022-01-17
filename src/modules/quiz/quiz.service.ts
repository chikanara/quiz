import { QuestionEntity } from './../questions/entities/question.entity';
import { Quiz } from './entity/quiz.entity';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}
  async getAllQuiz(): Promise<[Quiz[], number]> {
    // return [1, 2, 3, 4, 'From the service'];
    return await this.quizRepository
      .createQueryBuilder('q')
      // .leftJoinAndSelect(QuestionEntity, 'qt', 'q.id=qt.quizId')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'o')
      .take(1)
      .getManyAndCount();
    // .getMany();
  }
  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, {
      relations: ['questions', 'questions.options'],
    });
  }
}
