import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { State } from "./state.entity";

@Entity("statecity")
export class StateCity extends DateTimeEntity {
    @PrimaryColumn({ type: "int" })
    id: number;

    @Column()
    state: string;

    @Column({ type: 'text' })
    city: string
}