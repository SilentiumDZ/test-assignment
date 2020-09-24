import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { InCalculatorDTO } from './dto/in/in.calculator.dto';
import { InUserDataDTO } from './dto/in/in.user-data.dto';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { HeadersAccessToken } from './decorator/acess-token.decorator';

@Controller()
export class AppController {

  @Inject(AppService)
  private readonly appService: AppService;

  @Post('auth/login')
  async login(
    @Body() body: InUserDataDTO,
  ) {
    return this.appService.login(body.username, body.password);
  }

  @Post('addValues')
  @ApiOperation({ summary: 'Addition' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  addValues(
    @Body() body: InCalculatorDTO,
    @HeadersAccessToken() accessToken: string | undefined,
  ): Promise<number> {
    return this.appService.addVal(body.aValue, body.bValue, accessToken);
  }

  @Post('subValues')
  @ApiOperation({ summary: 'Subtraction' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  subValues(
    @Body() body: InCalculatorDTO,
    @HeadersAccessToken() accessToken: string | undefined,
  ): Promise<number> {
    return this.appService.subVal(body.aValue, body.bValue, accessToken);
  }

  @Post('mulValues')
  @ApiOperation({ summary: 'Multiplication' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  mulValues(
    @Body() body: InCalculatorDTO,
    @HeadersAccessToken() accessToken: string | undefined,
  ): Promise<number> {
    return this.appService.mulVal(body.aValue, body.bValue, accessToken);
  }

  @Post('divValues')
  @ApiOperation({ summary: 'Division' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  divValues(
    @Body() body: InCalculatorDTO,
    @HeadersAccessToken() accessToken: string | undefined,
  ): Promise<number> {
    return this.appService.divVal(body.aValue, body.bValue, accessToken);
  }
}
