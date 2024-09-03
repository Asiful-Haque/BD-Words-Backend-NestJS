import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeModule } from './home/home.module';
import { meaningModule } from './meaning/meaning.module';
import { similarDataModule } from './similarData/similarData.module';
import { searchPopUpModule } from './searchPopUp/searchPopUp.module';
import { wordListModule } from './wordList/wordList.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/urdus'),
    HomeModule,
    meaningModule,
    similarDataModule,
    searchPopUpModule,
    wordListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
