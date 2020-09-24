import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class InCalculatorDTO {
  @ApiProperty()
  @IsNumber()
  aValue: number;

  @ApiProperty()
  @IsNumber()
  bValue: number;
}
