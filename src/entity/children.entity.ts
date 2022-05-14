import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("children")
export class Children extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  label: string;
}
