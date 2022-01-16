import { IsNumber, IsString } from 'class-validator';

// import { ApiProperty } from '@nestjs/swagger';
export class QusetionResponseDto {
  //   @ApiProperty({ type: Number })
  @IsNumber()
  id!: number;
  @IsString()
  question!: string;
}
