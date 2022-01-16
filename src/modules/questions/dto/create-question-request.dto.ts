import { IsNotEmpty, Length } from 'class-validator';
export class QuestionDto {
  // @ApiProperty({type:string})
  @IsNotEmpty({ message: 'question required' })
  @Length(3, 255)
  question: string;

  @IsNotEmpty()
  quizId: number;
}
