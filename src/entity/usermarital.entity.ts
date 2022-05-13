import { Entity, JoinColumn, OneToOne } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { Marital } from "./marital.entity";
import { User } from "./user.entity";

@Entity("usermarital")
export class UserMarital extends DateTimeEntity {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToOne(() => Marital)
    @JoinColumn()
    marital: Marital;
}
