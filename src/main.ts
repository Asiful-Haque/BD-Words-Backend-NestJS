import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression'; // Importing compression to  compress HTTP responses

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());

  await app.listen(5000);
}
bootstrap();
