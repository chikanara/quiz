import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @Length(3, 255)
  text?: string;
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  questionId!: number;
  @ApiProperty({ type: Boolean })
  @IsNotEmpty()
  isCorrect?: boolean;
}
