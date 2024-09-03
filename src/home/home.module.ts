import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';
import { word_of_the_days, WotdSchema } from 'src/schemas/Wot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
    MongooseModule.forFeature([
      { name: word_of_the_days.name, schema: WotdSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
