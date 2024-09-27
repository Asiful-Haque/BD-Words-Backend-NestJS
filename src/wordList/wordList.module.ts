import { Module } from '@nestjs/common';
import { wordListService } from './wordList.service';
import { wordListController } from './wordList.controller';

@Module({
  controllers: [wordListController],
  providers: [wordListService],
})
export class wordListModule {}
