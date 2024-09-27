import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  LanguageEntry,
  LanguageEntrySchema,
} from 'src/schemas/language.schema';
import { similarDataController } from './similarData.controller';
import { similarDataService } from './similarData.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LanguageEntry.name, schema: LanguageEntrySchema },
    ]),
  ],
  controllers: [similarDataController],
  providers: [similarDataService],
})
export class similarDataModule {}
