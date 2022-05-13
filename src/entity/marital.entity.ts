import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("marital")
export class Marital extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  label: string;
}
