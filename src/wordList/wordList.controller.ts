import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { wordListService } from './wordList.service';

@Controller('urdu')
export class wordListController {
  constructor(private readonly wordListService: wordListService) {}

  @Get('/english-to-:language-wordList')
  async getContents(
    @Param('language') language: string,
    @Query('page') page = 1,
  ): Promise<{
    language: string;
    words: string[];
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number;
    previousPage: number;
    totalPages: number;
  }> {
    try {
      const result = await this.wordListService.findAll(Number(page), 100);
      return { language, ...result };
    } catch (error) {
      console.error('Error retrieving contents:', error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //   @Get(':language/GET-WORDS/:letter')
  //   async getWords(
  //     @Param('language') language: string,
  //     @Param('letter') letter: string,
  //   ) {}
}
