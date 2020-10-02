import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Imovel {
  @Column({ readonly: true, unique: true })
  id: string;

  @Column({ array: true })
  images: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column()
  rooms: string;

  @Column()
  bathrooms: string;

  @Column()
  garages: string;

  @Column()
  area: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  bairro: string;

  @Column()
  price: string;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}
