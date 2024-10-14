import { Controller, Get } from '@nestjs/common';
import { Game1Service } from './game1.service';

@Controller('game1') // Define the base route for this controller
export class Game1Controller {
  constructor(private readonly game1Service: Game1Service) {}

  @Get('shuffle_game') // Define the endpoint to get a random word
  async getRandomWord(): Promise<{ Word: string }> {
    const Word = await this.game1Service.getRandomWord();
    return { Word };
  }
}
