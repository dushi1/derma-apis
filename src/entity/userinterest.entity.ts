import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { Interest } from "./interest.entity";
import { User } from "./user.entity";

@Entity("userinterest")
export class UserInterest extends DateTimeEntity {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToOne(() => Interest)
    @JoinColumn()
    interest: Interest;
}
