import { Module } from '@nestjs/common';
import { MyDataController } from './mydata.controller';
import { MyDataService } from './mydata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mytable } from './mydata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([mytable])],
  controllers: [MyDataController],
  providers: [MyDataService],
  exports: [MyDataService],
})
export class MyDataModule {}
