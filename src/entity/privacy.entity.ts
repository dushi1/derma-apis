import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("privacy")
export class Privacy extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  label: string;
}
