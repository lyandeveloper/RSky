import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  avatar!: string;

  @Column()
  born!: string;

  @Column()
  city!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @Column()
  country!: string;

  @Column({ select: false })
  provider!: boolean;

  @CreateDateColumn({ select: false })
  created_at!: Date;

  @UpdateDateColumn({ select: false })
  updated_at!: Date;
}
