import { Column, Entity, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";

@Entity("countrystate")
export class CountryState extends DateTimeEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column()
    country: string;

    @Column({ type: 'longtext' })
    state: string
}
