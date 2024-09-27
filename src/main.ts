import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression'; // Importing compression to compress HTTP responses

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for requests from localhost:3000
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from your Next.js app
    methods: 'GET,POST', // Specify the allowed methods (adjust as necessary)
    credentials: true, // If you're using cookies, session or auth
  });

  app.use(compression());

  await app.listen(5000);
}
bootstrap();
