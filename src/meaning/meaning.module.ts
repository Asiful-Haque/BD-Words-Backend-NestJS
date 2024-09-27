import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { meaningController } from './meaning.controller';
import { meaningService } from './meaning.service';
import { HomeService } from 'src/home/home.service';
import {
  LanguageEntry,
  LanguageEntrySchema,
} from 'src/schemas/language.schema';
import { word_of_the_days, WotdSchema } from 'src/schemas/Wot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LanguageEntry.name, schema: LanguageEntrySchema },
    ]),
    //It tells mongoose to create a model named urdu from urdu.name
    // based on the urduSchema
    MongooseModule.forFeature([
      { name: word_of_the_days.name, schema: WotdSchema },
    ]),
  ],
  controllers: [meaningController],
  providers: [meaningService, HomeService],
})
export class meaningModule {}
