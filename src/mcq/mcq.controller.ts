import { mcqService } from './mcq.service';
import { Controller, Get } from '@nestjs/common';

interface FillBlankQuiz {
  id: number; // Question ID
  question: string; // The fill-in-the-blank question
  option1: string; // First option
  option2: string; // Second option
  option3: string; // Third option
  option4: string; // Fourth option
  answer: string; // Correct answer
}

@Controller('')
export class mcqController {
  constructor(private readonly mcqService: mcqService) {}

  @Get('/mcq/fillInTheBlanks')
  async getMcqData(): Promise<FillBlankQuiz[]> {
    const response = await this.mcqService.getRandomMcq();
    console.log(response);
    return response;
  }
}
