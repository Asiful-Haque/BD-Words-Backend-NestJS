import { Controller, Get, Param } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('/')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/:language')
  async getContents(@Param('language') language: string): Promise<{
    randomWords: string[];
    wordOfTheDay: string;
  }> {
    const randomWords = await this.homeService.getRandomWord(language);
    const wordOfTheDay = await this.homeService.getWordOfTheDay();

    return {
      randomWords,
      wordOfTheDay,
    };
  }

  // @Get('/allData')
  // getHome() {
  //   return this.homeService.getHome(language);
  // }
}
