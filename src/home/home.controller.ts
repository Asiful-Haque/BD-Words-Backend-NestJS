import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('urdu')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  async getContents(): Promise<{
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
}
