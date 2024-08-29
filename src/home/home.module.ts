import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { WordOfTheDay, WotdSchema } from 'src/schemas/Wot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
    MongooseModule.forFeature([
      { name: WordOfTheDay.name, schema: WotdSchema },
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
