import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { LanguageEntry } from 'src/schemas/language.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class similarDataService {
  constructor(
    @InjectModel(LanguageEntry.name)
    private urduSchemaModel: mongoose.Model<LanguageEntry>,
  ) {}

  async getAllSimilarData(language: string, word: string): Promise<string[]> {
    // console.log('function is called');
    const results = await this.urduSchemaModel
      .find({ word: { $regex: word, $options: 'i' } })
      .exec();

    return results.map((result) => result.word);
  }
}
