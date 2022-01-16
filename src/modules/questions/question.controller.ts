import { QuestionService } from './question.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuestionDto } from './dto/create-question-request.dto';
import { QuestionEntity } from './entities/question.entity';

@Controller({ path: 'questions' })
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post()
  @UsePipes(ValidationPipe)
  // saveQuestion(@Body() question: QuestionDto) {
  //   return question;
  // }
  async saveQuestion(@Body() question: QuestionDto): Promise<QuestionEntity> {
    const quiz = await this.questionService.getQuizById(question.quizId);
    return this.questionService.createQuestion(question, quiz);
  }
}
