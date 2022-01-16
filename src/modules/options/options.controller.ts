import { QuestionService } from './../questions/question.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { OptionsService } from './options.service';

@Controller('question/option')
export class OptionsController {
  constructor(
    private readonly optionsService: OptionsService,
    private readonly questionService: QuestionService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() option: CreateOptionDto) {
    const question = await this.questionService.findQuestionById(
      option.questionId,
    );
    // return { question, option };
    const newOption = await this.optionsService.createOption(option, question);
    return { newOption, question, option };
  }
}
