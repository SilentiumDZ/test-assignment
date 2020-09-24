import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { InCalculatorDTO } from './dto/in/in.calculator.dto';

@Controller()
export class CalculatorController {

  @MessagePattern({ cmd: 'add' })
  addition(data: InCalculatorDTO): number {
    return (data.aValue + data.bValue);
  }

  @MessagePattern({ cmd: 'sub' })
  subtraction(data: InCalculatorDTO): number {
    return  data.aValue - data.bValue;
  }

  @MessagePattern({ cmd: 'mul' })
  multiplication(data: InCalculatorDTO): number {
    return  data.aValue * data.bValue;
  }

  @MessagePattern({ cmd: 'div' })
  division(data: InCalculatorDTO): number {
    return  data.aValue / data.bValue;
  }
}
