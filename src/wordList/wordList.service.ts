import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { LanguageEntrySchema } from 'src/schemas/language.schema';

@Injectable()
export class wordListService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  private getLanguageModel(language: string): mongoose.Model<any> {
    const collectionName = `${language.toLowerCase()}s`;
    return this.connection.model(collectionName, LanguageEntrySchema);
  }

  async findAll(
    language: string,
    page: number,
    perPage: number,
  ): Promise<{
    words: string[];
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number;
    previousPage: number;
    totalPages: number;
  }> {
    const languageSchemaModel = this.getLanguageModel(language);

    const results = await languageSchemaModel
      .find({}, 'word') // Only selecting the 'word' field
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    const totalWords = await languageSchemaModel.countDocuments({}).exec();
    const totalPages = Math.ceil(totalWords / perPage);

    const words = results.map((doc) => doc.word); // Extract only the 'word' field

    return {
      words,
      currentPage: page,
      hasNextPage: perPage * page < totalWords,
      hasPreviousPage: page > 1,
      nextPage: page + 1,
      previousPage: page - 1,
      totalPages,
    };
  }

  async getWords(
    language: string,
    letter: string,
    page: number,
    perPage: number = 100,
  ): Promise<{
    words: string[];
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number;
    previousPage: number;
    totalPages: number;
  }> {
    const languageSchemaModel = this.getLanguageModel(language);
    const result = await languageSchemaModel
      .find({ word: { $regex: new RegExp(`^${letter}`, 'i') } }, 'word -_id')
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    const totalWords = await languageSchemaModel.countDocuments({
      word: { $regex: new RegExp(`^${letter}`, 'i') },
    });

    const words = result.map((entry) => entry.word);
    const totalPages = Math.ceil(totalWords / perPage);

    return {
      words,
      currentPage: page,
      hasNextPage: perPage * page < totalWords,
      hasPreviousPage: page > 1,
      nextPage: page + 1,
      previousPage: page - 1,
      totalPages,
    };
  }
}
