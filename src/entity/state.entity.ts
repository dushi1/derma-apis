import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { City } from "./city.entity";
import { Country } from "./country.entity";

@Entity("state")
export class State extends DateTimeEntity {
    @PrimaryColumn({ type: "int" })
    id: number;

    @Column()
    label: string;

    @OneToMany(() => City, city => city.state)
    city: City[]

    @ManyToOne(() => Country, country => country.state)
    country: Country[]
}
