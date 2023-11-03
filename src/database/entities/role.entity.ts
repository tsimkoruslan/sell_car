import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ERole } from '../../modeles/role/enum/role.enum';
import { UserEntity } from './user.entity';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ERole, enumName: 'role_enum' })
  role: ERole;

  @JoinColumn()
  @OneToOne(() => UserEntity, (entity) => entity.role)
  user: UserEntity;
}
