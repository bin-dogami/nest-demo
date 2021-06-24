import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { mytable } from './mydata.entity';
import { CreateMydata } from './create-mydata.dto';

@Injectable()
export class MyDataService {
  constructor(
    @InjectRepository(mytable)
    private readonly mydataRepository: Repository<mytable>,
  ) {}

  async create(createMydata: CreateMydata): Promise<mytable> {
    const oData = this.mydataRepository.create(createMydata);
    return await this.mydataRepository.save(oData);
  }

  async findAll(): Promise<mytable[]> {
    const mytable = await this.mydataRepository.find({
      select: ['id', 'name'],
    });
    return mytable;
  }

  async findOne(id: number): Promise<mytable> {
    return await this.mydataRepository.findOne(id);
  }

  async findOneByName(name: string): Promise<mytable> {
    return await this.mydataRepository.findOne({ name });
  }

  async remove(id: number): Promise<void> {
    await this.mydataRepository.delete(id);
  }
}
