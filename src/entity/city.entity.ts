import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { State } from "./state.entity";

@Entity("city")
export class City extends DateTimeEntity {
    @PrimaryColumn({ type: "int" })
    id: number;

    @Column()
    label: string;

    @ManyToOne(() => State, state => state.city)
    state: State[]
}
