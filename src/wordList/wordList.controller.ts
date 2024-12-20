import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { wordListService } from './wordList.service';

@Controller('')
export class wordListController {
  constructor(private readonly wordListService: wordListService) {}

  @Get('/:language/english-to-:language-wordList')
  async getContents(
    @Param('language') language: string,
    @Query('letter') letter: string = 'all',
    @Query('page') page = 1,
  ): Promise<any> {
    try {
      if (letter.toLocaleLowerCase() === 'all') {
        // console.log(letter.toLocaleLowerCase());
        const result = await this.wordListService.findAll(
          language,
          Number(page),
          100,
        );
        return { language, ...result };
      } else {
        // console.log(letter.toLocaleLowerCase());
        const result = await this.wordListService.getWords(
          language,
          letter.toLocaleLowerCase(),
          Number(page),
        );
        return { language, ...result };
      }
    } catch (error) {
      console.error('Error retrieving contents:', error);
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Get('/:language/GET-WORDS/:letter')
  // async getWords(
  //   @Param('language') language: string,
  //   @Param('letter') letter: string,
  //   @Query('page') page = 1,
  // ): Promise<{ letterWords: string[]; cPage: number; tPages: number }> {
  //   try {
  //     const result = await this.wordListService.getWords(
  //       language,
  //       letter,
  //       page,
  //     );
  //     return { ...result };
  //   } catch (error) {
  //     console.error('Error retrieving contents:', error);
  //     throw new HttpException(
  //       'Internal Server Error',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }
}
