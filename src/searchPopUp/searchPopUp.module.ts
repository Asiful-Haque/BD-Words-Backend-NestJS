import { Module } from '@nestjs/common';
import { searchPopUpController } from './searchPopUp.controller';
import { searchPopUpService } from './searchPopUp.service';
import { meaningService } from 'src/meaning/meaning.service';

@Module({
  controllers: [searchPopUpController],
  providers: [searchPopUpService, meaningService],
})
export class searchPopUpModule {}
