import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min, Max, IsNumber } from 'class-validator';

export class InLogDTO {
  @IsString()
  @ApiProperty()
  @Min(5)
  @Max(100)
  token: string;

  @IsString()
  @ApiProperty()
  @Min(5)
  @Max(100)
  operation: string;

  @IsNumber()
  @ApiProperty()
  inputA: number;

  @IsNumber()
  @ApiProperty()
  inputB: number;

  @IsNumber()
  @ApiProperty()
  result: number;
}
