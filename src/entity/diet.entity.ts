import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("diet")
export class Diet extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  label: string;
}
