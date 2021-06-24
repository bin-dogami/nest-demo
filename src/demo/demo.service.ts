import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  test(): string {
    return 'This is test';
  }
}
