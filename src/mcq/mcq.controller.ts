import { mcqService } from './mcq.service';
import { Controller } from '@nestjs/common';

@Controller()
export class mcqController {
  constructor(private readonly mcqService: mcqService) {}
}
