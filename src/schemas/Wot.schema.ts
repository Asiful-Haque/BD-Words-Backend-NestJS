import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WordOfTheDay extends Document {
  @Prop({ required: true })
  sqlId: number;

  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  date: string;
}

export const WotdSchema = SchemaFactory.createForClass(WordOfTheDay);
