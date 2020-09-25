import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CALCULATOR_SERVICE } from './const/calculator.const';
import { AUTHORIZATION_SERVICE } from './const/authorization.const';
import { LOG_SERVICE } from './const/log.const';
import { InCalculatorDTO } from './dto/in/in.calculator.dto';

@Injectable()
export class AppService {
  @Inject(CALCULATOR_SERVICE)
  private readonly calculatorService: ClientProxy;

  @Inject(AUTHORIZATION_SERVICE)
  private readonly authorizationService: ClientProxy;

  @Inject(LOG_SERVICE)
  private readonly logService: ClientProxy;

  private readonly logPattern = { cmd: 'log' };

  async addVal(a: number, b: number, token: string | undefined): Promise<number> {
    const pattern = { cmd: 'add' };
    const payload: InCalculatorDTO = {aValue: a, bValue: b };
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();

    const logData = {token, operation: 'addition', inputA: a, inputB: b, result: res};
    await this.logService.send(this.logPattern, logData).toPromise();
    return res;
  }

  async subVal(a: number, b: number, token: string | undefined): Promise<number> {
    const pattern = { cmd: 'sub' };
    const payload: InCalculatorDTO = {aValue: a, bValue: b };
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();

    const logData = {token, operation: 'subtraction', inputA: a, inputB: b, result: res};
    await this.logService.send(this.logPattern, logData).toPromise();
    return res;
  }

  async mulVal(a: number, b: number, token: string | undefined): Promise<number> {
    const pattern = { cmd: 'mul' };
    const payload: InCalculatorDTO = {aValue: a, bValue: b };
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();

    const logData = {token, operation: 'multiplication', inputA: a, inputB: b, result: res};
    await this.logService.send(this.logPattern, logData).toPromise();
    return res;
  }

  async divVal(a: number, b: number, token: string | undefined): Promise<number> {
    const pattern = { cmd: 'div' };
    const payload: InCalculatorDTO = {aValue: a, bValue: b };
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();

    const logData = {token, operation: 'division', inputA: a, inputB: b, result: res};
    await this.logService.send(this.logPattern, logData).toPromise();
    return res;
  }

  async login(username: string, password: string) {
    const pattern = { cmd: 'login' };
    const payload = [ username, password ];
    return this.authorizationService.send(pattern, payload);
  }
}
