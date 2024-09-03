import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { urdu, UrduSchema } from 'src/schemas/urdus.schema';
import { similarDataController } from './similarData.controller';
import { similarDataService } from './similarData.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: urdu.name, schema: UrduSchema }]),
  ],
  controllers: [similarDataController],
  providers: [similarDataService],
})
export class similarDataModule {}
