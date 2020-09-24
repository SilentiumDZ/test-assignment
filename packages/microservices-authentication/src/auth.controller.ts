import { Controller, Inject} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {

  @Inject(AuthService)
  private readonly authService: AuthService;

  @MessagePattern({ cmd: 'login' })
  multiplication(payload: string[]) {
    return  this.authService.login(payload[0], payload[1]);
  }
}
