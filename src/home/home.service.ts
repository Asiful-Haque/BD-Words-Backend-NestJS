import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { urdu } from 'src/schemas/urdus.schema';
import { WordOfTheDay } from 'src/schemas/Wot.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(urdu.name) private urduSchemaModel: mongoose.Model<urdu>,
    @InjectModel(WordOfTheDay.name)
    private wotdSchemaModel: mongoose.Model<WordOfTheDay>,
  ) {}

  async getRandomWord(): Promise<string[]> {
    const randomWords = await this.urduSchemaModel
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
    const dateTime = `${monthNames[currentdate.getMonth()]} ${dayString} ${currentdate.getFullYear()}`;
    console.log(dateTime);
    // Create a regex to match the date portion of the string
    const regex = new RegExp(`\\b${dateTime}.*`, 'i');

    // Find the word of the day using the regex
    const result = await this.wotdSchemaModel.findOne({
      date: { $regex: regex },
    });

    if (!result) {
      return 'No word of the day found for the current date.';
    }
    return result.word;
  }

  async getHome() {
    return await this.urduSchemaModel.find().limit(5).exec();
  }

  async getMeaning(language: string, word: string): Promise<urdu | string> {
    const result = await this.urduSchemaModel.findOne({ word: word }).exec();
    console.log(
      `Result found for the word "${word}" in language "${language}".`,
    );

    if (!result) {
      return `No result found for the word "${word}" in language "${language}".`;
    }
    return result.trans;
  }
}
