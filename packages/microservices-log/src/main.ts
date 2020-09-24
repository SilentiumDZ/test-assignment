import { NestFactory } from '@nestjs/core';
import { LogModule } from './log.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(LogModule, {
    transport: Transport.TCP, options: {port: 3005},
  });
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
