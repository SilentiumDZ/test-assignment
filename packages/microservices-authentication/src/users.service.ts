import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

export type User = { username: string; password: string };

@Injectable()
export class UsersService {
  private readonly usersFilePath = 'users.json';

  async findUser(username: string): Promise<User | undefined> {
    const users = this.getUsers();

    for (const item of users) {
      if (item.username === username) {
        return item;
      }
    }
  }

  async addUser(username, password) {
    const users = this.getUsers();

    const user = { username, password };

    users.push(user);

    const data = JSON.stringify(users);
    fs.writeFileSync(this.usersFilePath, data);
  }

  private getUsers(): User[] {
    const users = [];

    try {
      const rawData = fs.readFileSync(this.usersFilePath);
      users.push(...JSON.parse(rawData.toString()) as User[]);
    } catch (error) { }

    return users;
  }
}
