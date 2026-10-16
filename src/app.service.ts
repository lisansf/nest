import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTesting(): string {
    return 'Halo testing'
  }
  getTesting2(): string {
    return 'Halo testing/v1'
  }
}
