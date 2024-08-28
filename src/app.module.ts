import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/urdus'),
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
