import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { meaningController } from './meaning.controller';
import { meaningService } from './meaning.service';
import { HomeService } from 'src/home/home.service';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';
import { word_of_the_days, WotdSchema } from 'src/schemas/Wot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
    MongooseModule.forFeature([
      { name: word_of_the_days.name, schema: WotdSchema },
    ]),
  ],
  controllers: [meaningController],
  providers: [meaningService, HomeService],
})
export class meaningModule {}
