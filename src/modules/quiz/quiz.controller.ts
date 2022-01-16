import { Quiz } from './entity/quiz.entity';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get('/')
  async getAllQuiz(): Promise<[Quiz[], number]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    // return { data: quizData };
    return await this.quizService.createNewQuiz(quizData);
  }
}
