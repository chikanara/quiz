import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty({ type: String, required: false })
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;
  @ApiProperty({ type: String, required: false })
  @IsNotEmpty()
  @Length(3)
  description: string;
}
