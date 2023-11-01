import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { EProducer } from '../../car/enum/producar.enum';
import { CreatedUpdatedModel } from './common/created-updated.model';
import { UserEntity } from './user.entity';

@Entity('car')
export class CarEntity extends CreatedUpdatedModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum' })
  producer: EProducer;

  @Column({ type: 'text' })
  model: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'int' })
  price: number;

  @ManyToOne(() => UserEntity, (entity) => entity.cars)
  user: UserEntity;
}
