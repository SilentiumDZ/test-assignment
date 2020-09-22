import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async findUser(username: string): Promise<User | undefined> {
    const rawData = fs.readFileSync('users.json');
    const parsedData = JSON.parse(rawData.toString());

    for (const item of parsedData) {
      if (item.code === username) {
        return true;
      }
    }
  }

  async addUser(username, password) {
    const user = { username, password };

    const data = JSON.stringify(user);
    fs.writeFileSync('users.json', data);
  }
}
