import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { CALCULATOR_SERVICE } from './const/calculator.const';

@Injectable()
export class AppService {
  constructor(@Inject(CALCULATOR_SERVICE) private readonly calculatorService: ClientProxy) { }

  async onApplicationBootstrap() {
    await this.calculatorService.connect();
  }

  async addVal(a: number, b: number): Promise<number> {
    const pattern = { cmd: 'add' };
    const payload = [ a, b ];
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();
    this.calculatorService.send('log', '');
    return res;
  }

  async subVal(a: number, b: number): Promise<number> {
    const pattern = { cmd: 'sub' };
    const payload = [ a, b ];
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();
    this.calculatorService.send('log', '');
    return res;
  }

  async mulVal(a: number, b: number): Promise<number> {
    const pattern = { cmd: 'mul' };
    const payload = [ a, b ];
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();
    this.calculatorService.send('log', '');
    return res;
  }

  async divVal(a: number, b: number): Promise<number> {
    const pattern = { cmd: 'div' };
    const payload = [ a, b ];
    const res = await this.calculatorService.send<number>(pattern, payload).toPromise();
    this.calculatorService.send('log', '');
    return res;
  }
}
