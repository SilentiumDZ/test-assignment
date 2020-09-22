import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InCalculatorDTO } from './dto/in/in.calculator.dto';
import { OutCalculatorDTO } from './dto/in/out.calculator.dto';
import { Observable } from 'rxjs';

@Controller()
@ApiTags('Calculator')
export class AppController {

  @Inject(AppService)
  private readonly appService: AppService;

  @Post('addValues')
  @ApiOperation({ summary: 'Addition' })
  addValues(
    @Body() body: InCalculatorDTO,
  ): Observable<number> {
    return this.appService.addVal(body.aValue, body.bValue);
  }

  @Post('subValues')
  @ApiOperation({ summary: 'Subtraction' })
  subValues(
    @Body() body: InCalculatorDTO,
  ): Observable<number> {
    return this.appService.subVal(body.aValue, body.bValue);
  }

  @Post('mulValues')
  @ApiOperation({ summary: 'Multiplication' })
  mulValues(
    @Body() body: InCalculatorDTO,
  ): Observable<number> {
    return this.appService.mulVal(body.aValue, body.bValue);
  }

  @Post('divValues')
  @ApiOperation({ summary: 'Division' })
  divValues(
    @Body() body: InCalculatorDTO,
  ): Observable<number> {
    return this.appService.divVal(body.aValue, body.bValue);
  }
}
