import { Controller, Get } from '@nestjs/common';
import { DemoService } from './demo.service';
import { MyDataService } from '../mydata/mydata.service';
import { mytable } from '../mydata/mydata.entity';

@Controller('demo')
export class DemoController {
  constructor(
    private readonly demoService: DemoService,
    private readonly mydataService: MyDataService,
  ) {}

  @Get()
  test(): string {
    return this.demoService.test();
  }

  @Get('create')
  createTestData(): Promise<mytable> {
    return this.mydataService.create({
      name: '张三',
      age: 18,
    });
  }

  @Get('alldata')
  findAll(): Promise<mytable[]> {
    return this.mydataService.findAll();
  }
}
