import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { meaningService } from 'src/meaning/meaning.service';
import { LanguageEntrySchema } from 'src/schemas/language.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class searchPopUpService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
    private readonly meaningService: meaningService,
  ) {}

  private getLanguageModel(language: string): mongoose.Model<any> {
    const collectionName = `${language.toLowerCase()}s`;
    return this.connection.model(collectionName, LanguageEntrySchema);
  }
  async searchPopUpData(language: string, word: string): Promise<string[]> {
    const languageSchemaModel = this.getLanguageModel(language);
    // console.log('function is called');
    const results = await languageSchemaModel
      .find({ word: { $regex: `^${word}`, $options: 'i' } })
      .exec();

    // console.log(results[0].word);
    const wordArray: string[] = [];

    results.forEach((result) => {
      wordArray.push(result.word);
    });

    this.meaningService.shuffleArray(wordArray);

    return wordArray.slice(0, 5);
  }
}
