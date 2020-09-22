import { Controller, Inject } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { LogService } from './log.service';

@Controller()
export class LogController {

  @Inject(LogService)
  private readonly logService: LogService;

  @EventPattern('log')
  async log(data: string) {
    await this.logService.logToCsv(data);
  }
}
