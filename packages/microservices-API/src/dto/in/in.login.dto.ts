import { ApiProperty } from '@nestjs/swagger';
import { IsString, Min, Max } from 'class-validator';

export class InLoginDTO {
  @IsString()
  @ApiProperty()
  @Min(5)
  @Max(20)
  username: string;

  @IsString()
  @ApiProperty()
  @Min(5)
  @Max(20)
  password: string;
}
