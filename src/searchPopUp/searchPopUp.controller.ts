import { Controller, Get, Param } from '@nestjs/common';
import { searchPopUpService } from './searchPopUp.service';

@Controller()
export class searchPopUpController {
  constructor(private readonly searchPopUpService: searchPopUpService) {}

  @Get('/:language/search/:word')
  async getContents(
    @Param('language') language: string,
    @Param('word') word: string,
  ): Promise<{ SearchPopUpData: string[] }> {
    const SearchPopUpData = await this.searchPopUpService.searchPopUpData(
      language,
      word,
    );
    return { SearchPopUpData };
  }
}
