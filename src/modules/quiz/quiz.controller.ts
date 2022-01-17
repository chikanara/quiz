import { QuestionDto } from './../questions/dto/create-question-request.dto';
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
  // Version,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';
import { ApiBody, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        data: {
          $ref: getSchemaPath(QuestionDto),
        },
      },
    },
    description: '200. Success get menu platforms',
  })
  // @ApiUnauthorizedResponse({ type: () => MessageResponseDto })
  @Get(':id')
  // @ApiExtraModels()
  // @Version('1')
  @Get('/')
  async getAllQuiz(): Promise<[Quiz[], number]> {
    return await this.quizService.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
    return await this.quizService.getQuizById(id);
  }

  @ApiOkResponse({
    schema: {
      type: 'object',
      example: {
        message: 'string',
      },
    },
    description: '201. quiz successfully',
  })
  @ApiBody({ type: CreateQuizDto })
  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    // return { data: quizData };
    return await this.quizService.createNewQuiz(quizData);
  }
}
