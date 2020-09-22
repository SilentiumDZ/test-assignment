import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class CalculatorController {

  @MessagePattern({ cmd: 'add' })
  addition(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sub' })
  subtraction(data: number[]): number {
    return  data[0] - data[1];
  }

  @MessagePattern({ cmd: 'mul' })
  multiplication(data: number[]): number {
    return  data[0] * data[1];
  }

  @MessagePattern({ cmd: 'div' })
  division(data: number[]): number {
    return  data[0] / data[1];
  }
}
