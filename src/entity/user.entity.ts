import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("user", { orderBy: { id: "ASC" } })
export class User extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @Column({ unique: true })
  number: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
