import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { LanguageEntrySchema } from 'src/schemas/language.schema';
import { word_of_the_days } from 'src/schemas/Wot.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class HomeService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
    @InjectModel(word_of_the_days.name)
    private wotdSchemaModel: mongoose.Model<word_of_the_days>,
  ) {}

  // Dynamically get the language model
  private getLanguageModel(language: string): mongoose.Model<any> {
    const collectionName = `${language.toLowerCase()}s`;
    return this.connection.model(collectionName, LanguageEntrySchema);
  }

  async getRandomWord(language: string): Promise<string[]> {
    const languageSchemaModel = this.getLanguageModel(language);
    const randomWords = await languageSchemaModel
      .aggregate([
        { $sample: { size: 5 } }, // Select 5 random documents
        { $project: { _id: 0, word: 1 } }, // Include only the 'word' field
      ])
      .exec();

    return randomWords.map((doc) => doc.word); // Extract and return the 'word' field
  }

  async getWordOfTheDay(): Promise<string> {
    const currentdate = new Date();
    const dayString = currentdate.getDate().toString().padStart(2, '0'); // Ensure two-digit day
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const dateTime =
      `${monthNames[currentdate.getMonth()]} ${dayString} ${currentdate.getFullYear()}`.trim();

    try {
      const result = await this.wotdSchemaModel
        .findOne({ date: dateTime })
        .exec(); // Ensure query execution

      if (!result) {
        return 'No word of the day found for the current date.';
      }
      return result.word;
    } catch (error) {
      console.error('Error querying the database:', error); // Log any errors
      return 'An error occurred while fetching the word of the day.';
    }
  }

  // async getHome(language: string): Promise<string[]> {
  //   const languageSchemaModel = this.getLanguageModel(language);
  //   return await languageSchemaModel.find().limit(5).exec();
  // }
}
