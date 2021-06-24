import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { MyDataModule } from '../mydata/mydata.module';

@Module({
  imports: [MyDataModule],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
