import { NestFactory } from '@nestjs/core';
import { SalesModule } from './sales.module';

async function bootstrap() {
  const app = await NestFactory.create(SalesModule);
  await app.listen(3000);
}
bootstrap();
