import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { urdu } from 'src/schemas/urdus.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class similarDataService {
  constructor(
    @InjectModel(urdu.name) private urduSchemaModel: mongoose.Model<urdu>,
  ) {}

  async getAllSimilarData(language: string, word: string): Promise<string[]> {
    // console.log('function is called');
    const results = await this.urduSchemaModel
      .find({ word: { $regex: word, $options: 'i' } })
      .exec();

    return results.map((result) => result.word);
  }
}
