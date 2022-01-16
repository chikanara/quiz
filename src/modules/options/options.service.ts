import { QuestionEntity } from './../questions/entities/question.entity';
import { OptionsRepository } from './options.repository';
import { Injectable } from '@nestjs/common';
import { QuestionRepository } from '../questions/question.repository';
import { CreateOptionDto } from './dto/create-option.dto';

@Injectable()
export class OptionsService {
  constructor(
    private readonly optionsRepository: OptionsRepository,
    private readonly questionRepository: QuestionRepository,
  ) {}

  async createOption(option: CreateOptionDto, question: QuestionEntity) {
    const newOption = await this.optionsRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });
    question.options = [...question.options, newOption];
    await question.save();
    return newOption;
  }
}
