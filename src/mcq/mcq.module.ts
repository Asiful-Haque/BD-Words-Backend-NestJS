import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { fill_blank_quizes, QuizSchema } from 'src/schemas/mcq.schema';
import { mcqService } from './mcq.service';
import { mcqController } from './mcq.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: fill_blank_quizes.name, schema: QuizSchema },
    ]),
  ],
  controllers: [mcqController],
  providers: [mcqService],
})
export class mcqModule {}
