import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../microservices-API/src/auth/constants';
import { JwtStrategy } from '../../microservices-API/src/auth/jwt.strategy';
import { UsersService } from './users.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AuthController,
    JwtStrategy,
  ],
  providers: [
    AuthService,
    UsersService,
  ],
})
export class AuthModule {}
