import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { fill_blank_quiz } from 'src/schemas/mcq.schema';

@Injectable()
export class mcqService {
  constructor(
    @InjectModel(fill_blank_quiz.name)
    private urduSchemaModel: mongoose.Model<fill_blank_quiz>,
  ) {}
}
