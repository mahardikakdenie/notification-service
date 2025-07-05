import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerEmail: string;

  @Column({ default: 'Pending' })
  status: string;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
