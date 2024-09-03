import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { wordListService } from './wordList.service';
import { wordListController } from './wordList.controller';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
  ],
  controllers: [wordListController],
  providers: [wordListService],
})
export class wordListModule {}
