import { NestFactory } from '@nestjs/core';
import { CalculatorModule } from './calculator.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CalculatorModule, {
    transport: Transport.TCP, options: {port: 3004},
  });
  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
