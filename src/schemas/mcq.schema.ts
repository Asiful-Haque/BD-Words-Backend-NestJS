import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class fill_blank_quizes extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  option1: string;

  @Prop({ required: true })
  option2: string;

  @Prop({ required: true })
  option3: string;

  @Prop({ required: true })
  option4: string;

  @Prop({ required: true })
  answer: string;
}

export const QuizSchema = SchemaFactory.createForClass(fill_blank_quizes);
