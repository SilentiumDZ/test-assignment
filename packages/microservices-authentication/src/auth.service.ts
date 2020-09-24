import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  @Inject(UsersService)
  private usersService: UsersService;

  @Inject(JwtService)
  private jwtService: JwtService;

  async login(username: string, password: string) {
    const user = await this.usersService.findUser(username);
    if (!user) {
      await this.usersService.addUser(username, password);
    } else {
      if (password !== user.password) {
        throw new UnauthorizedException();
      }
    }
    return {
      access_token: this.jwtService.sign({username} ),
    };
  }
}
