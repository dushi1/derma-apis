import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { User } from "./user.entity";

@Entity("paid")
export class Paid extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  isPaid: string;

  @OneToOne(() => User)
  @JoinColumn()
  user:User
}