import { Injectable } from '@nestjs/common';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { InLogDTO } from './dto/in.log.dto';

@Injectable()
export class LogService {
  async logToCsv(logData: InLogDTO) {
    const csvWriter = createCsvWriter({
      path: 'log.csv',
      header: [
        {id: 'token', title: 'TOKEN'},
        {id: 'operation', title: 'OPERATION'},
        {id: 'inputA', title: 'INPUT_A'},
        {id: 'inputB', title: 'INPUT_B'},
        {id: 'result', title: 'RESULT'},
      ],
    });

    const records = [
      { token: logData.token,  operation: logData.operation, inputA: logData.inputA, inputB: logData.inputB, result: logData.result },
    ];

    await csvWriter.writeRecords(records);
  }
}
