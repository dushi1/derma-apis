import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("highestEdu")
export class HighestEdu extends DateTimeEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column()
  label: string;
}
