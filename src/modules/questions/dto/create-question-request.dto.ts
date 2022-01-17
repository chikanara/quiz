import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';
export class QuestionDto {
  @ApiProperty({ type: String })
  @IsNotEmpty({ message: 'question required' })
  @Length(3, 255)
  question: string;
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  quizId: number;
}
