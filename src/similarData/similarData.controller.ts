import { Controller, Get, Param } from '@nestjs/common';
import { similarDataService } from './similarData.service';

@Controller()
export class similarDataController {
  constructor(private readonly similarDataService: similarDataService) {}

  @Get('/:language/word-data/:word/1')
  async getContents(
    @Param('language') language: string,
    @Param('word') word: string,
  ): Promise<{ allSimilarData: string[] }> {
    const allSimilarData = await this.similarDataService.getAllSimilarData(
      language,
      word,
    );
    return { allSimilarData };
  }
}
