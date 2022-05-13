import { Entity, JoinColumn, OneToOne } from "typeorm";
import { DateTimeEntity } from "./base/dateTimeEntity";
import { Skin } from "./skin.entity";
import { User } from "./user.entity";

@Entity("userskin")
export class UserSkin extends DateTimeEntity {
    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToOne(() => Skin)
    @JoinColumn()
    skin: Skin;
}