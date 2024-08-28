import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('urdu')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/allData')
  getHome() {
    return this.homeService.getHome();
  }

  @Get()
  setHome() {
    return this.homeService.setHome();
  }
}
