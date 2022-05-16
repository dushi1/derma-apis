import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { State } from "./state.entity";

@Entity("country")
export class Country extends DateTimeEntity {
    @PrimaryColumn({ type: "int" })
    id: number;

    @Column()
    label: string;

    @OneToMany(() => State, state => state.country)
    state: State[]
}
