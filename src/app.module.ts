import { QuestionModule } from './modules/questions/question.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { OptionsModule } from './modules/options/options.module';

@Module({
  imports: [
    QuestionModule,
    QuizModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    OptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
