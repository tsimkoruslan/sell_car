import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CarEntity } from './car.entity';
import { CreatedUpdatedModel } from './common/created-updated.model';
import { RoleEntity } from './role.entity';

@Entity('user')
export class UserEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'boolean', nullable: true })
  status: boolean;

  @OneToOne(() => RoleEntity, (entity) => entity.user)
  role: RoleEntity;

  @OneToMany(() => CarEntity, (entity) => entity.user)
  cars: CarEntity;
}
