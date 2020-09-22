import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class InCalculatorDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  aValue: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  bValue: number;
}
