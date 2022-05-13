import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("skin")
export class Skin extends DateTimeEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column()
    label: string;
}