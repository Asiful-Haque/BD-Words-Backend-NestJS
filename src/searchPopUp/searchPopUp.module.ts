import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LanguageEntry,
  LanguageEntrySchema,
} from 'src/schemas/language.schema';
import { searchPopUpController } from './searchPopUp.controller';
import { searchPopUpService } from './searchPopUp.service';
import { meaningService } from 'src/meaning/meaning.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LanguageEntry.name, schema: LanguageEntrySchema },
    ]),
  ],
  controllers: [searchPopUpController],
  providers: [searchPopUpService, meaningService],
})
export class searchPopUpModule {}
