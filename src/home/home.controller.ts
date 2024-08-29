import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('urdu')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  async getRandomWord(): Promise<{
    randomWords: string[];
    wordOfTheDay: string;
  }> {
    const randomWords = await this.homeService.getRandomWord();
    const wordOfTheDay = await this.homeService.getWordOfTheDay();

    return {
      randomWords,
      wordOfTheDay,
    };
  }

  @Get('/allData')
  getHome() {
    return this.homeService.getHome();
  }

  @Get('/english-to-:language-meaning-:word')
  getMeaning(@Param('language') language: string, @Param('word') word: string) {
    return this.homeService.getMeaning(language, word);
  }
}
