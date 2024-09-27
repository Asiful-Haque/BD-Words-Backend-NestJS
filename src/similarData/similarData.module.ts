import { Module } from '@nestjs/common';
import { similarDataController } from './similarData.controller';
import { similarDataService } from './similarData.service';

@Module({
  controllers: [similarDataController],
  providers: [similarDataService],
})
export class similarDataModule {}
