import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Estate {
  @PrimaryColumn({ readonly: true, unique: true })
  public readonly id: string;

  @Column({ array: true, nullable: true })
  public images: string;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public slug: string;

  @Column()
  public category: string;

  @Column()
  public status: string;

  @Column()
  public rooms: string;

  @Column()
  public bathrooms: string;

  @Column()
  public garages: string;

  @Column()
  public area: string;

  @Column()
  public state: string;

  @Column()
  public city: string;

  @Column({ nullable: true })
  public street: string;

  @Column({ nullable: true })
  public bairro: string;

  @Column()
  public price: string;

  @CreateDateColumn({ select: false })
  public created_at: Date;

  @UpdateDateColumn({ select: false })
  public updated_at: Date;

  constructor(estate: Partial<Estate>) {
    Object.assign(this, estate);
  }
}
