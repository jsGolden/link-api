import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
} from 'typeorm';

@Entity('deals')
class Deal {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  person_name: string;

  @Column()
  value: number;

  @Column()
  currency: string;

  @Column()
  update_time: string;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Deal };
