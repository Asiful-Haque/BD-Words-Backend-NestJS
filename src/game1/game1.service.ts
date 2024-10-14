import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { shuffle_games } from '../schemas/shuffle.game.schema';

@Injectable()
export class Game1Service {
  constructor(
    @InjectModel(shuffle_games.name)
    private readonly shuffleGamesModel: Model<shuffle_games>,
  ) {}

  async getRandomWord(): Promise<string> {
    try {
      const randomDocuments = await this.shuffleGamesModel.aggregate([
        { $sample: { size: 1 } }, // Get a random document
      ]);
      //cz aggregate returns only an array always
      const randomDocument = randomDocuments[0];

      if (!randomDocument || !randomDocument.Word) {
        throw new Error('No word found');
      }

      return randomDocument.Word;
    } catch (error) {
      throw new Error('Error fetching random word: ' + error.message);
    }
  }
}
