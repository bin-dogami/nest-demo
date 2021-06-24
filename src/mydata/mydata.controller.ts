import { Controller, Get } from '@nestjs/common';
import { MyDataService } from './mydata.service';
import { mytable } from './mydata.entity';

@Controller('mydata')
export class MyDataController {
  constructor(private readonly mydataService: MyDataService) {}

  // 为了测试就用 Get了，其实这里应该用 Post
  // @Get()
  // createTestData(): Promise<mytable> {
  //   return this.mydataService.create({
  //     name: '张三',
  //     age: 18,
  //   });
  // }

  // @Get('all')
  // findAll(): Promise<mytable[]> {
  //   return this.mydataService.findAll();
  // }
}
