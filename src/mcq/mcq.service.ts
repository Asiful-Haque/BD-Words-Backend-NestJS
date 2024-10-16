import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { fill_blank_quizes } from 'src/schemas/mcq.schema';

@Injectable()
export class mcqService {
  constructor(
    @InjectModel(fill_blank_quizes.name)
    private fill_blank_quiz_SchemaModel: mongoose.Model<fill_blank_quizes>,
  ) {}

  async getRandomMcq(): Promise<fill_blank_quizes[]> {
    const quiz = await this.fill_blank_quiz_SchemaModel.aggregate([
      { $sample: { size: 10 } }, // Use $sample to get one random document
    ]);
    return quiz.length > 0 ? quiz : null;
  }
}
