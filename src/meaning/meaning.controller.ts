import { Controller, Get, Param } from '@nestjs/common';
import { meaningService } from './meaning.service';
import { HomeService } from 'src/home/home.service';

@Controller('urdu')
export class meaningController {
  constructor(
    private readonly meaningService: meaningService,
    private readonly homeService: HomeService,
  ) {}

  @Get('/english-to-:language-meaning-:word')
  async getContents(
    @Param('language') language: string,
    @Param('word') word: string,
  ): Promise<{
    meaning: string;
    sentExample: string[];
    randomWords: string[];
  }> {
    const meaning = await this.meaningService.getMeaning(language, word);
    const sentExample = await this.meaningService.shuffledSentences(
      language,
      word,
    );
    const randomWords = await this.homeService.getRandomWord();

    return { meaning, sentExample, randomWords };
  }
}
