import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Game1Controller } from './game1.controller';
import { Game1Service } from './game1.service';
import {
  shuffle_games,
  shuffle_game_Schema,
} from '../schemas/shuffle.game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: shuffle_games.name, schema: shuffle_game_Schema },
    ]),
  ],
  controllers: [Game1Controller],
  providers: [Game1Service],
})
export class Game1Module {}
