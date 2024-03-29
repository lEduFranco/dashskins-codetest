import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3333

  await app.listen(port);

  console.log(`Run port ${port} 🚀`)
}
bootstrap();
