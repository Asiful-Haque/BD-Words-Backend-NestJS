import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { LanguageEntrySchema } from 'src/schemas/language.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class similarDataService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  private getLanguageModel(language: string): mongoose.Model<any> {
    const collectionName = `${language.toLowerCase()}s`;
    return this.connection.model(collectionName, LanguageEntrySchema);
  }
  async getAllSimilarData(language: string, word: string): Promise<string[]> {
    const languageSchemaModel = this.getLanguageModel(language);
    const results = await languageSchemaModel
      .find({ word: { $regex: word, $options: 'i' } })
      .exec();

    return results.map((result) => result.word);
  }
}
