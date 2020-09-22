import { Injectable } from '@nestjs/common';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

@Injectable()
export class LogService {
  async logToCsv(data) {
    const csvWriter = createCsvWriter({
      path: 'path/to/file.csv',
      header: [
        {id: 'token', title: 'TOKEN'},
        {id: 'operation', title: 'OPERATION'},
        {id: 'input', title: 'INPUT'},
        {id: 'result', title: 'RESULT'},
      ],
    });

    const records = [
      { token: data,  operation: data, input: data, result: data },
    ];

    await csvWriter.writeRecords(records);
  }
}
