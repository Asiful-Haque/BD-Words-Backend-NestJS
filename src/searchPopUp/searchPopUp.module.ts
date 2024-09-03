import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';
import { searchPopUpController } from './searchPopUp.controller';
import { searchPopUpService } from './searchPopUp.service';
import { meaningService } from 'src/meaning/meaning.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
  ],
  controllers: [searchPopUpController],
  providers: [searchPopUpService, meaningService],
})
export class searchPopUpModule {}
