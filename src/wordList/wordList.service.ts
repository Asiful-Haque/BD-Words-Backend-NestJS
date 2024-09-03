import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { urdu } from 'src/schemas/urdus.schema';

@Injectable()
export class wordListService {
  constructor(
    @InjectModel(urdu.name) private urduSchemaModel: mongoose.Model<urdu>,
  ) {}

  async findAll(
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
    const results = await this.urduSchemaModel
      .find({}, 'word') // Only selecting the 'word' field
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    const totalWords = await this.urduSchemaModel.countDocuments({}).exec();
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
}