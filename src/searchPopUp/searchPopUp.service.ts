import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { meaningService } from 'src/meaning/meaning.service';
import { urdu } from 'src/schemas/urdus.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class searchPopUpService {
  constructor(
    @InjectModel(urdu.name) private urduSchemaModel: mongoose.Model<urdu>,
    private readonly meaningService: meaningService,
  ) {}

  async searchPopUpData(language: string, word: string): Promise<string[]> {
    // console.log('function is called');
    const results = await this.urduSchemaModel
      .find({ word: { $regex: word, $options: 'i' } })
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
