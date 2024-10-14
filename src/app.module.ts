import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeModule } from './home/home.module';
import { meaningModule } from './meaning/meaning.module';
import { similarDataModule } from './similarData/similarData.module';
import { searchPopUpModule } from './searchPopUp/searchPopUp.module';
import { wordListModule } from './wordList/wordList.module';
import { mcqModule } from './mcq/mcq.module';
import { Game1Module } from './game1/game1.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/urdus'),
    HomeModule,
    meaningModule,
    similarDataModule,
    searchPopUpModule,
    wordListModule,
    mcqModule,
    Game1Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
