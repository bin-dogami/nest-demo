import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MyDataModule } from './mydata/mydata.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mydatabase',
      // 如果要 支持emuji 表情，那应该用 utf8mb4_unicode_ci
      charset: 'utf8mb4',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // MyDataModule,
    // DemoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
