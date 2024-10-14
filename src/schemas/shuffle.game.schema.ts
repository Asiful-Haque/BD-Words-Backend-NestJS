import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class shuffle_games extends Document {
  @Prop({ required: true, index: true })
  id: number;

  @Prop({ required: true })
  Word: string;
}

export const shuffle_game_Schema = SchemaFactory.createForClass(shuffle_games);
