import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false, unique: true})
    email: string;

    @Column({type: 'boolean' ,default:true})
    isActive: boolean;

    @Column({type: 'varchar', nullable: false})
    password: string;

}