import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/testing')
  getTesting(): string {
    return this.appService.getTesting();
  }

  @Get('/testing/v1')
  getTesting2(): string {
    return this.appService.getTesting2();
  }
}
