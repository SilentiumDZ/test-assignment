import { Controller, Inject, Post, UseGuards, Request } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AuthController {

  @Inject(AuthService)
  private readonly authService: AuthService;

  @UseGuards(JwtAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @MessagePattern({ cmd: 'auth' })
  division(data) {
    return  data;
  }
}
