import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { urdu } from 'src/schemas/urdus.schema';
// import Hero from 'src/schemas/heros.schema';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(urdu.name) private urduSchemaModel: mongoose.Model<urdu>,
  ) {}
  async getHome() {
    return await this.urduSchemaModel.find().limit(5).exec();
  }

  setHome() {
    return 'hello function set Home';
  }
}
