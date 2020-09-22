import { ApiProperty } from '@nestjs/swagger';
import { Observable } from 'rxjs';

export class OutCalculatorDTO {
  @ApiProperty()
  resValue: Observable<number>;
}
