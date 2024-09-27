import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wordListService } from './wordList.service';
import { wordListController } from './wordList.controller';
import {
  LanguageEntry,
  LanguageEntrySchema,
} from 'src/schemas/language.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LanguageEntry.name, schema: LanguageEntrySchema },
    ]),
  ],
  controllers: [wordListController],
  providers: [wordListService],
})
export class wordListModule {}
