import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("statecity")
export class StateCity extends DateTimeEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column()
    state: string;

    @Column({ type: 'text' })
    city: string
}