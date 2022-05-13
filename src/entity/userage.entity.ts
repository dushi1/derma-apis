import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { User } from "./user.entity";

@Entity("userage")
export class UserAge extends DateTimeEntity {
    @Column()
    ageFrom: number

    @Column()
    ageTo: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User;
}