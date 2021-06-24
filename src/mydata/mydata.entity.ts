import {
  Entity,
  Column,
  Index,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity()
// name + age 组成唯一键
@Index(['name', 'age'], { unique: true })
// mytable 为表名
export class mytable {
  // 自增主键
  @PrimaryGeneratedColumn()
  id: number;

  // 名称字段，长度限制为 128
  @Column({ length: 128 })
  name: string;

  // 年龄
  @Column()
  age: number;

  // 时间字段，时间默认为创建的时间
  @Column({ type: 'timestamp', default: () => 'current_timestamp' })
  ctime: Timestamp;
}
